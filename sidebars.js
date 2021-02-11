module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: [
        'index',
        'get-started/index',
        'embed/index'
      ],
    },
    {
      type: 'category',
      label: 'Documentation',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Buyers',
          collapsed: true,
          items: [
            'buyers/index',
            'buyers/add',
            'buyers/find',
            'buyers/update',
            'buyers/associate-transaction',
            'buyers/associate-card',
            // 'buyers/associate-paypal'
          ]
        },
        {
          type: 'category',
          label: 'Payment methods',
          collapsed: true,
          items: [
            'payment-methods/index',
            'payment-methods/vault-card',
            // 'payment-methods/vault-paypal',
            'payment-methods/list-for-buyer',
            'payment-methods/list',
            'payment-methods/remove',
            'payment-methods/statuses',
          ]
        },
        {
          type: 'category',
          label: 'Transactions',
          collapsed: true,
          items: [
            'transactions/index',
            'transactions/transact-card',
            'transactions/transact-paypal',
            'transactions/transact-token',
            'transactions/vault-a-payment-method',
            'transactions/authorize-and-capture',
            'transactions/refund-a-transaction',
            'transactions/list-transactions',
            'transactions/statuses',
          ]
        }
      ],
    },
  ],
  internal: [
    {
      type: 'category',
      label: 'Internal',
      collapsed: true,
      items: [
        'internal/index',
        'internal/domains',
        'internal/api-authentication',
        'payment-methods/flow-charts'
      ]
    }
  ]

};
