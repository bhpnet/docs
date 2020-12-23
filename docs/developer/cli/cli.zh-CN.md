---
title: console
---

## console                            
### 启动一个交互式的 JavaScript 环境，JavaScript 控制台使用 console 子命令启动。这个子命令启动全节点并且打开控制台。

```shell
gbhp console --datadir=data/
```
输出：
```
Welcome to the Gbhp JavaScript console!

instance: gbhp/v1.9.25-stable-9f699202/linux-amd64/go1.15.6
coinbase: 0x9b9f9717c225922a963cc5cf4e0bea5b9389ebec
at block: 0 (Mon Nov 23 2020 19:34:41 GMT+0800 (CST))
 datadir: /home/lab/.bhp/mainnet
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d
> 

```

## copydb                             
### 从目标链数据目录创建一个本地链
```shell
gbhp --datadir=data/ copydb  ~/.bhp/gbhp/chaindata/ ~/.bhp/gbhp/chaindata/ancient/
```

## init                               
### 引导和初始化一个新的创世块
```shell
gbhp init genesis.json --datadir data/
```
输出：
```
INFO [12-21|14:39:04.212] Maximum peer count                       BHP=50 LES=0 total=50
INFO [12-21|14:39:04.212] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [12-21|14:39:04.213] Set global gas cap                       cap=25000000
INFO [12-21|14:39:04.213] Allocated cache and file handles         database=/home/lab/eth-poa-testnet/data/gbhp/chaindata cache=16.00MiB handles=16
INFO [12-21|14:39:04.217] Persisted trie from memory database      nodes=0 size=0.00B time="2.389µs" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-21|14:39:04.217] Successfully wrote genesis state         database=chaindata hash="e13f27…fd1a59"
INFO [12-21|14:39:04.217] Allocated cache and file handles         database=/home/lab/eth-poa-testnet/data/gbhp/lightchaindata cache=16.00MiB handles=16
INFO [12-21|14:39:04.220] Writing custom genesis block 
INFO [12-21|14:39:04.220] Persisted trie from memory database      nodes=0 size=0.00B time="1.714µs" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-21|14:39:04.220] Successfully wrote genesis state         database=lightchaindata hash="e13f27…fd1a59"
```

## inspect                            
### 查看数据库中每种数据类型的存储大小
```shell
gbhp inspect --datadir ./data
```
输出：
```
+-----------------+--------------------+------------+---------+
|    DATABASE     |      CATEGORY      |    SIZE    |  ITEMS  |
+-----------------+--------------------+------------+---------+
| Key-Value store | Headers            | 36.92 MiB  |   59960 |
| Key-Value store | Bodies             | 536.13 MiB |   59960 |
| Key-Value store | Receipt lists      | 20.57 MiB  |   59960 |
| Key-Value store | Difficulties       | 2.59 MiB   |   60014 |
| Key-Value store | Block number->hash | 2.41 MiB   |   60016 |
| Key-Value store | Block hash->number | 2.34 MiB   |   59960 |
| Key-Value store | Transaction index  | 90.45 MiB  | 2709787 |
| Key-Value store | Bloombit index     | 1.18 MiB   |   28672 |
| Key-Value store | Contract codes     | 464.84 KiB |      38 |
| Key-Value store | Trie nodes         | 521.24 MiB | 3753836 |
| Key-Value store | Trie preimages     | 378.00 B   |       6 |
| Key-Value store | Account snapshot   | 0.00 B     |       0 |
| Key-Value store | Storage snapshot   | 0.00 B     |       0 |
| Key-Value store | Clique snapshots   | 39.97 KiB  |      59 |
| Key-Value store | Singleton metadata | 150.00 B   |       5 |
| Ancient store   | Headers            | 6.00 B     |       0 |
| Ancient store   | Bodies             | 6.00 B     |       0 |
| Ancient store   | Receipt lists      | 6.00 B     |       0 |
| Ancient store   | Difficulties       | 6.00 B     |       0 |
| Ancient store   | Block number->hash | 6.00 B     |       0 |
| Light client    | CHT trie nodes     | 0.00 B     |       0 |
| Light client    | Bloom trie nodes   | 0.00 B     |       0 |
+-----------------+--------------------+------------+---------+
|                         TOTAL        |  1.19 GIB  |         |
+-----------------+--------------------+------------+---------+
```

## js                                 
### 执行指定的 JavaScript 文件
```shell
gbhp js path-to-js.js
```

## license                            
### 显示许可证
```shell
gbhp license
```
输出：
```
Gbhp is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Gbhp is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with gbhp. If not, see <http://www.gnu.org/licenses/>.
```
