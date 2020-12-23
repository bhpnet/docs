---
title: account-import
---

## Account import

将私钥导入新帐户

```shell script
gbhp account import [options] <keyfile>
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
root@iZwz9af3cg1abi4nmbogwxZ:~/bhp# gbhp account import 1.txt --datadir node
Your new account is locked with a password. Please give a password. Do not forget this password.
Password:
Repeat password:
Address: {e17281c17443b90a145d1a103d57189ffb2d912f}
```
