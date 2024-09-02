import Head from 'next/head';

export default function PDFObjectViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>使用object加载PDF</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">使用object加载PDF</h1>
            <object data="/pdf-viewer.pdf" type="application/pdf" className="w-full h-96">
                <p>您的浏览器不支持PDF预览，<a href="/pdf-viewer.pdf" className="text-blue-500 underline">点击下载PDF</a></p>
            </object>
        </div>
    );
}
