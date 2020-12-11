module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Gr4vy',
      collapsed: false,
      items: ['index'],
    },
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
        'buyers/associate-paypal'
      ]
    },
    {
      type: 'category',
      label: 'Payment methods',
      collapsed: true,
      items: [
        'payment-methods/index',
        // 'payment-methods/list-available-payment-methods',
        'payment-methods/tokenize-card',
        'payment-methods/tokenize-paypal',
        'buyers/associate-card',
        'buyers/associate-paypal',
        'payment-methods/list-for-buyer',
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
        'buyers/associate-transaction',
        'transactions/tokenize-a-payment-method',
        'transactions/authorize-and-capture',
        'transactions/refund-a-transaction',
        'transactions/list-transactions',
      ]
    }
  ]
};
