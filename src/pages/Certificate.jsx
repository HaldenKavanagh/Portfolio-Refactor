import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import duCert from "../images/du-cert.png";

export default function Certificate() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-24 pb-20 grain">
      <div className="reveal in flex flex-col gap-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-line text-chalk px-5 py-2.5 rounded-xl hover:border-mint hover:text-mint transition w-max text-sm font-semibold"
        >
          <FiArrowLeft size={16} />
          Back home
        </Link>

        <div>
          <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Credential
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-chalk">
            Certificate
          </h1>
        </div>

        <img
          src={duCert}
          alt="University of Denver full-stack coding bootcamp certificate"
          className="w-full max-w-3xl rounded-xl border border-line glow"
        />
      </div>
    </main>
  );
}
