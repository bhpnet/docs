---
title: 使用Truffle部署合约
---

# 使用 Truffle 部署合约

## 设置开发环境

前提条件

- Windows, Linux or Mac OS X
- [Node.js v8.9.4 长期支持版或者更新](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

**Windows 用户需了解**
如果您在 Windows 上运行 Truffle，您可能会遇到一些可能阻止 Truffle 正常执行的命名冲突。可阅读[解决命名冲突](https://learnblockchain.cn/docs/truffle/reference/configuration.html#resolving-naming-conflicts-on-windows) 寻求解决方案。

## 安装

安装 Truffle

```
npm install -g truffle
```

校验是否安装成功

```
truffle version
```

## 新建一个项目

- 创建一个新目录，项目名以`demo`为例

```
makdir demo
cd demo
```

- 初始化您的项目

```
truffle init
```

在操作完成之后，就有这样的一个项目目录结构：

- contracts/: Solidity 合约目录
- migrations/: 部署脚本文件目录
- test/: 测试脚本目录，参考 [如何测试合约于应用？](https://learnblockchain.cn/docs/truffle/testing/testing-your-contracts.html)
- truffle-config.js: Truffle [配置文件](https://learnblockchain.cn/docs/truffle/reference/configuration.html)

### 创建合约

### 编译合约

要编译 Truffle 项目里的合约，请切换到项目工程所在根目录，然后在终端中键入以下内容：

```
truffle compile
```

### 配置 Truffle

- 打开 `truffle-config.js` 文件
- 设置网络信息和其他配置

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
      network_id: 6779,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bhp: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://http-testnet.bhpnet.io`),
      network_id: 3476,
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

注意，此处需要在项目根目录创建含有 12 个助记词的`.secret`文件。您可以从 Metamask 钱包中获得助记词，步骤为：先进入 Metamask 设置，然后从菜单中选择“安全性和隐私”，您将在其中看到显示助记词的按钮。

## 部署在 BHP 网络上

在项目的根目录中运行以下命令：

```commandline
truffle migrate --network testnet
```

合同将部署在 BHP Testnet 上，如下所示：

```shell
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
> Network id:      3476
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

> 请记住，您的地址，transaction_hash 和提供的其他详细信息会有所不同。以上只是为了提供结构思路。

**恭喜你!** 您已成功部署 BRC20 智能合约。现在，您可以与智能合约进行交互。

您可以在此处查看部署状态：: <https://scan.bhpnet.io/> or <https://testnet.bhpnet.io/>
