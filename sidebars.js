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
	      collapsed: true,
	    },
	    {
	      type: "category",
	      label: "Helium (WS2000)" ,
	      items: [
					"wxm-devices/helium-bundle/wxm-ws2000-introduction",
					"wxm-devices/helium-bundle/helium-contents",
					"wxm-devices/helium-bundle/helium-assemble",
					"wxm-devices/helium-bundle/helium-connect-and-claim",
					"wxm-devices/helium-bundle/helium-update-firmware",
					"wxm-devices/helium-bundle/helium-install-weather-station",
					"wxm-devices/helium-bundle/helium-maintenance",
					"wxm-devices/helium-bundle/helium-troubleshooting"
	      ],
	      collapsed: true,
		  
	    },
		{
			type: "category",
			label: "D1 (WB1200)",
			items: [
					  "wxm-devices/D1-bundle/D1-bundle-introduction",
					  "wxm-devices/D1-bundle/D1-contents",
					  "wxm-devices/D1-bundle/D1-assemble",
					  "wxm-devices/D1-bundle/install-weather-station",
					  "wxm-devices/D1-bundle/D1-connect-and-claim",
					  "wxm-devices/D1-bundle/maintenance",
					  "wxm-devices/D1-bundle/D1-troubleshooting"
			],
			collapsed: true,
		  },
		  {
			type: "category",
			label: "Pulse (WB3000)",
			items: [
					  "wxm-devices/pulse-bundle/introduction",
					  "wxm-devices/pulse-bundle/contents",
					  "wxm-devices/pulse-bundle/assemble-weather-station",
					  "wxm-devices/pulse-bundle/install-weather-station",
					  "wxm-devices/pulse-bundle/connect-and-claim",
					  "wxm-devices/pulse-bundle/maintenance",
					  "wxm-devices/pulse-bundle/troubleshooting"
			],
			collapsed: true,
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
					"wallet/add-edit-wallet-address"
				],
				collapsed: true,
			},
            "account/delete-account",
            "account/change-password"
		],
		collapsed: true,
	  },
	"tokenomics",
	"glossary/glossary",
	"help-center/faqs"
  ]
};
