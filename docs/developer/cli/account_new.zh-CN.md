---
title: account-new
---

## Account new

生成一个新的地址

```shell script
gbhp account [options] new
```

选项:

```shell script
ETHEREUM OPTIONS:
                  --datadir value                       数据库和密钥库的数据目录(默认值:"/root/.bhp")
                  --keystore value                      密钥库的数据目录 (默认值 = 在datadir目录中)
                  --lightkdf                            以降低KDF强度为代价减少密钥派生RAM和CPU的使用

ACCOUNT OPTIONS:
                  --password value                      用于非交互式密码输入的密码文件
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
