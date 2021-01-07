---
title: 共识
---

## BHP 共识引擎

BHP 采用 BPoS 共识机制，具有交易成本低、交易延时低、交易并发高等特点，支持最多 21 个验证人节点；

BPoS 是 PoA 和 Pos 的结合体。想要成为验证人，需要先提交提案，等待其他活跃的验证人进行投票，半数以上通过之后，则有资格成为验证人。任意地址均可对有资格成为验证人的地址进行质押，当验证人的质押量排名进入前 21 位之后，则会在下一个 epoch 成为活跃验证人。

所有的活跃验证人按照预定规则排序，轮流进行出块。如果有验证人在自己的出块轮次没能及时出块，则在过去 n/2(n 为活跃验证人的数量)个块内，没有参与过出块操作的活跃验证人，随机进行出块。最少 n/2+1 个活跃验证人正常工作，即可保证区块链的正常运行。

### 系统合约

- 代码：[bhp-system-contracts](https://github.com/bhpnet/bhp-system-contracts)
- 操作：[https://bhpnet.github.io/bhp-system-contracts/#/](https://bhpnet.github.io/bhp-system-contracts/#/)

目前验证人的管理，均由系统合约完成，目前的系统合约有：

- Proposal 负责管理验证人的准入资格，管理验证人提案和投票；
- Validators 负责对验证人进行排名管理、质押和解质押操作、分发区块奖励等；
- Punish 负责对不正常工作的活跃验证人进行惩罚操作；

区块链调用系统合约：

- 每个块结束的时候，会调用`Validators`合约，将区块中所有交易的手续费分发给 active validator;
- 发现 validator 没有正常工作的时候，会调用`Punish`合约，对 validator 进行惩罚；
- 每个 epoch 结束的时候，会调用`Validators`合约，根据排名，更新 active validator；

### 质押

任何账户，都可以对 validator 进行任意数量的质押操作，每个 validator 的最小质押量是 32BHP。 如果想取回已质押的 HT，需要按照如下操作进行：

1. 发送调用`Validators`合约，发送针对某一个 validator 的解质押(`unstake`)的声明交易;
2. 等待`17280`个块之后，调用`Validators`合约，发送提取质押(`withdrawStaking`)的交易，将所有在此 validator 的质押取回；

### 惩罚措施

每当发现验证人没有按照预先设定进行出块的时候，就会在这个块结束时，自动调用 Punish 合约，对验证人进行计数。当计数达到 24 时，罚没验证人的所有收入。当计数达到 48 时，将验证人移除出活跃验证人列表，同时取消验证人资格。
