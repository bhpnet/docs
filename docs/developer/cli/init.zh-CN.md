---
title: init
---

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