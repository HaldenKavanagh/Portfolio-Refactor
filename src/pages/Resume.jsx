import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { resume } from "../data/site";

export default function Resume() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-24 pb-20 grain">
      <div className="reveal in flex flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Resume
            </p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-chalk">
              Halden Kavanagh
            </h1>
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
          className="w-full h-[85vh] rounded-xl border border-line bg-white"
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

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sage hover:text-mint ul-anim w-max text-sm font-semibold"
        >
          <FiArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </main>
  );
}
