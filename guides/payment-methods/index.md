---
title: Payment methods
sidebar_label: Introduction
slug: /payment-methods
---

In Gr4vy, a payment method represents the payment instrument used by your
customer. At the moment we only support card and a PayPal as payment methods but
more are coming soon.

Payment methods can be used one-off to create a transaction, or a payment method
can be stored in Gr4vy's vault for future use.

## Features

The payment method API can be used to:

* List all the vaulted (tokenized) payment methods for all buyers.
* Vault (also known as tokenize) a payment method so that it can be used in the
  future without involving the customer.
* Request previously used and vaulted payment methods for a specific buyer.
* Determine the available payment method for a buyer, currency, and country.

:::note Gr4vy Embed

There is no need to use these APIs directly if you are using our Javascript SDK.
[Gr4vy Embed](/guides/embed) automatically stores eligible payment
methods against these APIs and can even bind them to a [buyer](/guides/buyers)
you've previously created.

:::

