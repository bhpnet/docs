---
title: removedb
---

## Removedb

Remove blockchain and state databases

```shell script
gbhp removedb --datadir value
```

Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.bhp")
```

Examples

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
