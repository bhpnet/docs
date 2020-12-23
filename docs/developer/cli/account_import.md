---
title: account-import
---

## Account import

Import a private key into a new account

```shell script
gbhp account import [options] <keyfile>
```

Options:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       Data directory for the databases and keystore (default: "/home/ubuntu/.bhp")
                  --keystore value                      Directory for the keystore (default = inside the datadir)
                  --lightkdf                            Reduce key-derivation RAM & CPU usage at some expense of KDF strength

ACCOUNT OPTIONS:
                  --password value                      Password file to use for non-interactive password input
```

Examples

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account import 1.txt --datadir node
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:
Address: {e17281c17443b90a145d1a103d57189ffb2d912f}
```
