const path = require("path");
require("dotenv").config();
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WeatherXM Docs",
  tagline: "WeatherXM Documentation Page",
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
            href: "https://weatherxm.com/whitepaper",
            label: "Whitepaper",
            position: "right"
          },
          {
            href: "https://github.com/WeatherXM/docs",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://support.weatherxm.com",
            label: "Help Center",
            position: "right"
          },
          {
            href: "https://weatherxm.network",
            label: "WeatherXM Network Association",
            position: "right",
          },
          {
            href: "https://shop.weatherxm.com",
            label: "Shop",
            position: "right",
            id: "docs"
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} WeatherXM`,
        style: "light"
      },
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
