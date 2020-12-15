---
title: Verify Contract on BHP Explorer
---

# How to Verify Your Contract on BHP Explorer

## Deploy contract

Deploy your contract on BHP

## Go to Explorer

Go to [BHP Explorer](https://scan.bhpnet.io) or [Testnet Explorer](https://testnet.bhpnet.io)

## Click

Click on "Verify and Publish"

![Click on "Verify and Publish"](/images/verify-1.png)

## Fill information of your contract

Fill in the correct information of your contract

![information of your contract](/images/verify-2.png)

- Contract Address:The 0x address supplied on contract creation.

- Contract Name:Must match the name specified in the code. For example, in `contract MyContract {..}` MyContract is the contract name.

- Include nightly builds:Select yes if you want to show nightly builds.

- Compiler:The compiler version is specified in `pragma solidity X.X.X.` Use the compiler version rather than the nightly build. If using the Solidity compiler, run `solc —version` to check.

- EVM Version:The EVM version the contract is written for. If the bytecode does not match the version, we try to verify using the latest EVM version.

- Optimization:If you enabled optimization during compilation, select yes.

- Optimization runs

- Enter the Solidity Contract Code:We recommend using flattened code. This is necessary if your code utilizes a library or inherits dependencies.

- Try to fetch contructor arguments automatically

- ABI-encoded Constructor Arguments (if required by the contract):Add arguments in ABI hex encoded form. Constructor arguments are written right to left, and will be found at the end of the input created bytecode.

Click on "Verify and Publish" to finish this process. Now you are all set!
