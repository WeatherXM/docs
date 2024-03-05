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
	      label: "WXM-WS1000",
	      items: [
					"wxm-devices/wifi-m5-bundle/wxm-ws1000-introduction",
					"wxm-devices/wifi-m5-bundle/m5-contents",
					"wxm-devices/wifi-m5-bundle/m5-assemble",
					"wxm-devices/wifi-m5-bundle/m5-install-weather-station",
					"wxm-devices/wifi-m5-bundle/m5-connect-and-claim",
					"wxm-devices/wifi-m5-bundle/m5-troubleshooting",
					"wxm-devices/wifi-m5-bundle/m5-maintenance",
					"wxm-devices/wifi-m5-bundle/m5-specs"
	      ],
	      collapsed: true,
	    },
	    {
	      type: "category",
	      label: "WXM-WS2000",
	      items: [
					"wxm-devices/helium-bundle/wxm-ws2000-introduction",
					"wxm-devices/helium-bundle/helium-contents",
					"wxm-devices/helium-bundle/helium-assemble",
					"wxm-devices/helium-bundle/helium-connect-and-claim",
					"wxm-devices/helium-bundle/helium-update-firmware",
					"wxm-devices/helium-bundle/helium-install-weather-station",
					"wxm-devices/helium-bundle/helium-troubleshooting",
					"wxm-devices/helium-bundle/helium-maintenance",
					"wxm-devices/helium-bundle/helium-specs"
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
				  "rewards/rewards-claiming"
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
					"wallet/add-edit-wallet-address",
					"wallet/how-to-join-arbitrum-and-see-your-tokens"
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
