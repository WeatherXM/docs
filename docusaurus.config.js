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
        redirects: [
          {
            to: "/rewards/how-to-join-arbitrum-and-see-your-tokens",
            from: "/wallet/how-to-join-arbitrum-and-see-your-tokens"
          },
          {
            to: "/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction#features-and-specifications",
            from: "/m5-specs"
          },
          {
            to: "/wxm-devices/helium-bundle/wxm-ws2000-introduction#features-and-specifications",
            from: "/helium-specs"
          },
          {
            to: "/wxm-devices/D1-bundle/D1-bundle-introduction#features-and-specifications",
            from: "/wxm-devices/D1-bundle/D1-specs"
          },
          {
            to: "/mobile-app/wallet/add-edit-wallet-address",
            from: "/wallet/add-edit-wallet-address"
          },
          {
            to: "/mobile-app/change-password",
            from: "/account/change-password"
          },
          {
            to: "/mobile-app/delete-account",
            from: "/account/delete-account"
          },
          {
            to: "/rewards/cell-capacity",
            from: "/project/cell-capacity"
          },
          {
            to: "/rewards/hardware-class",
            from: "/project/hardware-class"
          },
          {
            to: "/rewards/proof-of-location",
            from: "/project/proof-of-location"
          },
          {
            to: "/rewards/quality-of-data",
            from: "/project/quality-of-data"
          },
          {
            to: "/rewards/reward-boosts",
            from: "/project/reward-boosts"
          },
          {
            to: "/rewards/reward-mechanism",
            from: "/reward-mechanism"
          },
          {
            to: "/rewards/rewards-claiming",
            from: "/project/rewards-claiming"
          },
          {
            to: "/rewards/rewards-troubleshooting",
            from: "/project/rewards-troubleshooting"
          },
          {
            to: "/faq",
            from: "/faqs"
          }
        ]
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
