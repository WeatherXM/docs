const path = require("path");
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "WeatherXM Docs",
    tagline: "WeatherXM Documentation Page",
    url: "http://192.168.0.6:3000/",
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
    ],

    presets: [
        [
            "@docusaurus/preset-classic",
            {
                gtag: {
                    trackingID: "G-E38CY3JRM3",
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
        algolia: {
            apiKey: '5ed17076734af954e373277dcf66ee78',
            indexName: 'wxm_docs',
            contextualSearch: true,
            placeholder: 'Search',
            appId: 'W1YK5U58GN',
            // other search parameters
        },
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
            items: [{
                    to: "/project",
                    label: "Project",
                    position: "left",
                    activeBaseRegex: `project`,
                },
                {
                    to: "/wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",
                    label: "WeatherXM Devices",
                    position: "left",
                    activeBaseRegex: `devices`,
                },
                {
                    to: "/glossary",
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
