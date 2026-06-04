import { FiDownload } from "react-icons/fi";
import { resume } from "../../data/site";

export default function Resume() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-6 py-20">
      <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Resume
          </p>
          <h2 className="font-display font-bold text-4xl text-chalk">
            My background, on paper
          </h2>
        </div>
        <a
          href={resume.downloadURL}
          download
          className="inline-flex items-center gap-2 bg-mint text-base font-semibold px-6 py-3 rounded-xl hover:bg-mint-lite transition"
        >
          <FiDownload size={18} />
          Download PDF
        </a>
      </div>

      {/* Render the PDF on its native white background via the browser viewer. */}
      <object
        data={resume.downloadURL}
        type="application/pdf"
        className="reveal w-full h-[85vh] rounded-xl border border-line bg-white"
        aria-label="Halden Kavanagh resume (PDF)"
      >
        {/* Fallback for browsers that won't inline-render PDFs (e.g. most mobile). */}
        <div className="flex flex-col items-center justify-center gap-4 h-[40vh] bg-white rounded-xl text-center px-6">
          <p className="text-base font-medium">
            Your browser can&apos;t display the PDF inline.
          </p>
          <a
            href={resume.downloadURL}
            download
            className="inline-flex items-center gap-2 bg-mint text-base font-semibold px-6 py-3 rounded-xl hover:bg-mint-lite transition"
          >
            <FiDownload size={18} />
            Download the resume PDF
          </a>
        </div>
      </object>
    </section>
  );
}
