---
title: 本地 BHP 网络搭建
---

## 设置您的 BHP 节点

### 1.前提条件：安装 geth

[查看指南](/zh-CN/developer/fullnode)

### 2. 前提条件 : 创建项目

创建一个`/projects`符号链接
_(注意: This step is simply so "/projects" can be used in all other commands, instead you could use full paths, or set an env var)_

```
$ mkdir <my projects folder>
$ sudo ln -s <my projects folder> /projects
```

### 3. 创建 local_ethereum_blockchain 文件夹

```
mkdir /projects/local_ethereum_blockchain
```

### 4. 创建 the genesis block 配置

创建此文件 : `/projects/local_ethereum_blockchain/genesis.json`

写入以下内容 :

```
{
     "config": {
       "chainId": 1000,
       "homesteadBlock": 0,
       "eip155Block": 0,
       "eip158Block": 0
                },
     "nonce": "0x0000000000000061",
     "timestamp": "0x0",
     "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
     "gasLimit": "0x8000000",
     "difficulty": "0x100",
     "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
     "coinbase": "0x3333333333333333333333333333333333333333",
     "alloc": {}
}
```

([关于 genesis 文件的相关信息](https://ethereum.stackexchange.com/a/2377/2040))

### 5. 初始化 an Ethereum 节点

```
$ geth --datadir /projects/local_ethereum_blockchain/node1 init /projects/local_ethereum_blockchain/genesis.json
```

### 6. 启动 that Ethereum 节点

```
$ geth --datadir /projects/local_ethereum_blockchain/node1 --networkid 1000 console
```

### 7. 初始化另一个 Ethereum 节点

```
$ geth --datadir /projects/local_ethereum_blockchain/node-2 init /projects/local_ethereum_blockchain/genesis.json
```

### 8. 启动这一次 Ethereum 节点

```
$ geth --datadir /projects/local_ethereum_blockchain/node-2 --port 30304 --nodiscover --networkid 1000 console
```

### 9. 连接其他节点

In one geth console :

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
