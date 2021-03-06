---
title: 运行全节点
order: 1
nav:
  order: 2
  title: 开发人员
---

# 如何在 BHP 上运行全节点

> **提示**
>
> 需要先[安装 gbhp](/zh-CN/developer/install)

## 全节点功能

- 将完整的区块链历史记录存储在磁盘上，并可以接收来自网络的数据请求。
- 接收并验证新的区块和交易。
- 验证每个帐户的状态。

## 最低要求

硬件必须满足某些要求才能运行完整的节点。

- 运行最新版本的 Mac OS X 或 Linux 的 VPS。
- 500 GB 的可用磁盘空间
- 4 个 CPU 核心和 8 GB 内存（RAM）。
- 上传/下载速度至少为每秒 1 MB 的宽带 Internet 连接

## 设定值

同步模式

- 快速同步
  默认的同步模式，当指定同步模式为 “fast” 时，BHP 节点会从网络同步所有的区块头，区块体以及状态数据，但不对区块中的交易进行重放，只会对区块中的数据进行校验。

- 完全同步
  当指定同步模式为"full"时，BHP 节点会从网络同步所有的区块头，区块体并重放区块中的交易以生成状态数据。

## 运行全节点的步骤

在`gbhp`目录下运行以下命令

### 控制台方式启动节点

```shell
gbhp --datadir node
```

### `nohup`后台进程方式启动 `gbhp`

```shell
nohup gbhp --datadir node >gbhp.log &
```

### 配置文件方式启动

除了将大量标志传递给 bhp 二进制文件之外，还可以通过以下方式传递配置文件：

```shell
gbhp --config config.toml
```

## 升级为验证节点

### 1. 创建钱包

您可以创建新的钱包或导入[现有的钱包]()：

```shell
## 生成账户和输出密码
gbhp account new --datadir ./node
echo {your-password} > password.txt
```

### 2. 确认节点同步状态

可以通过下面的命令 attach 到运行的节点查看其同步状态（如果返回 false 表示已经同步到最新高度）

```shell
gbhp attach data/gbhp.ipc
> eth.syncing
false
```

### 3. 启动验证人节点

```shell
gbhp --datadir ./node -unlock {your-validator-address} --password password.txt  --mine --allow-insecure-unlock
```
