# SecurePDF manual test plan

Use synthetic or redacted sample documents only. Keep originals unchanged. Record browser/version, input file size, expected result, actual result and any console errors.

## PDF page operations
- Merge two PDFs and confirm page count/order.
- Split a five-page PDF into ranges `1-2;3-5`; open each output.
- Reorder all pages and verify visual sequence.
- Rotate one page and all pages; verify orientation.
- Extract non-contiguous pages and verify page count.
- Add watermark and verify placement/opacity.
- Add password protection; reopen with correct password and reject incorrect password.
- Convert multiple JPG/PNG/WebP images to PDF and verify orientation.
- Compare compressed output size and quality; confirm text is no longer selectable as documented.

## Page manager
- Load a multi-page PDF, verify thumbnail count.
- Drag page 3 before page 1 and export.
- Delete one page, duplicate another, rotate a selected page.
- Confirm at least one page must remain.
- Confirm selected pages and output order are reflected in exported PDF.

## OCR and extraction
- OCR a clear English scan and compare every line to source.
- Test rotated, low-contrast and multi-column pages; note OCR errors.
- Export selectable text PDF to XLSX and compare page text.
- Test invoice extraction on multiple invoice layouts; check invoice number, date, GSTIN, taxable value, CGST, SGST, IGST and total manually.
- Test bank statements from different banks; reconcile every candidate row and do not assume debit/credit/balance classification.

## Comparison, annotation, batch and metadata
- Compare identical PDFs and expect near-zero visual difference; compare one changed page and confirm that page is flagged.
- Draw a visual signature and add a text note; confirm both appear. Do not treat this as a cryptographic signature.
- Batch-watermark at least three PDFs and open each output.
- Clear standard metadata and inspect common document properties. Do not assume all metadata or embedded content was removed.

## Release gate
Do not advertise a feature as production-ready until it passes the relevant tests on supported desktop and mobile browsers, including malformed files, encrypted files, large files and error handling. Cryptographic digital signatures remain unimplemented until a certificate-backed signing and validation design is delivered.
