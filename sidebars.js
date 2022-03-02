module.exports = {
  docs: [
    "home",
    {
      type: "category",
      label: "Project",
      items: [
				"project/project",
				"project/suggested-wallets"
			],
      collapsed: true,
    },
    {
      type: "category",
      label: "WeatherXM Devices",
      items: [
        "wxm-devices/introduction",
        "wxm-devices/wifi-m5-bundle/wifi-m5-bundle",
        "wxm-devices/wifi-m5-bundle/glossary",
      ],
      collapsed: true,
    },
  ],
  wifi_m5_bundle: [
    {
      type: "link",
      label: "<- WiFi M5 Bundle with Weather Station",
      href: "/wxm-devices/wifi-m5-bundle",
    },
    {
      type: "category",
      label: "Setup",
      items: [
        "wxm-devices/wifi-m5-bundle/setup/contents",
        "wxm-devices/wifi-m5-bundle/setup/setup-weather-station",
        "wxm-devices/wifi-m5-bundle/setup/setup-m5",
        "wxm-devices/wifi-m5-bundle/setup/troubleshooting",
      ],
      collapsed: false,
    },
  ],
};
