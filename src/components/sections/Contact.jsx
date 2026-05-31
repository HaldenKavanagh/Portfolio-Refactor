import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "../../data/site";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const inputClass =
  "bg-surface border border-line rounded-lg px-4 py-3 text-chalk placeholder-sage focus:border-mint focus:outline-none w-full";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const flash = (next) => {
    setStatus(next);
    if (next?.type === "success") {
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      flash({
        type: "error",
        message:
          "The contact form isn't configured right now — please email me directly.",
      });
      return;
    }

    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      formRef.current.reset();
      flash({ type: "success", message: "Thanks! Your message is on its way." });
    } catch (err) {
      console.error("EmailJS send failed", err);
      flash({
        type: "error",
        message: "Something went wrong sending your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 text-center reveal"
    >
      <p className="text-mint font-semibold tracking-[0.2em] text-xs uppercase mb-3">
        Contact
      </p>
      <h2 className="font-display font-bold text-5xl sm:text-6xl text-chalk">
        Let&apos;s build something.
      </h2>
      <p className="mt-5 text-lg text-sage max-w-md mx-auto">
        Open to full-time roles and interesting projects. Drop me a message
        below, or email me directly.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-10 max-w-lg mx-auto grid gap-4 text-left"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-mist">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-mist">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-mist">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What would you like to build?"
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 bg-mint text-base font-semibold px-7 py-3.5 rounded-xl hover:bg-mint-lite transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send message"}
        </button>

        {status && (
          <p
            role={status.type === "success" ? "status" : "alert"}
            className={`text-sm ${
              status.type === "success" ? "text-mint" : "text-danger"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>

      <div className="mt-8 flex flex-col items-center gap-5">
        <a
          href={`mailto:${site.email}`}
          className="text-sage ul-anim text-sm"
        >
          {site.email}
        </a>
        <div className="flex items-center justify-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-11 h-11 rounded-xl border border-line text-sage hover:text-mint hover:border-mint transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-11 h-11 rounded-xl border border-line text-sage hover:text-mint hover:border-mint transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
