---
title: 运行全节点
order: 1
nav:
  order: 2
  title: 开发人员
---

# 如何在 BHP 上运行全节点

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
  默认的同步模式，当指定同步模式为 “fast” 时，以太坊节点会从网络同步所有的区块头，区块体以及状态数据，但不对区块中的交易进行重放，只会对区块中的数据进行校验。

- 完全同步
  当指定同步模式为"full"时，以太坊节点会从网络同步所有的区块头，区块体并重放区块中的交易以生成状态数据。

## 运行全节点的步骤

1. 创建目录

```shell
mkdir network
cd network
mkdir node
```

2. 克隆源代码

确保已安装 [Go 1.13+](https://golang.org/doc/install) 并添加`GOPATH`到`PATH`环境变量中

```
# 获取源码
git clone https://github.com/bhpnet/bhp
# 切换到最新分支
git checkout <最新分支>
# 进入目录
cd bhp
# 对源码进行编译
make all
```

或者可以直接下载 github 仓库的可执行文件

编译之后会在 bhp/build/bin 下生成各种二进制文件，其中包括接下来会用到的 `geth`

```shell
abigen  bootnode  clef  ethkey  evm  examples  faucet  geth  p2psim  puppeth  rlpdump  simulations  swarm  swarm-smoke  wnode
```

3. 添加 geth 到系统路径

- 打开 /etc/profile
- 将 export PATH=\$PATH:/opt/ethereum/go-ethereum/build/bin 添加到文件最后
- 运行 source /etc/profile 将设置加载到当前 shell 环境
- 看到类似下面的结果说明就配置成功了

```
geth version
Geth
Version: 1.9.24-stable
Git Commit: 6a6af6c05bbe0b02b0563f42c10f1d566b60d592
Architecture: amd64
Protocol Versions: [65 64 63]
Go Version: go1.14.3
Operating System: linux
GOPATH=/root/goApps
GOROOT=go
```

4. 下载配置文件

下载`genesis.json`文件到`network`文件夹

```

```

5. 本地初始化 genesis 状态

```
geth --datadir node init genesis.json
```

6. 启动全节点

涉及的命令是：

- --datadir "xxxx" 指定数据目录，用来存放区块链数据，状态数据，keystore 数据等。如果不加这个参数这些数据在不同的系统会放到不同的位置。这个目录占用空间是比较大的，可以指定一个目录，并保证这个目录所在分区有足够的磁盘空间。
- --cache value 分配给内部缓存的内存 MB 数量，默认为 128，这个值设大一些可以提高数据同步效率。
- --http 启用 HTTP-RPC 服务器
- --http.addr value HTTP-RPC 服务器接口地址(默认值:“localhost”)，默认只允许本地连接，设置为 0.0.0.0 可以接收任何地址发来的连接请求
- --http.port value HTTP-RPC 服务器监听端口(默认值:8545)，可以改为不同的端口
- --ws 启用 WS-RPC 服务器，几乎所有第三方节点都不启动这个服务，而要监听以太坊事件又必须启动这个服务
- --ws.addr value WS-RPC 服务器监听接口地址(默认值:“localhost”)
- --ws.port value WS-RPC 服务器监听端口(默认值:8546)
- --networkid 999 BHP 的网络 ID 是 999
- --gasprice '1'
- --port 26681 P2P 端口，默认是 30303

```
geth --datadir node --gcmode=archive --port 26681 --http --http.addr '0.0.0.0' --http.port 26682 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26682 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 999
```

7. 后台启动 geth

```shell
nohup geth --datadir node --gcmode=archive --port 26681 --http --http.addr '0.0.0.0' --http.port 26682 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26682 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 999 & > nohup.out
```

如果直接在 shell 终端运行，可以用 CTRL + C 关闭进程，如何关闭运行在后台的 geth 进程呢，可以使用以下脚本：

```shell
#!/bin/sh
pid=`ps -ef|grep geth|grep -v grep|awk '{print $2}'`
echo $pid
kill -INT $pid
```

8. 监控同步状态

可以通过下面的命令 attach 到运行的节点查看其同步状态（如果返回 false 表示已经同步到最新高度）

```shell
geth attach data/geth.ipc
> eth.syncing
false
```

9. 启动验证节点

```shell
## 生成账户和输出密码
geth account new --datadir node
echo {your-password} > password.txt
```
