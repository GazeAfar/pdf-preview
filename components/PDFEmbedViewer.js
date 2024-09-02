import Head from 'next/head';

export default function PDFEmbedViewer() {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Load PDF using embed</title>
                <meta charSet="UTF-8" />
            </Head>
            <h1 className="text-2xl font-bold mb-4">Load PDF using embed</h1>
            <embed src="/pdf-viewer.pdf" type="application/pdf" className="w-full h-96" />
        </div>
    );
}
