/** Professional experience, newest first. Rendered by the Experience section. */
export const experience = [
  {
    role: "Software Developer",
    company: "Razoyo",
    location: "Boulder, CO",
    period: "May 2023 — May 2026",
    note: "Promoted from Web Development Intern",
    description:
      "Full-stack developer across three production products: a CRM, a commerce chat platform, and the company website.",
    // Per-product highlights, rendered as nested cards under the role.
    highlights: [
      {
        title: "Matrix — CRM SaaS",
        stack: "Elixir / Phoenix LiveView",
        bullets: [
          "Shipped 135 issues (320 story points) over 20 months in a production Phoenix LiveView CRM: 66 features and 63 bug fixes.",
          "Built the Algolia-powered global search from proof-of-concept to production, including the core search component.",
          "Designed and built an attribution system that required careful data modeling and up-front architectural analysis.",
          "Resolved urgent production issues, including a data-integrity bug where opportunity records reverted and cleared user data.",
          "Delivered data import/export, contracts & e-signature workflows, dashboard widgets, and CSV/reporting features.",
        ],
        tags: ["Elixir", "Phoenix LiveView", "Algolia", "PostgreSQL"],
      },
      {
        title: "Kenzi — commerce chat platform",
        stack: "WordPress / WooCommerce · DaisyUI",
        bullets: [
          "Co-architected the commerce system and authored the product's WordPress + WooCommerce PHP plugins.",
          "Built the full front-end theme in DaisyUI, owning the styling, UI features, and bug fixes.",
        ],
        tags: ["PHP", "WordPress", "WooCommerce", "DaisyUI"],
      },
      {
        title: "Razoyo Website — marketing site",
        stack: "Hugo / CloudCannon",
        bullets: [
          "Built the company marketing website from scratch (Hugo + CloudCannon, 460+ commits): a large, content-rich site with blog and custom features in JavaScript and Go.",
          "Created a reusable component library and a CMS workflow that let the non-technical marketing team manage the site independently.",
        ],
        tags: ["Hugo", "CloudCannon", "JavaScript", "Go"],
      },
    ],
  },
];
