module.exports = {
  docs: [
    "home",
    "introduction",
    {
      type: "category",
      label: "Deploy a WeatherXM Device",
      items: [
        {
          type: "category",
          label: "M5 (WB1000)",
          items: [
            "wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",
            "wxm-devices/wifi-m5-bundle/m5-contents",
            "wxm-devices/wifi-m5-bundle/m5-assemble",
            "wxm-devices/wifi-m5-bundle/m5-install-weather-station",
            "wxm-devices/wifi-m5-bundle/m5-connect-and-claim",
            "wxm-devices/wifi-m5-bundle/m5-maintenance",
            "wxm-devices/wifi-m5-bundle/m5-troubleshooting"
          ],
          collapsed: true
        },
        {
          type: "category",
          label: "Helium (WS2000)" ,
          items: [
            "wxm-devices/helium/introduction",
            "wxm-devices/helium/contents",
            "wxm-devices/helium/assemble",
            "wxm-devices/helium/connect-and-claim",
            "wxm-devices/helium/update-firmware",
            "wxm-devices/helium/install-weather-station",
            "wxm-devices/helium/maintenance",
            "wxm-devices/helium/troubleshooting"
          ],
          collapsed: true
        },
        {
          type: "category",
          label: "D1 (WB1200)",
          items: [
            "wxm-devices/d1/introduction",
            "wxm-devices/d1/contents",
            "wxm-devices/d1/assemble",
            "wxm-devices/d1/install-weather-station",
            "wxm-devices/d1/connect-and-claim",
            "wxm-devices/d1/maintenance",
            "wxm-devices/d1/troubleshooting"
          ],
          collapsed: true
          },
          {
            type: "category",
            label: "Pulse (WB3000)",
            items: [
              "wxm-devices/pulse/introduction",
              "wxm-devices/pulse/contents",
              "wxm-devices/pulse/assemble",
              "wxm-devices/pulse/install-weather-station",
              "wxm-devices/pulse/connect-and-claim",
              "wxm-devices/pulse/maintenance",
              "wxm-devices/pulse/troubleshooting"
            ],
            collapsed: true
          },
          "wxm-devices/deployment-examples",
        ],
        collapsed: true,
    },
    {
      type: "category",
      label: "Rewards",
      items: [
        "rewards/reward-mechanism",
        "rewards/quality-of-data",
        "rewards/proof-of-location",
        "rewards/cell-capacity",
        "rewards/hardware-class",
        "rewards/reward-boosts",
        "rewards/rewards-troubleshooting",
        "rewards/rewards-claiming",
        "rewards/how-to-join-arbitrum-and-see-your-tokens"
      ],
      collapsed: true,
    },
	  {
      type: "category",
      label: "Mobile App",
      items: [
        {
          type: "category",
          label: "Wallet",
          items: [
            "mobile-app/wallet/add-edit-wallet-address"
          ],
          collapsed: true,
        },
        "mobile-app/delete-account",
        "mobile-app/change-password"
      ],
      collapsed: true,
	  },
    "tokenomics",
    "glossary",
    "faq"
  ]
};
