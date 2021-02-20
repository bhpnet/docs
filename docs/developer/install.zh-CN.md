---
title: 安装
---

## 安装`go`

> 提示
> 编译安装 bhp 软件依赖 Go 1.14 +。

按照[官方文档](https://golang.org/doc/install)安装 go。

别忘记设置您的 `$GOPATH`，`$GOBIN`和`$PATH`环境变量，例如：

```shell
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export GOBIN=$GOPATH/bin" >> ~/.bashrc
echo "export PATH=$PATH:$GOBIN" >> ~/.bashrc
source ~/.bashrc
```

确认已成功安装`go`

```shell
go version
```

## 安装`gbhp`

正确配置`go`之后，您应该可以编译并运行`gbhp`了。

请确保您的服务器可以访问 google.com，因为我们的项目依赖于 google 提供的某些库（如果您无法访问 google.com，也可以尝试添加代理：`export GOPROXY=https://goproxy.io`）

```shell
# 源码下载
git clone https://github.com/bhpnet/go-bhp
# 切换到最新分支
git checkout <最新分支>
# 进入目录
cd go-bhp
# 对源码进行编译
make gbhp
```

> 您也可以直接下载 github 仓库的可执行文件

编译完成后，生成的二进制文件在 build/bin 目录下

### 运行

通过`./build/bin/gbhp --help`查看所有的`option`选项，根据情况自行设置相关配置参数。

### 网络接入

程序启动默认接入`mainnet`，如需接入公共测试网，可添加`option --testnet`。
