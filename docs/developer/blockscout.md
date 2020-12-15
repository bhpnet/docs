---
title: Blockscout
---

# Install and deploy blockscout browser

## Environmental

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

## Installation environment

> The following is the installation of Ubuntu platform environment. The installation of other platforms is basically the same.

```shell
# Erlang/OTP23 Elixir 1.10.x
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

> There are many installation tutorials for nodejs and Postgres.

## Installation and deployment

1.  `git clone https://github.com/bhpnet/blockscout`

2.  `cd blockscout`

3.  Set the required environment variables

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

    **Note：**Your account must have permission to create a database

4.  Set secret_key_base environment variable

    ```shell
    export SECRET_KEY_BASE=VTIB3uHDNbvrY0+60ZWgUoUBKDn9ppLR8MI4CpRz4/qLyEFs54ktJfaNT6Z221No
    ```

    You can also generate `secret_key_base` yourself，`mix phx.gen.secret`

5.  If you have deployed before, please delete the static resources of the previous version，`mix phx.digest.clean`

6.  Install Mix dependencies, compile them and compile the application(If you are in mainland China and other network-restricted areas, please use a proxy to avoid failure to install dependencies due to network problems.): `mix do deps.get, local.rebar --force, deps.compile, compile`

7.  Create and migrate database `mix do ecto.create,etco.migrate`

    **If you in dev environment and have run the application previously with the different blockchain, drop the previous database `mix do ecto.drop, ecto.create, ecto.migrate`
    Be careful since it will delete all data from the DB. Don't execute it on production if you don't want to lose all the data!**

8.  Install Node.js dependencies

- `cd apps/block_scout_web/assets; npm install && node_modules/webpack/bin/webpack.js --mode production; cd -`
- `cd apps/explorer && npm install; cd -`

9.  Build static assets for deployment `mix phx.digest`

10. Run service `mix phx.server`
