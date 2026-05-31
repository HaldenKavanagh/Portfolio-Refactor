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
    title: "Kenzi",
    featured: true,
    role: "Razoyo · Software Developer",
    description:
      "Multi-channel customer support platform for eCommerce merchants — email, live chat, and social DMs in one inbox. A Phoenix LiveView app built with domain-driven design: multi-tenant workspace scoping, a Broadway + Pub/Sub webhook pipeline, Oban background sync, and rich-text messaging. Shipped to Google Cloud.",
    tags: [
      "Elixir",
      "Phoenix LiveView",
      "Ecto",
      "Oban",
      "Broadway",
      "Google Cloud",
    ],
  },
  {
    title: "Matrix",
    featured: true,
    role: "Razoyo · Software Developer",
    description:
      "Hospitality sales CRM for managing opportunities, leads, contacts, and activities, with multi-tenant subscriptions and property-level permissions. Phoenix LiveView with AI-assisted summaries, email ingestion, PDF generation, and reporting.",
    tags: ["Elixir", "Phoenix LiveView", "Ecto / PostgreSQL", "AI features"],
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
