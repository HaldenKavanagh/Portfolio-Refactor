import candleImg from "../images/candles.png";
import textEditerImg from "../images/text-editer.png";
import menYouImg from "../images/menYou.png";
import weatherImg from "../images/weather.png";
import tankBlogImg from "../images/tank-blog.png";
import starRayImg from "../images/starrray.png";
import menYouVideo from "../videos/MenYou.mp4";

/**
 * Featured projects, rendered by <ProjectCard>.
 * - `links` (optional): ordered call-to-action buttons.
 * - `demoVideo` (optional): opens the in-page video modal.
 * - `tags` (optional): tech-stack chips shown on the card.
 * - `featured` (optional): professional work; rendered with an accent badge and
 *   no image (these are private production apps without public links).
 */
export const projects = [
  {
    title: "Matrix",
    featured: true,
    role: "Razoyo · Software Developer",
    description:
      "Production CRM SaaS in Phoenix LiveView. I shipped 135 issues — 66 features, 63 fixes — over 20 months, built the Algolia-powered global search from proof-of-concept to production, and designed an attribution system that needed careful data modeling. Also delivered data import/export, contracts & e-signature, dashboard widgets, and reporting.",
    tags: ["Elixir", "Phoenix LiveView", "Algolia", "PostgreSQL"],
  },
  {
    title: "Kenzi",
    featured: true,
    role: "Razoyo · Software Developer",
    description:
      "Commerce chat platform. I co-architected the commerce system and authored its WordPress + WooCommerce PHP plugins, then built the full front-end theme in DaisyUI — owning the styling, UI features, and bug fixes.",
    tags: ["PHP", "WordPress", "WooCommerce", "DaisyUI"],
  },
  {
    title: "Razoyo Website",
    featured: true,
    role: "Razoyo · Software Developer",
    description:
      "Company marketing site, built from scratch with Hugo + CloudCannon (460+ commits): a large, content-rich site with a blog and custom features in JavaScript and Go. I built a reusable component library and a CMS workflow so the non-technical marketing team could manage it independently.",
    tags: ["Hugo", "CloudCannon", "JavaScript", "Go"],
  },
  {
    title: "Star Ray (V2)",
    image: starRayImg,
    alt: "Star Ray e-commerce site homepage",
    description:
      "Full-stack MERN e-commerce site built for a local boutique shop.",
    links: [
      { label: "Code", href: "https://github.com/laurabacon/Star-Ray" },
      {
        label: "Live",
        href: "https://lit-eyrie-12834-5b6e0706190e.herokuapp.com/",
        external: true,
      },
    ],
  },
  {
    title: "The Tank Blog",
    image: tankBlogImg,
    alt: "The Tank Blog post feed",
    description:
      "Full-stack MERN blog platform — users can log in, create posts, comment, and more.",
    links: [
      { label: "Code", href: "https://github.com/HaldenKavanagh/Tank-Blog" },
      {
        label: "Live",
        href: "https://calm-eyrie-88400-aa49694dc0d1.herokuapp.com/",
        external: true,
      },
    ],
  },
  {
    title: "menYou",
    image: menYouImg,
    alt: "menYou date-night planner interface",
    description:
      "Date-night planner using multiple third-party APIs to plan your next date night. Refactored in React Native.",
    demoVideo: menYouVideo,
    links: [
      { label: "Code", href: "https://github.com/scook9/menYou" },
      { label: "Live", href: "https://scook9.github.io/menYou/", external: true },
      {
        label: "Native Refactor",
        href: "https://github.com/HaldenKavanagh/MenYou-Native-Refactor",
      },
    ],
  },
  {
    title: "Star Ray (V1)",
    image: candleImg,
    alt: "Star Ray V1 candle shop storefront",
    description:
      "Full-stack e-commerce site for a local boutique, backed by a SQL database with Handlebars templating.",
    links: [
      { label: "Code", href: "https://github.com/scook9/candles-n-things" },
      {
        label: "Live",
        href: "https://shielded-gorge-64229-3114d756159e.herokuapp.com/",
        external: true,
      },
    ],
  },
  {
    title: "PWA Text Editor",
    image: textEditerImg,
    alt: "Progressive web app text editor",
    description:
      "Offline-capable progressive web app text editor, bundled with Webpack.",
    links: [
      { label: "Code", href: "https://github.com/HaldenKavanagh/text-editer" },
      {
        label: "Live",
        href: "https://jate-pwa-text-editor-kavanagh-9dd90f6a05dd.herokuapp.com/",
        external: true,
      },
    ],
  },
  {
    title: "Weather Dashboard",
    image: weatherImg,
    alt: "Weekly weather forecast dashboard",
    description:
      "A clean weekly forecast dashboard for any location you choose.",
    links: [
      {
        label: "Code",
        href: "https://github.com/scook9/module-6-weather-dashboard",
      },
      {
        label: "Live",
        href: "https://scook9.github.io/module-6-weather-dashboard/",
        external: true,
      },
    ],
  },
];
