# SecurePDF Toolkit

SecurePDF is a browser-based PDF workspace. The application is a static Next.js site with a separate client-side workspace at `/workspace.html`.

## Run locally

```bash
npm ci
npm run dev
```

Open the local Next.js URL and choose **Open PDF workspace**.

## Implemented tools

### PDF operations
- Merge, split, reorder, rotate and extract pages
- Text watermarks and batch watermarking
- Password protection through a QPDF WebAssembly integration (browser/CDN compatibility must be tested)
- Images to PDF
- Raster-based compression (not lossless; text, links, forms and vector content are not retained)

### Document workspace additions
- Visual page manager with thumbnails, drag reordering, selection, deletion, duplication and rotation
- OCR for scanned PDFs using Tesseract.js (English language data is loaded on demand)
- PDF text extraction to XLSX
- Basic invoice/GST field extraction from selectable PDF text
- Candidate transaction-line extraction from selectable bank statement text
- Page-render comparison report
- Text annotation and drawn signature image on the first page
- Batch watermarking
- Clearing standard PDF document information fields

## Important limitations

This is an experimental first browser release. The tools have not yet been validated against a broad set of real-world documents or bank layouts.

- **OCR:** Recognition depends on scan quality, language, rotation and contrast. OCR output must be proofread.
- **PDF to Excel:** Exports selectable text by page. It does not guarantee reconstruction of tables.
- **Invoice/GST reader:** Uses label and pattern matching. It is not a GST compliance check, tax determination or substitute for checking the original invoice. Blank or incorrect fields are possible.
- **Bank statement to Excel:** Produces candidate transaction rows from extracted text. It does not reliably classify debit, credit and balance columns across banks. Reconcile every row to the source statement.
- **PDF comparison:** Compares rendered pixels. It is not a semantic or legal redline and can report differences caused by rendering.
- **Visual signatures:** The drawn signature is an image only. It is not a certificate-backed PDF digital signature.
- **Cryptographic digital signatures:** Not implemented. Certificate/key custody, PDF signature containers, timestamping and validation are required before this can be offered.
- **Metadata:** Clears common document information fields only. It is not a forensic scrub of XMP, embedded files, annotations, revision history or every metadata stream.
- **Page manager:** Reordering/deletion/duplication and rotation are supported in the current interface. Verify outputs before relying on them.
- **Batch processing:** Currently batch watermarking only.
- **Compression:** Rebuilds pages as JPEG images and can make output larger or reduce quality. It removes selectable text and interactive PDF structures.

## Privacy and external libraries

PDF processing is intended to happen in the browser tab. There is no document-processing API in this repository. The page loads PDF.js, PDF-lib, Tesseract.js, SheetJS and the QPDF WebAssembly package from public CDNs, so the browser contacts those library hosts to download code and (for OCR) language data. The app does not intentionally upload the selected PDF bytes to a processing server. For highly sensitive documents, use a trusted device and network and review the code/dependencies before use.

Large files may exceed browser memory limits. Keep originals and close the tab after processing.

## Verification status

A successful Next.js static build confirms the website compiles; it does not prove every PDF operation works correctly in every browser. See [TEST_PLAN.md](./TEST_PLAN.md) for the manual verification checklist. Do not rely on extracted financial, tax, legal or identity data without comparing it with the source document.
