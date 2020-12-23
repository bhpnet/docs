---
title: export
---

## export

导出区块链数据

需要文件的第一个参数才能写入。
可选的第二个和第三个参数控制第一个和要写入的最后一个块。
如果文件以.gz 结尾，则输出将出错。

### 命令

```shell
export [command options] [arguments...]
OPTIONS
--datadir  value  数据目录
--syncmode value  同步模式 ("fast", "full", or "light") (默认: fast)
--cache    value  分配给内部缓存的兆字节内存 (default = 4096 mainnet full node, 128 light mode) (default: 1024)
```

### 示例

```shell
> gbhp export --datadir .\node\ --syncmode full data
INFO [12-23|10:57:40.319] Maximum peer count                       ETH=50 LES=0 total=50
INFO [12-23|10:57:40.392] Set global gas cap                       cap=25000000
ode\gbhp\chaindata cache=512.00MiB handles=8192
INFO [12-23|10:57:40.610] Opened ancient database                  database=node\gbhp\chaindata\ancient
INFO [12-23|10:57:40.614] Persisted trie from memory database      nodes=0 size=0.00B time=0s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-23|10:57:40.618] Loaded most recent local header          number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.621] Loaded most recent local full block      number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.623] Loaded most recent local fast block      number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.684] Exporting blockchain                     file=data
INFO [12-23|10:57:40.686] Exporting batch of blocks                count=70517
INFO [12-23|10:57:48.689] Exporting blocks                         exported=12520 elapsed=8.001s
INFO [12-23|10:57:56.692] Exporting blocks                         exported=30753 elapsed=16.003s
INFO [12-23|10:58:00.341] Exported blockchain                      file=data
Export done in 19.6627604s
```
