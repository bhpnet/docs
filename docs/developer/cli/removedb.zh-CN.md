---
title: removedb
---

## Removedb

删除节点数据命令

```shell script
gbhp removedb --datadir value
```

选项:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       数据库和密钥库的数据目录(默认值:"/root/.bhp")
```

示例

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp removedb --datadir node2/
Remove full node state database (/root/bhp/node2/gbhp/chaindata)? [y/n] y
Remove full node state database (/root/bhp/node2/gbhp/chaindata)? [y/n] y
INFO [12-21|17:06:13.807] Database successfully deleted            path=/root/bhp/node2/gbhp/chaindata elapsed=23.122ms
Remove full node ancient database (/root/bhp/node2/gbhp/chaindata/ancient)? [y/n] y
Remove full node ancient database (/root/bhp/node2/gbhp/chaindata/ancient)? [y/n] y
INFO [12-21|17:06:17.880] Database successfully deleted            path=/root/bhp/node2/gbhp/chaindata/ancient elapsed="278.718µs"
INFO [12-21|17:06:17.880] Light node database missing              path=/root/bhp/node2/gbhp/lightchaindata
```
