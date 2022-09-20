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
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    'docusaurus-plugin-hotjar'
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: 'G-E38CY3JRM3'
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/WeatherXM/docs/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    hotjar: {
      applicationId: 2542811,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "WeatherXM",
        src: "img/wxm-logo-wide-notagline.svg",
        srcDark: "img/wxm-logo-wide-notagline-white.svg",
      },
      items: [
        {
          to: "/project",
          label: "Project",
          position: "left",
          activeBaseRegex: `project`,
        },
        {
          to: "/wxm-devices/wifi-m5-bundle/m5-contents",
          label: "WeatherXM Devices",
          position: "left",
          activeBaseRegex: `devices`,
        },
        {
          to: "/glossary/glossary",
          label: "Glossary",
          position: "left",
          activeBaseRegex: `glossary`,
        },
        {
          href: "https://explorer.weatherxm.com/",
          label: "Explorer",
          position: "right",
        },
        {
          href: "https://github.com/WeatherXM/docs",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://shop.weatherxm.com",
          label: "Shop",
          position: "right",
          id: "docs",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} WeatherXM. Built with Docusaurus.`,
    },
  },
};

module.exports = config;
