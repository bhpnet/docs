---
title: Truffle
---

# Using Truffle

## Setting up the development environment

There are a few technical requirements before we start. Please install the following:
Requirements:

- Windows, Linux or Mac OS X
- [Node.js v8.9.4 LTS or later](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

**Recommendations for Windows**

If you're running Truffle on Windows, you may encounter some naming conflicts that could prevent Truffle from executing properly. Please see the section on resolving naming conflicts for solutions.

## Installing

Once we have those installed, we only need one command to install Truffle:

```
npm install -g truffle
```

To verify that Truffle is installed properly, type **`truffle version`** on a terminal. If you see an error, make sure that your npm modules are added to your path.

## Create A Project

The first step is to create a Truffle project. We'll use the \*demo as an example, which creates a token that can be transferred between accounts:

- Create a new directory for your Truffle project

```
mkdir demo
cd demo
```

- Intialize your project:

```
truffle init
```

Once this operation is completed, you'll now have a project structure with the following items:

- contracts/: Directory for Solidity contracts
- migrations/: Directory for scriptable deployment files
- test/: Directory for test files for testing your application and contracts
- truffle-config.js: Truffle configuration file

### Create Contract

You can write your own smart contract or download the BRC20 token smart contract template.

### Compile Contract

To compile a Truffle project, change to the root of the directory where the project is located and then type the following into a terminal:

```
truffle compile
```

### Config Truffle for BHP

- Go to truffle-config.js
- Update the truffle-config with bhp-network-crendentials.

```js
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs
  .readFileSync('.secret')
  .toString()
  .trim();

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard BHP port (default: none)
      network_id: '*', // Any network (default: none)
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://http-mainnet.bhpnet.io`),
      network_id: 31415,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bhp: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://http-testnet.bhpnet.io`),
      network_id: 1024,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {},
  },
};
```

Notice, it requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new .secret file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words.

## Deploying on BHP Network

Run this command in root of the project directory:

```commandline
truffle migrate --network testnet
```

Contract will be deployed on Binance Chain Chapel Testnet, it look like this:

```shell script
truffle migrate --network testnet

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Network up to date.

D:\HtmlProject\demo>truffle migrate --network testnet

Compiling your contracts...
===========================
> Compiling .\contracts\Migrations.sol
> Artifacts written to D:\HtmlProject\demo\build\contracts
> Compiled successfully using:
   - solc: 0.5.16+commit.9c3226ce.Emscripten.clang



Starting migrations...
======================
> Network name:    'testnet'
> Network id:      999
> Block gas limit: 8000000 (0x7a1200)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xb1aa0b9917240a53ea024a94fa8ec02b784868f3237f3a351cd17901f25108c2
   > Blocks: 0            Seconds: 8
   > contract address:    0xFcb70A876C2C22fe0C65d15313fea76135A03AEf
   > block number:        110427
   > block timestamp:     1607565160
   > account:             0x01f933904539Fe8662c48392ee31C0aFCf98758E
   > balance:             99.991475519998435463
   > gas used:            191943 (0x2edc7)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00383886 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 1 (block: 110428)
   > confirmation number: 2 (block: 110429)
   > confirmation number: 3 (block: 110430)
   > confirmation number: 4 (block: 110431)
   > confirmation number: 5 (block: 110432)
   > confirmation number: 6 (block: 110433)
   > confirmation number: 7 (block: 110434)
   > confirmation number: 8 (block: 110435)
   > confirmation number: 9 (block: 110436)
   > confirmation number: 10 (block: 110437)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00383886 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.00383886 ETH
```

> Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.

**Congratulations!** You have successfully deployed BRC20 Smart Contract. Now you can interact with the Smart Contract.

You can check the deployment status here: <https://scan.bhpnet.io/> or <https://testnet.bhpnet.io/>
