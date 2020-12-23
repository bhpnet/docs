---
title: dump
---

## Account

Manage accounts
Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.bhp")
                  --keystore value                      Directory for the keystore (default = inside the datadir)
                  --lightkdf                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength

ACCOUNT OPTIONS:
                  --password value                      Password file to use for non-interactive password input
```

### Account new

Create a new account

```shell script
gbhp account [options] new
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account new --datadir node
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:

Your new key was generated

Public address of the key:   0x5C248580E743A2591B66B53289A1A52d3458C77a
Path of the secret key file: node/keystore/UTC--2020-12-21T08-56-53.662798177Z--5c248580e743a2591b66b53289a1a52d3458c77a

- You can share your public address with anyone. Others need it to interact with you.
- You must NEVER share the secret key with anyone! The key controls access to your funds!
- You must BACKUP your key file! Without the key, it's impossible to access account funds!
- You must REMEMBER your password! Without the password, it's impossible to decrypt the key!
```

### Account list

Print summary of existing accounts

```shell script
gbhp account [options] list
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account list --datadir node
Account #0: {98e71514ba5e9d937b4482136eb01721972a85e9} keystore:///root/bhp/node/keystore/UTC--2020-12-21T03-05-05.959492006Z--98e71514ba5e9d937b4482136eb01721972a85e9
Account #1: {5c248580e743a2591b66b53289a1a52d3458c77a} keystore:///root/bhp/node/keystore/UTC--2020-12-21T08-56-53.662798177Z--5c248580e743a2591b66b53289a1a52d3458c77a
```

### Account update

Update an existing account

```shell script
gbhp account update [options] <address>
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account update 0x5C248580E743A2591B66B53289A1A52d3458C77a --datadir node
Unlocking account 0x5C248580E743A2591B66B53289A1A52d3458C77a | Attempt 1/3
Password:
INFO [12-21|17:00:22.241] Unlocked account                         address=0x5C248580E743A2591B66B53289A1A52d3458C77a
Please give a new password. Do not forget this password.
Password:
Repeat password:
```

### Account import

Import a private key into a new account

```shell script
gbhp account import [options] <keyfile>
```

Examples

```shell script

```

## Attach

Start an interactive JavaScript environment (connect to node).gbhp.ipc file is in the datadir data directory

```shell script
gbhp attach gbhp.ipc
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp/node2# gbhp attach gbhp.ipc
Welcome to the Geth JavaScript console!

instance: Geth/v1.9.25-stable-10e0e069/linux-amd64/go1.14.13
at block: 0 (Mon Nov 23 2020 19:34:41 GMT+0800 (CST))
 datadir: /root/bhp/node2
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

To exit, press ctrl-d
>
```

## Removedb

Remove blockchain and state databases

```shell script
gbhp removedb --datadir value
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

## Version

Print version numbers

```shell script
gbhp version
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp version
Gbhp
Version: 1.9.25-stable
Git Commit: 10e0e06964a3e6b8a3f7c02061c794a22f293161
Git Commit Date: 20201218
Architecture: amd64
Protocol Versions: [65 64 63]
Go Version: go1.14.13
Operating System: linux
GOPATH=/home/go
GOROOT=/usr/local/go
```
