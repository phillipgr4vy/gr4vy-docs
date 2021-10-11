---
title: Magento Installation
sidebar_label: Installation
slug: /plugins/magento/installation
---

:::info Before you start

It’s recommended that you first install the Gr4vy module in a development Magento environment that is an exact copy of your live store. After you have verified everything is working properly on your development environment, you can safely install the module in your live environment.

:::

## Backup before installation

Backup your Magento store database and files before installing the module. 

You can do this via SSH or via the account dashboard of your hosting provider.

## Installation options

### Installing the module manually

* Download the "Downloadable Package" Gr4vy module from your customer account, unzip it
* Use an SSH client to connect to your server and navigate to path `<web_root>/app/code` *(note: the user should write permissions to this folder and its subfolders)*
* Upload all the files and folders from the module zip file into the Magento root directory
* Via SSH, navigate to the root Magento folder and run the following command:

```
php bin/magento module:enable Gr4vy_Payment
```

### Installing the module via Composer

The module can be installed by running the command below in the Magento root directory:

```
composer require gr4vy/payment-module
```

## Setup and Deployment

Execute the below commands in the Magento root directory to complete setup and full deployment:

```
php bin/magento setup:upgrade

php bin/magento setup:di:compile

php bin/magento cache:flush

php bin/magento setup:static-content:deploy
```
