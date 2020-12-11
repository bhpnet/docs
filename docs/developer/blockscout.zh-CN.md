---
title: blockscout
order: 1
nav:
  order: 2
  title: Developer
---

# 安装并部署 blockscout 浏览器

## 环境需求

- [Erlang/OTP23](https://github.com/erlang/otp)
- [Elixir 1.10.x](https://elixir-lang.org/)
- [Automake](https://www.gnu.org/software/automake/)
- [Libtool](https://www.gnu.org/software/libtool/)
- [Inotify-tools](https://github.com/inotify-tools/inotify-tools/wiki)
- [GCC Compiler](https://gcc.gnu.org/)
- [GMP](https://gmplib.org/)
- Make
- G++ Compiler
- Rust
- [Postgres 10.3+,11,12](https://www.postgresql.org/)
- [Node.js 14.x.x](https://nodejs.org/en/)

## 安装环境

> 以下为 ubuntu 平台环境安装，其他平台安装基本相同。

```shell
# Erlang/OTP23和Elixir 1.10.x
> wget https://packages.erlang-solutions.com/erlang-solutions_2.0_all.deb && sudo dpkg -i erlang-solutions_2.0_all.deb
> sudo apt-get update
> sudo apt-get install esl-erlang
> sudo apt-get install elixir
# automake
> sudo apt-get install automake autoconf
# make
> sudo apt-get install make
# inotify-tools
> sudo apt-get install inotify-tools
# gmp
> sudo apt-get install libgmp-dev
# libtool
> sudo apt-get install libtool
# gcc
> sudo apt-get install gcc
# g++
> sudo apt-get install g++
# rust
> curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

> nodejs 和 postgres 安装教程较多，读者可自行搜索安装。

## 安装部署

1.  `git clone https://github.com/bhpnet/blockscout`

2.  `cd blockscout`

3.  设置需要的环境变量

    ```shell
    > vim ~/.bashrc
    export DATABASE_URL=postgresql://user:password@localhost:5432/explorer
    export COIN=BHP
    export ETHEREUM_JSONRPC_VARIANT=geth
    export ETHEREUM_JSONRPC_HTTP_URL="http://localhost:8545"
    export ETHEREUM_JSONRPC_WS_URL="ws://localhost:8545"
    export ETHEREUM_JSONRPC_TRACE_URL="http://localhost:8545"
    export BLOCK_TRANSFORMER=clique
    export NETWORK="testnet"
    export MIX_ENV=prod
    ```

    **注意：**你的账户必须有创建数据库的权限

4.  设置 secret_key_base 环境变量

    ```shell
    export SECRET_KEY_BASE=VTIB3uHDNbvrY0+60ZWgUoUBKDn9ppLR8MI4CpRz4/qLyEFs54ktJfaNT6Z221No
    ```

    你也自己可以生成 secret_key_base，`mix phx.gen.secret`

5.  如果你以前部署过，请删除以前版本的静态资源，`mix phx.digest.clean`

6.  安装 Mix 依赖项，并编译应用程序(如果你是在中国大陆以及其他网络受限地区，请使用代理，避免因网络问题安装依赖失败) `mix do deps.get, local.rebar --force, deps.compile, compile`

7.  创建数据库`mix do ecto.create,etco.migrate`

    **如果你在之前创建过数据，你需要删除数据库后，重新生成`mix do ecto.drop, ecto.create, ecto.migrate`**

8.  安装 Node.js 依赖

    - `cd apps/block_scout_web/assets; npm install && node_modules/webpack/bin/webpack.js --mode production; cd -`
    - `cd apps/explorer && npm install; cd -`

9.  编译静态资源文件`mix phx.digest`

10. 运行服务`mix phx.server`
