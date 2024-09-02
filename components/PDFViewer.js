import Head from 'next/head';

export default function PDFViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>使用a标签加载PDF</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">使用a标签加载PDF</h1>
            <a href="/pdf-viewer.pdf" target="_blank" className="text-blue-500 underline">
                点击查看PDF
            </a>
        </div>
    );
}
