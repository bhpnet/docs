---
title: Remix
---

# Using Remix

Remix IDE is an open source web and desktop application. It fosters a fast development cycle and has a rich set of plugins with intuitive GUIs. Remix is used for the entire journey of contract development as well as being a playground for learning and teaching contract development.

## Writing contract

First, open the [Remix website](https://remix.ethereum.org/)

![img](/images/remix-1.png)

In `File Explorers`, create a new file like `ExampleToken.sol`.

![img](/images/remix-2.png)

Copy/paste the following smart contract into the newly created `ExampleToken.sol` file.

```shell
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("ExampleToken", "ET") {
        _mint(msg.sender, initialSupply);
    }
}
```

## Compile contract

1. Click compiler button, switch UI
2. Select contract you want to compile
3. Set compile flags
4. Clieck compile button

![img](/images/remix-3.png)

Now, We have to deploy our smart contract on BHP Network. For that, we have to connect to web3 world, this can be done my many services like Metamask, Brave, Portis etc. We will be using Metamask. Please follow this tutorial to setup a Metamask Account.

## Deploy contract

1. Open Metamask and select Custom RPC from the networks dropdown

2. Go to setting page

![img](/images/remix-4.png)

3. Set network info in Metamask.

![img](/images/remix-5.png)

4. Click save and go ahead

5. Copy your address from Metamask

6. Head over to [Faucet](https://faucet.bhpnet.io/) and request test BHP

7. Back to `Remix`

- Select `Injected Web3` in the Environment dropdown

- Select contract

- Click deploy button.

![img](/images/remix-6.png)

Congratulations! You have successfully deployed a BRC20 Contract. Now you can interact with the Smart Contract. Check the deployment status here: [https://testnet.bhpnet.io/](https://testnet.bhpnet.io/)
