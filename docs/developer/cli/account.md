---
title: account
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
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account import 1.txt --datadir node
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:
Address: {e17281c17443b90a145d1a103d57189ffb2d912f}
```
