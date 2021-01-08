---
title: 使用Remix部署合约
---

# 使用 Remix 部署合约

Remix 是在线的合约开发和部署工具。

## 编写合约

首先打开[Remix 网站](https://remix.ethereum.org/)

![img](/images/remix-1.png)

在左侧文件浏览器 `File Explorers`中，创建一个新文件，比如 `ExampleToken.sol`。

![img](/images/remix-2.png)

将以下智能合约复制/粘贴到新创建的`ExampleToken.sol`文件中。

```shell
pragma solidity ^0.6.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("ExampleToken", "ET") {
        _mint(msg.sender, initialSupply);
    }
}
```

## 编译合约

第一步：点击如图所示按钮切换到编译页面

第二步：选择对应合约

第三步：选择要编译的选项

第四步：点击编译按钮进行编译。

![img](/images/remix-3.png)

现在我们就可以在 BHP 网络部署我们的智能合约了。此教程我们将使用 Metamask 操作。

## 部署合约

1. 打开 Metamask，然后在“网络”下拉菜单中选择“自定义 RPC”

2. 进入设置界面

![img](/images/remix-4.png)

3. 设置网络信息，设置完成后保存。

![img](/images/remix-5.png)

4. 点击“保存”按钮继续

5. 从 Metamask 复制您的地址

6. 前往[水龙头](https://faucet.bhpnet.io/)领取 BHP 测试 Token

7. 返回刚才的 remix 界面

- 在`ENVIRONMENT`下拉菜单中选择`Injected Web3`
- 选择对应合约。
- 输入发行量：1000000000000000000（1000000000000000000=1ET），点击“部署”按钮。

![img](/images/remix-6.png)

至此，你的 BRC20 合约就部署好了，你可以在浏览器中查找此交易信息。[https://testnet.bhpnet.io/](https://testnet.bhpnet.io/)
