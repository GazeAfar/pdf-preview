declare module 'pdfjs-dist/build/pdf' {
  export * from 'pdfjs-dist';
}

declare module 'pdfjs-dist' {
  export * from 'pdfjs-dist/types/src/display/api';
  export * from 'pdfjs-dist/types/src/display/worker_options';
  export const web: {
    PDFViewer: any;
    EventBus: any;
  };
}