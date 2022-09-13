---
sidebar_position: 3
---

# Bundling transactions

Enables users and developers to create and bundle multiple cross-chain transactions, and initiate them in 1 click.

## **Why you need bundling?**

In the multi-chain world filled with alt L1s and L2s, performing any action across the chains is really painful and requires performing multiple actions with patience.

In DeFi, investing in any protocol usually combines multiple steps which involve swapping, bridging, or staking. Each step needs to be performed separately, and the transaction needs to be signed manually every time.

While purchasing NFT, a lot of times users don’t have funds on the specific chain that they want to purchase the NFT on. Transferring the same is a time taking process, and can often lead to frustration.

## **How it works?**

Dapp’s Smart Contracts and their functions are modularised, and they can be inserted in any order to perform certain tasks.

We shall be providing both an SDK for developers to integrate in their development process and a UI for others to bundle their transactions.

### For Example:

_A user wants to invest in the pool of Matic and MaticX on Beefy, but only has USDT on Ethereum Main-net._

Now, the user will have to select the following on our platform:

1. Select the “Bridge” module, and choose token as USDT and source chain as Ethereum and destination chain as Polygon. The bridging will be done using [Router CrossTalk SDK](https://www.npmjs.com/package/@routerprotocol/router-crosstalk).
2. Select the “Swap” Module and QuickSwap as the platform. Select the swap from USDT to MATIC.
3. Then select the “Stake” Module and Strader as platform. Select the token 1/2 of the MATIC that needs to be staked, for which one will receive MATICX.
4. Select “Invest” Module and Beefy as a platform, post which you will get an option to select 50% MATIC and 50% MATICX
5. Once the transactions have been created in the correct order, then one needs to click on “SEND”, and approve the transactions just goes through their MetaMask

Users will have to sign the transaction just once and all of these transactions would be bundled and executed on the chain.

### **What makes this awesome?**

- Composable: Our product will allow any developer to build it for their dapps and integrate it within their platform.
- Flexible - Users \*\*\*\*can plug and play different transactions across dapps and chains and create their own flows
- Cross Chain support - We are providing EVM chains support in the beginning, and plan to add more chains as we progress.
- Metamask (EOA) signature required just once- You can club all the transactions and the user just needs to sign them once.
- No updates to Smart Contract. Since we create a separate smart contract wallet, which routes all the transactions, no updates are required.
