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
      collapsed: false,
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
      collapsed: false,
      items: [
        'payment-methods/index',
        // 'payment-methods/list-available-payment-methods',
        'payment-methods/tokenize-card',
        'payment-methods/tokenize-paypal',
        'payment-methods/list-for-buyer',
      ]
    }
  ]
};
