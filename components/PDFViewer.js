import Head from 'next/head';

export default function PDFViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Load PDF using a tag</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">Load PDF using <code>&lt;a&gt;</code> tag</h1>
            <a href="/pdf-viewer.pdf" target="_blank" className="text-blue-500 underline">
                Click to view PDF
            </a>
        </div>
    );
}
