# SecurePDF Toolkit

A browser-based PDF workspace. The first release includes PDF merging, splitting, page reordering, rotation, extraction, text watermarks, AES-256 password protection, raster-based compression, and images-to-PDF.

## Run locally

This repository uses Next.js for the overview page and serves the processing workspace as a static browser page.

```bash
npm ci
npm run dev
```

Open the local Next.js address and choose **Open PDF workspace**. The workspace is also available at `/workspace.html` on the deployed site.

## Tools and limitations

| Tool | Implementation |
|---|---|
| Merge, split, reorder, rotate, extract | pdf-lib in the browser |
| Text watermark | pdf-lib in the browser |
| Images to PDF | pdf-lib and browser image decoding |
| Password protection | QPDF WebAssembly, AES-256 |
| Compression | PDF.js page rendering + JPEG reconstruction |

Compression in this first release rasterises every page. The output may be smaller, but selectable text, links, form fields, accessibility structure and vector quality are not preserved. It is not a lossless optimiser.

Password protection uses QPDF WebAssembly loaded by the browser. If the WASM module cannot load in a browser or deployment environment, encryption will fail visibly and no success message will be shown. Always reopen the output and verify the password before sharing it.

## Privacy and security

PDF bytes are processed in the browser tab. The app has no document-processing API and does not intentionally upload selected documents. The browser downloads JavaScript/WASM libraries from public CDNs, so it makes network requests to those library hosts. Do not use this on a shared or compromised device for highly sensitive records. Close the tab when finished.

The browser must have enough available memory for the selected files. Large or image-heavy documents can fail on low-memory devices. Keep original copies of important documents.

## Release status

This is an initial functional release. Test with copies of representative PDFs before relying on outputs for business, tax, legal or archival workflows. OCR, PDF-to-Word, PDF-to-Excel, digital signatures, batch automation and desktop downloads are not included.
