---
title: On-chain interaction
---

# On-chain interaction

`go-bhp` is compatible with Ethereum's ecosystem，support all Ethereum's RPC API and SDK。

## SDK

Use `Ethereum` SDK library such as `web3j`,`web3js`, etc for development.

### Get chain info

```shell
const Web3 = require('web3')

async function getChainId() {
    const web3 = new Web3('https://http-testnet.bhpnet.io')
    let chainId = await web3.eth.getChainId()
    console.log(`chain id: ${chainId}`)
    return chainId
}
```

### Generate account

```shell
const Web3Accounts = require('web3-eth-accounts')

let account = new Web3Accounts().create()
//do not do this on prd env
console.log(`account generated. address: ${account.address}, private key: ${account.privateKey}`)
```

### Build transaction

```shell
const Web3 = require('web3')

async function transfer(fromAccount, to, value){
    const web3 = new Web3('https://http-testnet.bhpnet.io')
    let chainId = await web3.eth.getChainId()
    let nonce = await web3.eth.getTransactionCount(fromAccount.address)
    let gasPrice = await web3.eth.getGasPrice()

    let unsigned = {
        from: fromAccount.address,
        to,
        value: web3.utils.numberToHex(web3.utils.toWei(value, 'ether')),
        gasPrice,
        nonce,
        chainId,
    }

    unsigned.gas = await web3.eth.estimateGas(unsigned)

    let signed = await fromAccount.signTransaction(unsigned)
    return signed
}
```
