const path = require("path");
require("dotenv").config();
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WeatherXM Docs",
  tagline: "Hyperlocal weather stations, QoD v3 data quality, rewards, and Pro Weather API documentation.",
  url: "https://docs.weatherxm.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon/favicon.ico",
  organizationName: "WeatherXM", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  plugins: [
    path.resolve(__dirname, "plugins/docusaurus-plugin-hotjar"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: require("./redirects.js")
      }
    ]
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true
      })
    ]
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-E38CY3JRM3"
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/WeatherXM/docs/blob/main",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/social-card.png",
    metadata: [{ name: "twitter:site", content: "@WeatherXM" }],
    hotjar: {
      applicationId: 2542811
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    navbar: {
      logo: {
        alt: "WeatherXM",
        src: "img/wxm-logo-wide-notagline.svg",
        srcDark: "img/wxm-logo-wide-notagline-white.svg"
      },
      items: [
        {
          href: "https://app.weatherxm.com/",
          label: "Web App",
          position: "right"
        },
        {
          href: "https://explorer.weatherxm.com/",
          label: "Explorer",
          position: "right"
        },
        {
          href: "https://claim.weatherxm.com/",
          label: "Claim Rewards",
          position: "right"
        },
        {
          href: "https://pro.weatherxm.com/",
          label: "Pro API",
          position: "right"
        },
        {
          href: "https://support.weatherxm.com",
          label: "Help Center",
          position: "right"
        },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
            {
              href: "https://weatherxm.com/whitepaper",
              label: "Whitepaper"
            },
            {
              href: "https://github.com/WeatherXM/docs",
              label: "GitHub"
            },
            {
              href: "https://weatherxm.network",
              label: "WeatherXM Network Association"
            }
          ]
        },
        {
          href: "https://weatherxm.com/stations",
          label: "Get a Station",
          position: "right",
          id: "docs"
        }
      ]
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Products",
          items: [
            { label: "Stations", href: "https://weatherxm.com/stations" },
            { label: "Web App", href: "https://app.weatherxm.com" },
            { label: "WeatherXM Pro", href: "https://pro.weatherxm.com" },
            { label: "FACT", href: "https://fact.weatherxm.com" },
            { label: "Explorer", href: "https://explorer.weatherxm.com" }
          ]
        },
        {
          title: "Developers",
          items: [
            { label: "Pro API Docs", href: "https://pro.weatherxm.com/docs" },
            { label: "GitHub", href: "https://github.com/WeatherXM/docs" },
            { label: "llms.txt", href: "https://docs.weatherxm.com/llms.txt" }
          ]
        },
        {
          title: "Community",
          items: [
            { label: "Discord", href: "https://weatherxm.com/discord" },
            { label: "Support", href: "https://support.weatherxm.com" },
            { label: "WeatherXM Network Association", href: "https://weatherxm.network" }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WeatherXM`
    }
  },
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous"
    }
  ]
};

module.exports = config;
