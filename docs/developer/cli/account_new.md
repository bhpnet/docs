---
title: account-new
---

## Account new

Create a new account

```shell script
gbhp account [options] new
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
