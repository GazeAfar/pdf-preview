import Head from 'next/head';

export default function PDFIframeViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>使用iframe加载PDF</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">使用iframe加载PDF</h1>
            <iframe src="/pdf-viewer.pdf" className="w-full h-96"></iframe>
        </div>
    );
}
