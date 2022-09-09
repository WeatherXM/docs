module.exports = {
  docs: [
    "home",
    {
      type: "category",
      label: "Project",
      items: [
				"project/project",
				"project/tokenomics",
				"project/reward-algorithm",
			],
      collapsed: true,
    },
    {
      type: "category",
      label: "WeatherXM Devices",
      items: [
				"wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",
				"wxm-devices/wifi-m5-bundle/m5-contents",
				"wxm-devices/wifi-m5-bundle/m5-assemble",
				"wxm-devices/wifi-m5-bundle/m5-install-weather-station",
				"wxm-devices/wifi-m5-bundle/m5-connect-and-claim",
				"wxm-devices/wifi-m5-bundle/m5-adding-wallets",
				"wxm-devices/wifi-m5-bundle/m5-troubleshooting",
				"wxm-devices/wifi-m5-bundle/m5-specs"
      ],
      collapsed: false,
    },
    "glossary/glossary",
  ]
};
