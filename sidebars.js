module.exports = {
  docs: [
    "home",
    {
      type: "category",
      label: "Project",
      items: [
				"project/project",
				"project/suggested-wallets",
				"project/reward-algorithm"
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
					label: "WiFi M5 Bundle with Weather Station",
					items: [
	        	"wxm-devices/wifi-m5-bundle/introduction",
						"wxm-devices/wifi-m5-bundle/contents",
						"wxm-devices/wifi-m5-bundle/setup-weather-station",
						"wxm-devices/wifi-m5-bundle/setup-m5",
						"wxm-devices/wifi-m5-bundle/troubleshooting",
					],
					collapsed: false,
				},
        "wxm-devices/glossary",
      ],
      collapsed: true,
    },
  ]
};
