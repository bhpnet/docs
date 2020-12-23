---
title: account
---

## Account

账户管理命令

选项:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       数据库和密钥库的数据目录(默认值:"/root/.bhp")
                  --keystore value                      密钥库的数据目录 (默认值 = 在datadir目录中)
                  --lightkdf                            以降低KDF强度为代价减少密钥派生RAM和CPU的使用

ACCOUNT OPTIONS:
                  --password value                      用于非交互式密码输入的密码文件
```

### Account new

生成一个新的地址

```shell script
gbhp account [options] new
```

示例

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

列出节点所有地址

```shell script
gbhp account [options] list
```

示例

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account list --datadir node
Account #0: {98e71514ba5e9d937b4482136eb01721972a85e9} keystore:///root/bhp/node/keystore/UTC--2020-12-21T03-05-05.959492006Z--98e71514ba5e9d937b4482136eb01721972a85e9
Account #1: {5c248580e743a2591b66b53289a1a52d3458c77a} keystore:///root/bhp/node/keystore/UTC--2020-12-21T08-56-53.662798177Z--5c248580e743a2591b66b53289a1a52d3458c77a
```

### Account update

更新指定地址的密码

```shell script
gbhp account update [options] <address>
```

示例

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

将私钥导入新帐户

```shell script
gbhp account import [options] <keyfile>
```

示例

```shell script
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account import 1.txt --datadir node
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:
Address: {e17281c17443b90a145d1a103d57189ffb2d912f}
```
