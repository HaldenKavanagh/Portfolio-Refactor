/** Single source of truth for personal/contact details shared across sections. */
export const site = {
  name: "Halden Kavanagh",
  role: "Full Stack Developer — Elixir / Phoenix",
  location: "Boulder, CO",
  email: "haldenkav@gmail.com",
  phone: "(303) 656-1558",
  github: "https://github.com/HaldenKavanagh",
  linkedin: "https://www.linkedin.com/in/HaldenKavanagh",
  credly:
    "https://www.credly.com/badges/3d2f16be-a807-4992-be69-bae0bd6aa68c/public_url",
};

/**
 * Resume rendered natively in the page (see <Resume />); the PDF is the
 * downloadable source of truth, served from public/.
 */
export const resume = {
  downloadURL: "/Halden-Kavanagh-Resume.pdf",
};
