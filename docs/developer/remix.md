---
title: Remix
---

# Using Remix

Deploys a BRC20 smart contract with a message, and renders it in the front-end. You can interact with the smart contract easily!

This dapp implements a "Hello World" style application that echoes a message passed to the contract to the front end. This tutorial is intended to be followed using the online IDE available at [Remix IDE](https://remix.ethereum.org/).

## Setting up Remix IDE

![img](/images/remix-1.png)

- Remix is an online IDE to develop smart contracts.
- You need to choose Solidity Compiler and Deploy and Run Transactions.
- Go to `File Explorers`, And Create a new file, Name it MegaCoin.sol
- Copy/Paste the Smart contract below into the newly created file `MegaCoin.sol`

## The Smart Contract

- Create new contract BRC20Token.sol and copy contract code from the [BRC20 token template](<(/BRC20Token.template)>) here

- Modify “name”, “symbol”, “decimals” and “totalSupply” according to your requirements.

![img](/images/remix-2.png)

## 编译智能合约

- Step1: Click button to switch to compile page

- Step2: Select `BRC20Token` contract

- Step3: Enable `Auto compile` and `optimization`

- Step4: Click `ABI` to copy the contract abi and save it.

![img](/images/remix-3.png)

Now, We have to deploy our smart contract on BHP Network. For that, we have to connect to web3 world, this can be done my many services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this tutorial to setup a Metamask Account.

1. Open Metamask and select Custom RPC from the networks dropdown

2. Go to setting page

![img](/images/remix-4.png)

3. Add a new network

- Network Name:BHP Testnet

- New RPC URL:https://testnet-rpc.bhpnet.io

- Chain ID:999

- Currency Symbol (optional):BHP

- Block Explorer URL (optional):https://testnet.bhpnet.io

![img](/images/remix-5.png)

4. Click save and go ahead

5. Copy your address from Metamask

6. Head over to [Faucet](https://faucet.bhpnet.io/) and request test BNB

7. Now, let's Deploy the Smart Contract on BHP Testnet

8. Select `Injected Web3` in the Environment dropdown and your contract on remix.

9. Click deploy button.

10. Once Metamask is connected to Remix, the ‘Deploy’ transaction would generate another metamask popup that requires transaction confirmation.

![img](/images/remix-6.png)

Congratulations! You have successfully deployed a BRC20 Contract. Now you can interact with the Smart Contract. Check the deployment status here: [https://testnet.bhpnet.io/](https://testnet.bhpnet.io/)
