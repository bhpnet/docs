---
title: account-update
---

## Account update

Update an existing account

```shell script
gbhp account update [options] <address>
```

Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.bhp")
                  --keystore value                      Directory for the keystore (default = inside the datadir)
                  --lightkdf                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength
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
