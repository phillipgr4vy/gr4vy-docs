---
title: Payment methods
sidebar_label: Introduction
slug: /payment-methods
---

In Gr4vy, a payment method represents a way in which a payment can be processed,
for example a card payment, a PayPal payment, or a Bitcoin payment.

## Features

The payment method API can be used to:

* Determine the available payment methods in a cluster
* Determine the available payment method for a buyer in a specific currency and country
* Register (also known as tokenize) a payment method for a buyer
* Fetch all previously tokenized payment methods for a buyer

:::tip Use Gr4vy Embed

There is no need to use these APIs directly if you are using [Gr4vy Embed]
instead. [Gr4vy Embed] automatically registers eligible payment methods against
these APIs and binds them to a `buyer_id` of your configuration.

:::

[Gr4vy Embed]: https://www.npmjs.com/package/@gr4vy/embed