---
title: Remix
---

# Remix 使用

本教程旨在使用 Remix IDE 提供的在线 IDE 进行操作教程。

## 设置 Remix IDE

![img](/images/remix-1.png)

- Remix 是一个开发智能合约的在线 IDE。
- 您需要选择 Solidity Compiler 和 Deploy and Run Transactions。
- 进入 `File Explorers`，创建一个新文件，命名为 MegaCoin.sol。
- 将以下智能合约复制/粘贴到新创建的`MegaCoin.sol`文件中。

## 编写智能合约

- 创建一个新的 BRC20Token.sol 合约，并将[BRC20 令牌模板](/BRC20Token.template)中的合约代码复制到这里。

- 根据自己的要求修改 `name`、`symbol`、`decimals`和 `totalSupply`。如下图所示

![img](/images/remix-2.png)

## 编译智能合约

第一步：点击如图所示按钮切换到编译页面

第二步：选择“ BRC20Token”合约

第三步：启用“自动编译”和“优化”

第四步：点击`ABI`以复制合同 abi 并保存。

![img](/images/remix-3.png)

现在我们就可以在 BHP 网络部署我们的智能合约了。此教程我们将使用 Metamask 操作。

1. 打开 Metamask，然后在“网络”下拉菜单中选择“自定义 RPC”

2. 进入设置界面

![img](/images/remix-4.png)

3. 添加一个新网络

- 网络名称:BHP Testnet

- RPC 地址:https://testnet-rpc.bhpnet.io

- Chain ID:999

- Token 符号:BHP

- 浏览器地址:https://testnet.bhpnet.io

![img](/images/remix-5.png)

4. 点击“保存”按钮继续

5. 从 Metamask 复制您的地址

6. 前往[水龙头](https://faucet.bhpnet.io/)领取 BHP 测试 Token

7. 在 BHP 测试网部署智能合约

8. 打开刚才的 remix 界面，在`ENVIRONMENT`下拉菜单中选择`Injected Web3`，然后选择您的合同。

9. 点击“部署”按钮。

10. 在 metamask 连接 remix 中，将会弹出一个交易请求确认窗口，点击确认即可。

![img](/images/remix-6.png)

至此，你的 BRC20 合约就部署好了，你可以在浏览器中查找此交易信息。[https://testnet.bhpnet.io/](https://testnet.bhpnet.io/)
