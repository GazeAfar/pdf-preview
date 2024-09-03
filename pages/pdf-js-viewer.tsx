import { useEffect, useRef, useState, useCallback } from 'react';
import Head from 'next/head';
import * as pdfjsLib from 'pdfjs-dist';

// 确保 worker 脚本正确加载
if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;
}

const BATCH_SIZE = 1; // 每批渲染的页数

// 这里可以是本地文件路径、在线 URL 或者 API 端点
const PDF_URL = '/pdf-viewer.pdf';

export default function PDFJSViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pdf, setPdf] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [scale, setScale] = useState(1.5);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [renderedPages, setRenderedPages] = useState<number[]>([]);
  const [nextPageToRender, setNextPageToRender] = useState(1);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setIsLoading(true);
        // 如果是 API 端点，可能需要先获取 PDF 数据
        // const response = await fetch(PDF_URL);
        // const pdfData = await response.arrayBuffer();
        // const loadingTask = pdfjsLib.getDocument({data: pdfData});

        const loadingTask = pdfjsLib.getDocument(PDF_URL);
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError(`Failed to load PDF: ${err}`);
        setIsLoading(false);
      }
    };

    loadPDF();
  }, []);

  const renderPage = async (pageNum: number) => {
    if (!pdf || renderedPages.includes(pageNum)) return;

    try {
      console.log(`Rendering page ${pageNum}`);
      const page = await pdf.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context!,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      const pageContainer = document.createElement('div');
      pageContainer.className = 'mb-4';
      pageContainer.appendChild(canvas);

      const pageNumberElement = document.createElement('div');
      pageNumberElement.textContent = `Page ${pageNum}`;
      pageNumberElement.className = 'text-center font-bold';
      pageContainer.insertBefore(pageNumberElement, canvas);

      containerRef.current?.appendChild(pageContainer);
      setRenderedPages(prev => [...prev, pageNum]);
      console.log(`Page ${pageNum} rendered successfully`);
    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err);
    }
  };

  const renderBatch = useCallback(async () => {
    if (!pdf || isLoading || isRendering || nextPageToRender > pdf.numPages) return;

    setIsRendering(true);
    const endPage = Math.min(nextPageToRender + BATCH_SIZE - 1, pdf.numPages);
    
    for (let i = nextPageToRender; i <= endPage; i++) {
      await renderPage(i);
    }

    setNextPageToRender(endPage + 1);
    setIsRendering(false);
  }, [pdf, isLoading, nextPageToRender, isRendering]);

  useEffect(() => {
    if (pdf && !isLoading && nextPageToRender === 1) {
      renderBatch();
    }
  }, [pdf, isLoading, renderBatch, nextPageToRender]);

  useEffect(() => {
    const handleScroll = () => {
      if (!pdf || isLoading || nextPageToRender > pdf.numPages) return;

      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const containerBottom = container.offsetTop + container.offsetHeight;

      if (scrollPosition >= containerBottom - 500) {
        renderBatch();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pdf, isLoading, nextPageToRender, renderBatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>PDF.js Viewer</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">PDF.js Viewer</h1>
      <div ref={containerRef} className="bg-white p-4 rounded-lg shadow-lg">
        {isLoading ? (
          <p>Loading PDF...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : null}
      </div>
    </div>
  );
}