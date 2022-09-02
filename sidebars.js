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
            {
    					type: "category",
    					label: "WiFi M5 Setup Guide",
    					items: [
                "wxm-devices/wifi-m5-bundle/setup-guide/m5-contents",
                "wxm-devices/wifi-m5-bundle/setup-guide/m5-assemble",
    						"wxm-devices/wifi-m5-bundle/setup-guide/m5-install-weather-station",
                "wxm-devices/wifi-m5-bundle/setup-guide/m5-connect-and-claim",
                "wxm-devices/wifi-m5-bundle/setup-guide/m5-adding-wallets",
              ],
              collapsed: true,
            },
            "wxm-devices/wifi-m5-bundle/m5-troubleshooting",
            "wxm-devices/wifi-m5-bundle/m5-specs",
          ],
          collapsed: true,

        },
        {
					type: "category",
					label: "Helium Weather Station",
					items: [
            "wxm-devices/helium/helium-intro",
            {
            type: "category",
  					label: "Helium Station Setup Guide",
  					items: [
  						"wxm-devices/helium/setup-guide/helium-contents",
              "wxm-devices/helium/setup-guide/helium-assemble",
  						"wxm-devices/helium/setup-guide/helium-install-weather-station",
              "wxm-devices/helium/setup-guide/helium-connect-and-claim",
              "wxm-devices/helium/setup-guide/helium-adding-wallets",
  					],
  					collapsed: true,
          },
            "wxm-devices/helium/helium-troubleshooting",
            "wxm-devices/helium/helium-specs",
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
