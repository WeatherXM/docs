module.exports = {
  docs: [
    "home",
    {
      type: "category",
      label: "Project",
      items: [
				"project/project",
				"project/tokenomics",
				"project/reward-mechanism",
				"project/quality-of-data",
				"project/proof-of-location",
				"project/cell-capacity",
				"project/hardware-class"
			],
      collapsed: true,
    },
    {
      type: "category",
      label: "WeatherXM Devices",
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
	    }
      ],
      collapsed: true,  
    },
	{
		type: "category",
		label: "Wallet",
		items: [
			"wallet/add-edit-wallet-address",
			"wallet/how-to-join-on-testnet-and-see-your-tokens"
		],
		collapsed: true,
	  },
	{
		type: "category",
		label: "Account",
		items: [
			"account/delete-account",
		],
		collapsed: true,
	  },
	"deployment-examples",
    "glossary/glossary",
	"faqs/faqs"
  ]
};
