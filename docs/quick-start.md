---
sidebar_position: 3
---

# Quick Start

Cupcakes allow DAPPs developers access to Smart Contract Wallets. These wallets can be DAPPs specific or User specific. You must read about [Wallets section](./how-to-use-sdk/wallets) before using the SDK.

:::caution

**This SDK is a work in progress**,
in the meantime, feel free the to read the docs and give us your feedback on [Telegram](https://t.me/cupcakesFeedback)! 💬

:::

## Getting Started

A guide for adding a Cupcakes SDK to your application & start bundling transactions. There are two parts of the documentation, [**bundling transaction**](./how-to-use-sdk/bundle-transactions) and [**sponsoring gas**](./how-to-use-sdk/gassless-experience).

For both of them you would need to install our SDK. For sponsoring gas, you will have to first create a paymaster contract. To know more about how to create a paymaster contract, read [here](./how-to-use-sdk/gassless-experience).

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Installing SDK

Our SDK is currently under development, we will be hosting it on NPM soon. The Client SDK will be available in JavaScript with full TypeScript support.

:::caution

`PackageName` is still TBD and will be added here on release.

:::

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="npm" label="npm" default>
```

```bash
npm install @...
```

```mdx-code-block
</TabItem>
<TabItem value="yarn" label="yarn" default>
```

```bash
yarn add @...
```

```mdx-code-block
</TabItem>
</Tabs>
```