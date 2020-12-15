---
title: 在区块浏览器中验证合约
---

步骤 1: 在 BHP 网络部署您的合约

步骤 2: 进入 [BHP Explorer](https://scan.bhpnet.io) 或者 [Testnet Explorer](https://testnet.bhpnet.io)

点击 "Verify and Publish"

![点击 "Verify and Publish"](/images/verify-1.png)

步骤 3：填写正确的合同信息

![合同信息](/images/verify-2.png)

- Contract Address:合约创建时提供的 0x 地址。

- Contract Name:必须与代码中指定的名称一致。例如，在`contract MyContract {...}`中，MyContract 就是合约名称。

- Include nightly builds:如果你想每日构建选择是

- Compiler:编译器版本在`pragma solidity X.X.X.`中指定，使用的是编译器版本而不是每日构建版本。如果使用 Solidity 编译器，运行`solc -version`来检查。

- EVM Version:合同编写的 EVM 版本。如果字节码与版本不匹配，可以尝试使用较新的 EVM 版本进行验证。

- Optimization:如果您在编译过程中启用了优化，请选择是。

- Optimization runs:是否优化运行

- Enter the Solidity Contract Code:我们建议使用扁平化的代码。如果你的代码利用了一个库或继承了依赖关系，这是必要的。

- Try to fetch contructor arguments automatically:尝试自动获取反构器参数

- ABI-encoded Constructor Arguments (if required by the contract):以 ABI 十六进制编码的形式添加参数。构造函数参数从右到左写，并将在输入创建的字节码的最后找到。

点击 "Verify and Publish "来完成这个过程。
