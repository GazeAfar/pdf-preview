# Project Introduction

This project demonstrates how to load and display PDF files using different HTML tags. We provide four different methods, each implemented in a separate component.

## Component List

1. **PDFIframeViewer**: Loads PDF files using the `iframe` tag.
2. **PDFViewer**: Loads PDF files using the `a` tag.
3. **PDFObjectViewer**: Loads PDF files using the `object` tag.
4. **PDFEmbedViewer**: Loads PDF files using the `embed` tag.

Each component is contained in the `components` folder and uses `next/head` to set the page title and charset.

## Styles

The global styles for the project are defined in the `styles/globals.css` file, using Tailwind CSS to simplify style management.

## How to Run

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the development server.
4. Open your browser and visit `http://localhost:3000` to see the result.

## Test Links

Using `<a>` tag to load PDF: <a href="https://pdf-preview-seven.vercel.app/" target="_blank">https://pdf-preview-seven.vercel.app/</a>  
Using `<iframe>` tag to load PDF: <a href="https://pdf-preview-seven.vercel.app/iframe" target="_blank">https://pdf-preview-seven.vercel.app/iframe</a>  
Using `<object>` tag to load PDF: <a href="https://pdf-preview-seven.vercel.app/object" target="_blank">https://pdf-preview-seven.vercel.app/object</a>  
Using `<embed>` tag to load PDF: <a href="https://pdf-preview-seven.vercel.app/embed" target="_blank">https://pdf-preview-seven.vercel.app/embed</a>  

We hope this project helps you better understand how to load and display PDF files on a webpage.
