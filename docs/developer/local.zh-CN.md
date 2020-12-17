---
title: 本地 BHP 网络搭建
---

## 设置您的 BHP 节点

### 1. 安装 geth 和 puppeth

[查看指南](fullnode.zh-CN.md)

### 2. 创建项目

```
mkdir /projects
# 创建 local 文件夹
mkdir /projects/local
```

### 3. 创建账户

- 先创建密码方便后面测试使用,本案例测试密码为 12345678

```shell
echo '12345678' > node1/password.txt
echo '12345678' > node2/password.txt
```

- 创建账户

```shell
geth --datadir node1/ account new --password node1/password.txt
geth --datadir node2/ account new --password node2/password.txt
```

记住里面的账户地址

### 4. 创建 genesis 文件

- 执行以下命令进行命令化配置

```shell
puppeth
```

```shell
+-----------------------------------------------------------+
| Welcome to puppeth, your Ethereum private network manager |
|                                                           |
| This tool lets you create a new Ethereum network down to  |
| the genesis block, bootnodes, miners and ethstats servers |
| without the hassle that it would normally entail.         |
|                                                           |
| Puppeth uses SSH to dial in to remote servers, and builds |
| its network components out of Docker containers using the |
| docker-compose toolset.                                   |
+-----------------------------------------------------------+

Please specify a network name to administer (no spaces, hyphens or capital letters please)
> genesis
```

- 选择配置新的 genesis

```shell
What would you like to do? (default = stats)
 1. Show network stats
 2. Configure new genesis
 3. Track new remote server
 4. Deploy network components
> 2
```

- 选择创建新的 genesis

```shell
What would you like to do? (default = create)
 1. Create new genesis from scratch
 2. Import already existing genesis
> 1
```

- 选择创建新的 genesis

What would you like to do? (default = create)

1. Create new genesis from scratch
2. Import already existing genesis
   > 1

- 选择 poa 共识

```shell
Which consensus engine to use? (default = clique)
1. Ethash - proof-of-work
2. Clique - proof-of-authority
> 2
```

- 选择出块时间

```shell
How many seconds should blocks take? (default = 15)
> 5
```

- 输入刚才创建的两个账户地址，然后按 enter 进入下一步

```shell
Which accounts are allowed to seal? (mandatory at least one)
> 0x8b3c63852f2F95964E5F45DC15fbfbDc356792F9
> 0xFA4771E98B786E69a96b03798D240B523932bE4B
```

- 哪些帐户应预先注资？（建议至少一个）

> 同样，在开发环境中，预先分配多少地址并不重要。但是，如果用于商业用途，请谨慎执行此步骤（您无法决定要投入多少资金）。 当您进行交易，部署智能合约，发布 ERC-20 令牌等时，将使用资金。

```shell
Which accounts should be pre-funded? (advisable at least one)
> 0xFA4771E98B786E69a96b03798D240B523932bE4B
```

- 预编译地址（0x1 .. 0xff）是否应预先充值 1 wei？（建议是）

```shell
Should the precompile-addresses (0x1 .. 0xff) be pre-funded with 1 wei? (advisable yes)
> yes
```

- 指定网络 id

```shell
Specify your chain/network ID if you want an explicit one (default = random)
> 1000
```

- 管理已存在的 genesis

```shell
What would you like to do? (default = stats)
 1. Show network stats
 2. Manage existing genesis
 3. Track new remote server
 4. Deploy network components
> 2
```

- 导出配置

```shell
1. Modify existing configurations
 2. Export genesis configurations
 3. Remove genesis configuration
> 2
```

- 直接回车

将 genesis 保存到哪个文件夹？（默认是当前）

- 最后 Ctrl+C 退出

```shell
Which folder to save the genesis specs into? (default = current)
  Will create genesis.json, genesis-aleth.json, genesis-harmony.json, genesis-parity.json
>
INFO [11-19|11:58:33.585] Saved native genesis chain spec          path=genesis.json
ERROR[11-19|11:58:33.585] Failed to create Aleth chain spec        err="unsupported consensus engine"
ERROR[11-19|11:58:33.585] Failed to create Parity chain spec       err="unsupported consensus engine"
INFO [11-19|11:58:33.586] Saved genesis chain spec                 client=harmony path=genesis-harmony.json
```

### 5. 初始化节点

```shell
geth --datadir /projects/local/node1 init /projects/local/genesis.json
geth --datadir /projects/local/node2 init /projects/local/genesis.json
```

### 6. 创建一个引导节点

> 节点连接有 2 种方式，可以采用 bootnode 方式，也可以采用直连方式。如果想要采用直连方式可以直接跳到第 8 步

引导节点的唯一目的是帮助节点彼此发现

- 初始化 bootnode

```shell
bootnode -genkey boot.key
```

- 启动 bootnode 服务

-addr 是 bootnode 的 P2P 端口

```shell
bootnode -nodekey boot.key -verbosity 9 -addr :26690
```

显示并获取 bootnode 的 enode 信息

```
bootnode -nodekey boot.key -verbosity 9 -addr :26690
enode://7f6bf28538ce1c28112483a7776de8af8bb26ece7f54e1545dc379f15e662aba49f60d662559e9e7389d66f8e31b570f4a0c5fc7e1bd84548270099de05d0c12@127.0.0.1:0?discport=26690
Note: you're using cmd/bootnode, a developer tool.
We recommend using a regular node as bootstrap node for production deployments.
INFO [11-19|16:42:14.896] New local node record                    seq=1 id=eaae3942df1dc2e5 ip=<nil> udp=0 tcp=0
```

### 7. 启动节点

使用此方式 2 个节点会以 bootnode 方式通信连接

```
geth --datadir /projects/local/node1 --password /projects/local/node1/password.txt --syncmode 'full' --gcmode=archive --port 26681 --http --http.addr '0.0.0.0' --http.port 26682 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26682 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 1000 --unlock '0xD68066d2292b9e80FdE6904447A044050ca3fA3C' --allow-insecure-unlock --mine
geth --datadir /projects/local/node2 --password /projects/local/node2/password.txt --syncmode 'full' --gcmode=archive --port 26691 --http --http.addr '0.0.0.0' --http.port 26692 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26692 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 1000 --unlock '0x30439478508367F4B8dBEC1Df0a1D61169b5a4d1' --allow-insecure-unlock --mine
```

也可以采用直连方式互相连接(采用此步可以直接看第 8 步)

- 启动该节点

```
geth --datadir /projects/local/node2 --port 30304 --nodiscover --networkid 1000 console
```

### 9. 连接其他节点

进入第一个节点的 geth console :

```
> admin.nodeInfo.enode
```

In the other console :

```
> admin.addPeer( <the enode value from the first console> )
```

## geth 命令行相关使用

### 节点信息

```
> admin.nodeInfo
```

### 节点

显示节点

```
> admin.peers
```

查看节点个数

```
> admin.peers.length
```

### 创建一个账户

You need an account to do be able to do things like mining

```
> personal.newAccount()
```

_And make sure your remember/save the password!_

### 解锁账户

Neccessary before some actions

```
> personal.unlockAccount( eth.accounts[0] )
```

### 启动挖矿

```
> miner.start(1)
```

The first block may take a while to mine, allow a few minutes

### 停止挖矿

```
> miner.stop()
```

### 当前区块编号

```
> eth.blockNumber
```

### 当前区块详情

```
> eth.getBlock( eth.blockNumber )
```

### 最新区块的矿工

```
> eth.getBlock(eth.blockNumber).miner
```

### 账户余额

```
> web3.fromWei(eth.getBalance(eth.accounts[0]))
```

### 账户间转账

首先通过以下方式获取账号

`> eth.accounts`

然后解锁你要发送的账户

`> personal.unlockAccount( <from account> )`

例如

`> personal.unlockAccount(eth.accounts[0])`

最后转一个 ether

```
> eth.sendTransaction({from: "<from account>", to: "<to account>", value: web3.toWei(1, "ether")})
```

### 退出

```
> exit
```

(如果节点是用`$ geth console`（而不是`$ geth attach`）启动的，这也会使节点停止运行)

## 连接到您的网络上的其他节点。

1. 获取节点的 IP : `$ ifconfig|grep netmask|awk '{print $2}'`

2. 获取节点的 enode : `> admin.nodeInfo.enode`

3. 将 enode 字符串中的 `[::]` 替换为 `[<ip 地址>]`

4. 在你的控制台 `> admin.addPeer(< 包含ip地址的enode字符串>)`
