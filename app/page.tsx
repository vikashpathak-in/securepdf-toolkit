export default function Home() {
  const groups = [
    ["PDF essentials", "Merge, split, reorder, rotate, extract, watermark, compress and convert images to PDF."],
    ["Page workspace", "Preview pages, drag to reorder, select, delete, duplicate and rotate pages."],
    ["Read and extract", "Run OCR on scanned PDFs, export selectable text to Excel, and try basic invoice/GST and bank-statement extraction."],
    ["Review and prepare", "Compare rendered PDF pages, add text notes or a drawn signature image, batch-watermark files and clear standard document information fields."]
  ];
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="./" className="text-xl font-bold tracking-tight">SecurePDF <span className="text-blue-400">Toolkit</span></a>
        <a href="./workspace.html" className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold hover:bg-blue-400">Open PDF workspace</a>
      </header>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 text-center">
        <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-300">Browser-based PDF workspace · Experimental tools</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Work with PDFs.<br/><span className="text-blue-400">Keep files on your device.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Organise pages, extract text, review documents and prepare files in your browser. Selected PDF bytes are processed in the browser tab; external libraries are loaded from CDNs.</p>
        <a href="./workspace.html" className="mt-9 inline-flex rounded-full bg-blue-500 px-8 py-4 font-semibold hover:bg-blue-400">Launch SecurePDF Workspace</a>
        <p className="mt-4 text-sm text-slate-400">No account required. Review extracted data and keep original copies of important documents.</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-14 sm:grid-cols-2">
        {groups.map(([title,body])=><article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-slate-300">{body}</p></article>)}
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6">
          <h2 className="font-semibold text-amber-200">Experimental feature limitations</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">OCR, invoice/GST extraction, bank statement extraction and PDF comparison require manual review. PDF-to-Excel exports extracted text and does not guarantee table reconstruction. A drawn signature is not a cryptographic digital signature. Certificate-backed digital signing is not currently available. See the repository documentation for details.</p>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">SecurePDF Toolkit · Browser-based document utilities</footer>
    </main>
  );
}
