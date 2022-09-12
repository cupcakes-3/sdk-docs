---
sidebar_position: 3
---

# Bundle Transactions

Bundling transactions opens up a plathora of possibilities. We have listed a few of them as example:

1. Users won't have to do two transactions for approving an ERC20 token & then depositing it.
2. You can easily support depositing of any ERC20 in your app. Just add a transaction to swap user's token to your preffered token using any Dex.
3. Modular Contract designs, deploy only specific contract modules and then join them off-chain using a bundler transactions.

## Single chain bundling

You must have initialised SDK & created a SCW. We have exposed a function in a SCW called `sendTransactions` using which you can send multiple transactions.

```typescript title="Sending eth to two different addresses"
await scw.sendTransactions([
  {
    to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    value: ethers.utils.parseEther('0.1'),
    data: '0x',
  },
  {
    to: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    value: ethers.utils.parseEther('0.1'),
    data: '0x',
  },
]);
```

```typescript title="Getting approval for ERC20 token & depositing together"
await scw.sendTransactions([
  {
    to: ERC20_TOKEN_ADDR,
    value: ethers.utils.parseEther('0.1'),
    data: TOKEN.interface.encodeFunctionData('approve', [
      spenderAddress,
      ethers.utils.parseEther(amount * 10), // getting approval from 10 times the amount to be spent
    ]),
  },
  {
    to: myContract.address,
    value: ethers.utils.parseEther('0.1'),
    data: myContract.interface.encodeFunctionData('stake', [
      ERC20_TOKEN_ADDR,
      ethers.utils.parseEther(amount),
    ]),
  },
]);
```

## Cross chain bundling

:::info

**Cross-chain Bundling** will be coming soon, which will enable you to add bridging transactions to your transactions as well.

:::
