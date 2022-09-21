---
sidebar_position: 4
---

# Gassless Experience

Cupkaes SDK will enable conditional gassless experience, which includes partial gas-sponsoring. This enables you to have complex integrations like: sponsoring of gas on ethereum upto $5 and 100% on L2/sidechain.

Before you can start sponsoring gas, you must [deploy](./gassless-experience#deploy-a-paymaster) a paymaster contract. The paymaster _MUST_ be staked & should have enough deposit to sponsor for gas. If the deposited amount becomes lesser than the gas required then your transactions will start failing.

---

## Paymaster

Paymaster is a contract that sponsors gas fees on behalf of users. To know more about how it works, read in the [architecture section](./architecture/overview).

To enable gas sponsoring these are the steps you must do:

1. [Deploy a paymaster](./gassless-experience#deploy-a-paymaster)
2. [Stake paymaster](./gassless-experience#stake--deposit-funds)
3. [Register a webhook](./gassless-experience#register-webhook)
4. [Integrate with frontend](./gassless-experience#integrate-with-frontend)

### Deploy a paymaster

Head to our website [https://comingsoon@cupcakes](https://bit.ly/gas_less) and follow the steps shown in the video below to deploy your first paymaster.

```mdx-code-block
<iframe width="720" height="406" src="https://www.youtube-nocookie.com/embed/jreqzJMzR5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

### Stake & deposit funds

Once you have created your paymaster, you will have to stake your funds. The Minimum stake as of now is `x MATIC` with a lock-in of `7 days`. The stake is to make sure no fraudulant activity can be performed by the paymaster. The staked funds will be deductded if any such fraudulant activity is found.

:::caution
You must have enough deposit left to cover for 100% of the gas fees even if you only want to sponsor a portion of it. If desposit is not enough, the transaction will be reverted.
:::

Learn more about how your stake can be slashed more in detail [here](./architecture/overview).

### Register webhook

You will have to register a webhook, where we will be sending the a `POST` request to verify the sponsoring of the gas.

The requst will have the following body:

```json
{
  "auth_code": "b110a339-ff6c-4456-8adb-b236a3da11d3",
  "timestamp": 1662805504483,
  "userOperation": {
    "sender": "0xadb2...asd4", // Sender's address of the SCW
    "maxGasCost": 123, // you can use this as the total of all the above gas breakup & use this to make decision of sponsoring
    "paymasterDeposit": 123, // the amount of deposit left in your paymaster contract, you can send refill transactions using this if you want to
    "paymasterAddress": "0x23rr...", // your paymaster contract address, you should send money to this address if paymasterDeposit is approaching zero
    "transactions": [
      // this is the array of transactions that your frontend SDK included for bundling
      {
        "to": "0x123..",
        "value": 4, // value in ethers
        "data": "0xadsf..." // call data your SDK passed
      }
    ],
    // The following fields are part of the UserOperation that will be used to generate signature, you can ignore these if you are using our paymaster SDK
    "nonce": 123,
    "initCode": "0xAxvd3r....adfsg4r", //init code, if not empty means that this wallet doesn't exist and will be deployed in this transaction along with executing the required transaction
    "callData": "0xsdfdasf...000", // call data of the execution
    "callGas": 123, // the amount of gas the main execution of transaction will take
    "verificationGas": 123, //the constant amount of gas which is required to verify sender's ownership
    "preVerificationGas": 123, // the constant amount of gas which is required by the bundler for processing the transaction
    "maxFeePerGas": 123, // the maximum gas price, this depends on how busy the network is
    "maxPriorityFeePerGas": 123 // the fee that will be used to tip the miner
  }
}
```

You must verify `auth_code` to check if the call is from our service or not. You will see the `auth_code` once you register a success webhook.

You must return with a `200` code if you agree to sponsor the transaction. If you choose not to sponsor, you must return with a `403 - Forbidden` status code response.

### Integrate with frontend

You will have to connect your paymaster with the SCW you created in [Wallets section](./wallets#initiate-a-wallet).

```typescript
import { PaymasterAPI } from '@cupcakes-sdk/scw';

// You can get the your API KEY when you create a paymaster, every paymaster has a different API KEY

/* Connect to us to get Paymaster URL & Paymaster API KEY */
const paymasterAPI = new PaymasterAPI(
  process.env.REACT_APP_PAYMASTER_URL,
  process.env.REACT_APP_PAYMASTER_API_KEY
);

/* Connect your paymaster to the provider */
scwProvider.connectPaymaster(paymasterAPI);

/* Do transaction as normal */
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

/* Disconnect if you don't want to sponsor amny further */
scwProvider.disconnectPaymaster();
```
