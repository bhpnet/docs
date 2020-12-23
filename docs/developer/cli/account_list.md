---
title: account-list
---

## Account list

Print summary of existing accounts

```shell script
gbhp account [options] list
```

Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.bhp")
                  --keystore value                      Directory for the keystore (default = inside the datadir)
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account list --datadir node
Account #0: {98e71514ba5e9d937b4482136eb01721972a85e9} keystore:///root/bhp/node/keystore/UTC--2020-12-21T03-05-05.959492006Z--98e71514ba5e9d937b4482136eb01721972a85e9
Account #1: {5c248580e743a2591b66b53289a1a52d3458c77a} keystore:///root/bhp/node/keystore/UTC--2020-12-21T08-56-53.662798177Z--5c248580e743a2591b66b53289a1a52d3458c77a
```
