import Head from 'next/head';

export default function PDFObjectViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Load PDF using object</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">Load PDF using object</h1>
            <object data="/pdf-viewer.pdf" type="application/pdf" className="w-full h-96">
                <p>Your browser does not support PDF preview. <a href="/pdf-viewer.pdf" className="text-blue-500 underline">Click to download PDF</a></p>
            </object>
        </div>
    );
}
