export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="./" className="text-xl font-bold tracking-tight">SecurePDF <span className="text-blue-400">Toolkit</span></a>
        <a href="./workspace.html" className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold hover:bg-blue-400">Open PDF workspace</a>
      </header>
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-20 text-center">
        <p className="mb-5 inline-flex rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-300">Browser-based PDF tools</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-6xl">Work with PDFs.<br/><span className="text-blue-400">Keep files on your device.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Merge, split, reorder, rotate, extract, watermark, compress, convert images to PDF and protect documents with a password. Processing runs locally in your browser.</p>
        <a href="./workspace.html" className="mt-9 inline-flex rounded-full bg-blue-500 px-8 py-4 font-semibold hover:bg-blue-400">Launch SecurePDF Workspace</a>
        <p className="mt-4 text-sm text-slate-400">No account required. No document upload endpoint. Large files may require substantial device memory.</p>
      </section>
      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-24 sm:grid-cols-3">
        {[
          ["Organise","Merge files, split documents, reorder pages, rotate and extract selected pages."],
          ["Prepare","Add text watermarks, convert images to PDF and compress scanned documents."],
          ["Protect","Apply PDF open-password encryption locally in your browser."]
        ].map(([title,body])=><article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-3 leading-7 text-slate-300">{body}</p></article>)}
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">SecurePDF Toolkit · Browser-based document utilities</footer>
    </main>
  );
}
