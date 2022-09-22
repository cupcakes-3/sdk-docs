---
sidebar_position: 2
---

# Wallets

Smart Contract Wallets (SCW) allows DAPP developer to bundle multiple transaction & pay gas fees for their users. You must create a SCW using our SDK for every user. The final bundled call will initiate from user's SCW. If you want to transfer the final assets to the user's current EOA, then you MUST send the transaction to transfer the assets from SCW to EOA separately.

To know how to create a SCW for a user see [Dapp specific wallets](./wallets.md#dapp-specific-wallets).

<!-- Now there are two ways to solve for this problem, first that you use our [User Specific Wallet](/docs/wallets/overview#user-specific-wallet), second that you create a [Dapp Specific Wallet](/docs/wallets/overview#dapp-specific-wallets) for every one of your users. -->

---

## Dapp specific wallets

Install our SDK using instructions [here](/docs/intro#installing-sdk).

### Initiate a wallet

Create a Smart Contract Wallet for a user. You MUST pass a signer while creating the SCW. The signer will have the custody of the SCW.

:::caution

Works only on **Goerli Testnet!**, We will be releasing our next version supporting multiple chains soon.
:::

```typescript
import { Signer } from 'ethers';
import { SCWProvider } from '@cupcakes-sdk/scw';

/**
 * You can get signer using either the private key
 * const signer: Signer = new ether.Wallet(privateKey);
 * You can get signer if user has an EOA using wagmi.sh
 * const { data: signer } = useSigner();
 */

/* Once you have signer & provider, create user's SCW */

/**
 * @param provder - any BaseProvider from ethers (JSONRpcProvider | window.ethereum | etc)
 * @param signer - this will be the owner of the SCW that will be deployed.
 */
const scwProvider: SCWProvider = await SCWProvider.getSCWForOwner(
  provider,
  signer
);
```

Once the SCW has been initiated, you can use it as a normal signer with ethers/web3/etc to connect & send bundled transactions.

### Executing transactions

You can get `Signer` from the `SCWProvider` we created above & start using it normally as you would use an EOA.

```typescript
const scwSigner = scwProvider.getSigner();
const greeter = new ethers.Contract(
  GREETER_ADDR,
  GreeterArtifact.abi,
  scwSigner
);

const tx = await greeter.addGreet({
  value: ethers.utils.parseEther('0.0001'),
});
console.log(tx);
```

### Bundling transactions

You can also send multiple transactions within a single transaction using SCW. Think of approvide `ERC20` tokens & `deposit` them in a single transaction with a single signature from the users.

Read more about how [here](./bundle-transactions.md).

:::danger

The transactions sent using ethers/web3/etc won't be by default bundled or sponsored. Use `sendTransactions` instead to bundle transactions, see [Bundle Transactions](./bundle-transactions.md). If you want to sponser, make sure you connect a `paymaster`, see [Gassless Experience](./gassless-experience.md)

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
