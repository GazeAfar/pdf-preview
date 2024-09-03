# PDF Viewer Project

This project demonstrates different methods to load and display PDF files in a web application using Next.js and React.

## Features

- PDF.js Viewer: Custom implementation using PDF.js library
  - Batch rendering of PDF pages
  - Scroll-based loading of additional pages
- Google Docs Viewer: Embedded viewer using Google Docs
- Multiple viewing options: iframe, object, embed, and anchor tags

## Component List

1. **PDFIframeViewer**: Loads PDF files using the `iframe` tag.
2. **PDFViewer**: Loads PDF files using the `a` tag.
3. **PDFObjectViewer**: Loads PDF files using the `object` tag.
4. **PDFEmbedViewer**: Loads PDF files using the `embed` tag.
5. **PDFJSViewer**: Custom viewer using PDF.js with batch rendering and scroll loading.
6. **GoogleDocsViewer**: Embedded viewer using Google Docs.

## Styles

The global styles for the project are defined in the `styles/globals.css` file, using Tailwind CSS for styling.

## How to Run

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Ensure you have a PDF file named `pdf-viewer.pdf` in the `public` folder.
4. Run `npm run dev` to start the development server.
5. Open your browser and visit `http://localhost:3000` to see the result.

## PDF.js Viewer Implementation

The PDF.js viewer (`pages/pdf-js-viewer.tsx`) includes the following features:
- Batch rendering of PDF pages for improved performance
- Scroll-based loading of additional pages
- Customizable batch size for rendering
- Error handling and loading states

## Google Docs Viewer Implementation

The Google Docs viewer (`pages/google-docs-viewer.tsx`) provides an alternative method to display PDFs:
- Uses Google Docs' embedded viewer
- Requires a publicly accessible URL for the PDF file
- Simple iframe implementation

## Notes

- For the Google Docs viewer, ensure your PDF is hosted on a publicly accessible URL.
- The PDF.js viewer works with local files in the `public` folder.
- If you encounter CORS issues, consider using a Next.js API route as a proxy for serving PDFs.

## Troubleshooting

- If PDFs are not loading, check the browser console for error messages.
- Ensure the `pdf.worker.min.js` file is correctly placed in the `public` folder for the PDF.js viewer.
- For cross-origin PDF loading, make sure your server allows CORS or use a proxy solution.

## Future Improvements

- Implement zooming and page navigation controls for the PDF.js viewer
- Add support for password-protected PDFs
- Optimize performance for very large PDF files

We hope this project helps you understand different methods of loading and displaying PDF files in a web application.
