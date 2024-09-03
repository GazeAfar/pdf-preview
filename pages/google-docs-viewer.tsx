import Head from 'next/head';

export default function GoogleDocsViewer() {
  const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'; // 替换为您的PDF文件URL，需要一个公开可访问的 URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Google Docs Viewer</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Google Docs Viewer</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
          className="w-full h-[600px] border-none"
        ></iframe>
      </div>
    </div>
  );
}