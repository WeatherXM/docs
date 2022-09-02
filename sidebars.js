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
        "wxm-devices/introduction",
				{
					type: "category",
					label: "WiFi M5 Weather Station",
					items: [
            "wxm-devices/wifi-m5-bundle/wifi-m5-intro",
						"wxm-devices/wifi-m5-bundle/m5-contents",
            "wxm-devices/wifi-m5-bundle/m5-assemble",
						"wxm-devices/wifi-m5-bundle/m5-install-weather-station",
            "wxm-devices/wifi-m5-bundle/m5-adding-wallets",
						"wxm-devices/wifi-m5-bundle/m5-troubleshooting",
					],
					collapsed: true,
				},
        {
					type: "category",
					label: "Helium Weather Station",
					items: [
            "wxm-devices/helium/helium-intro",
						"wxm-devices/helium/helium-contents",
            "wxm-devices/helium/helium-assemble",
						"wxm-devices/helium/helium-install-weather-station",
            "wxm-devices/helium/helium-suggested-wallets",
						"wxm-devices/helium/helium-troubleshooting",
					],
					collapsed: true,
				},
      ],
      collapsed: false,
    },
    "wallet/suggested-wallets",
    "glossary/glossary",
  ]
};
