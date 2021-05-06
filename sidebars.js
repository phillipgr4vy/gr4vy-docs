module.exports = {
  sidebar: [
    "index",
    {
      type: "category",
      label: "Web Checkout",
      collapsed: false,
      items: [
        "web-checkout/index",
        "web-checkout/key",
        "web-checkout/sdks",
        "web-checkout/embed",
        "web-checkout/inspect"
      ],
    },
    // {
    //   type: "category",
    //   label: "Services",
    //   collapsed: false,
    //   items: [
    //     "services/stripe-card",
    //     "services/braintree-card",
    //     "services/paypal-paypal"
    //   ],
    // },
    {
      type: "category",
      label: "APIs",
      collapsed: false,
      items: [
        "authentication",
        "environments",
        // "errors",
        "pagination",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Buyers",
          collapsed: true,
          items: [
            "buyers/index",
            "buyers/add",
            "buyers/find",
            "buyers/update",
            "buyers/associate-transaction",
            "buyers/associate-card",
            // 'buyers/associate-paypal',
            "buyers/remove",
          ]
        },
        {
          type: "category",
          label: "Payment methods",
          collapsed: true,
          items: [
            "payment-methods/index",
            "payment-methods/vault-card",
            // 'payment-methods/vault-paypal',
            "payment-methods/list-for-buyer",
            "payment-methods/list",
            "payment-methods/remove",
            "payment-methods/statuses",
          ]
        },
        {
          type: "category",
          label: "Transactions",
          collapsed: true,
          items: [
            "transactions/index",
            "transactions/transact-card",
            "transactions/transact-paypal",
            "transactions/transact-vault",
            "transactions/vault-a-payment-method",
            // 'transactions/refund-a-transaction',
            "transactions/list-transactions",
            "transactions/statuses",
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Embed",
      collapsed: true,
      items: [
        "embed/theming",
      ]
    }
  ],
  internal: [
    {
      type: "category",
      label: "Internal",
      collapsed: true,
      items: [
        "internal/index",
        "internal/domains",
        "internal/api-authentication",
        "payment-methods/flow-charts"
      ]
    }
  ]

}
