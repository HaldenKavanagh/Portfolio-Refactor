/** Single source of truth for personal/contact details shared across sections. */
export const site = {
  name: "Halden Kavanagh",
  role: "Full Stack Web Developer",
  location: "Boulder, Colorado",
  email: "haldenkav@gmail.com",
  github: "https://github.com/HaldenKavanagh",
  linkedin: "https://www.linkedin.com/in/halden-kavanagh-79169b2b6/",
  credly:
    "https://www.credly.com/badges/3d2f16be-a807-4992-be69-bae0bd6aa68c/public_url",
};

/** Resume hosted as a Google Doc; one ID, two derived URLs. */
const RESUME_DOC_ID = "1CcxU9Eblq3bGeOXYhNAtXQi-Bi3iW77OG46Ibx0SQ-U";
export const resume = {
  previewURL: `https://docs.google.com/document/d/${RESUME_DOC_ID}/preview`,
  downloadURL: `https://docs.google.com/document/d/${RESUME_DOC_ID}/export?format=pdf`,
};
