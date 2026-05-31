import { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";

export default function VideoModal({ src, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    // Remember what was focused so we can restore it on close.
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Trap Tab focus within the dialog.
      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], video, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Restore focus to the trigger when the modal closes.
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Project demo video"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 grid place-items-center w-10 h-10 rounded-lg border border-line text-chalk hover:text-mint hover:border-mint transition"
        >
          <FiX size={20} />
        </button>
        <video
          src={src}
          controls
          autoPlay
          className="w-full rounded-xl border border-line bg-black"
        />
      </div>
    </div>
  );
}
