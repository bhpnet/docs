---
title: Gbhp Command
---

## 启动交互式 JavaScript 环境（连接到节点）

```shell
geth attach node/geth.ipc
```

## 启动 bhp 测试网

```shell
geth --datadir node --bhp
```

## 启动挖矿

```shell
geth --datadir node --bhp -unlock '0x7391effa2acdb0ff9293e0a5f5e3acedfabedd71' --password node/password.txt --mine --allow-insecure-unlock
```
