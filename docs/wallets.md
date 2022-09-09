---
sidebar_position: 2
---

# Wallets

Smart Contract Wallets (SCW) allows DAPP developer to bundle multiple transaction & pay gas fees for their users. You must create a SCW using our SDK for every user. The final bundled call will initiate from user's SCW. If you want to transfer the final assets to the user's current EOA, then you MUST send the transaction to transfer the assets from SCW to EOA separately.

To know how to create a SCW for a user see [Dapp specific wallets](/docs/wallets/overview#dapp-specific-wallets).

<!-- Now there are two ways to solve for this problem, first that you use our [User Specific Wallet](/docs/wallets/overview#user-specific-wallet), second that you create a [Dapp Specific Wallet](/docs/wallets/overview#dapp-specific-wallets) for every one of your users. -->

---

## Dapp specific wallets

Install our SDK using instructions [here](/docs/intro#installing-sdk).

### Initiate a wallet

Create a Smart Contract Wallet for a user. You MUST pass a signer while creating the SCW. The signer will have the custody of the SCW.

```typescript
import { Signer } from 'ethers';
import { SCW } from '@...';

/**
 * You can get signer using either the private key
 * const signer: Signer = new ether.Wallet(privateKey);
 * You can get signer if user has an EOA using wagmi.sh
 * const { data: signer } = useSigner();
 */

/* Once you have signer & provider, create user's SCW */

const scw: Signer = new SCW(signer) as Signer;
```

Once the SCW has been initiated, you can use it as a normal signer with ethers/web3/etc to connect & send bundled transactions.

:::danger

The transactions sent using ethers/web3/etc won't be by default bundled or sponsored. Use `sendTransactions` instead, see [Bundling Transactions](/docs/category/bundle-transactions/).

:::

:::info

**Wallet is not deployed instantly**, it will only be deployed once you do the first transaction, resulting in a higher gas fees in the first transaction.
Though the scw address is **deterministic** and funds can be sent to the address.

:::

<!-- ---

## User Specific Wallet

:::caution

**🚧 Upcoming**

This section is under development, DAPP developers are adviced to use DAPP Specific Wallet.

::: -->

<!-- Every user that interacts with your app will have a Cupcakes Wallet. They may create it by coming to our app, or vising a dapp that creates a user's cupcakes wallet. In this wallet, the user holds the custody -->
