---
title: Fullnode
order: 1
nav:
  order: 2
  title: Developer
---

# How to Run A Fullnode on BHP

## Fullnodes Functions

- Stores the full blockchain history on disk and can answer the data request from the network.
- Receives and validates the new blocks and transactions.
- Verifies the states of every accounts.

## Supported Platforms

We support running a full node on `Mac OS X`and `Linux`.

## Minimum Requirements

The hardware must meet certain requirements to run a full node.

- VPS running recent versions of Mac OS X or Linux.
- 500 GB of free disk space
- 4 cores of CPU and 8 gigabytes of memory (RAM).
- A broadband Internet connection with upload/download speeds of at least 1 megabyte per second

## Settings

Sync Mode

- Fast Sync
  The default sync mode. Synchronizes a full node doing a fast synchronization by downloading the entire state database, requesting the headers first, and filling in block bodies and receipts afterward. Once the fast sync reaches the best block of the Ethereum network, it switches to full sync mode.

- Full Sync
  Synchronizes a full node starting at genesis, verifying all blocks and executing all transactions. This mode is a bit slower than the fast sync mode but comes with increased security.

## Steps to Run a Fullnode

1. Create a directory

```shell
mkdir network
cd network
mkdir node
```

2.Build from source code

Make sure that you have installed [Go 1.13+](https://golang.org/doc/install) and have added `GOPATH` to `PATH` environment variable

```bash
# Enter the folder bhp was cloned into
git clone https://github.com/bhpnet/bhp
# Switch to the latest tag
git checkout <the latest tag>
cd bhp
# Comile and install bhp
make all
```

or you can download the pre-build binaries from [release page](https://github.com/bhpnet/bhp/releases/latest)

2.Download the config files

Download `genesis.json` and `config.toml` by:

3. Add geth to the system path

- Open /etc/profile
- Add export PATH=\$PATH:/opt/ethereum/go-ethereum/build/bin to the end of the file
- Run source /etc/profile to load the settings into the current shell environment
- If you see a result like the following, the configuration is successful

```
geth version
Geth
Version: 1.9.24-stable
Git Commit: 6a6af6c05bbe0b02b0563f42c10f1d566b60d592
Architecture: amd64
Protocol Versions: [65 64 63]
Go Version: go1.14.3
Operating System: linux
GOPATH=/root/goApps
GOROOT=go
```

4. Download configuration file

Download the `genesis.json` file to the `network` folder

```shell

```

5. Write genesis state locally

```bash
geth --datadir node init genesis.json
```

You could see the following output:

```
INFO [05-19|14:53:17.468] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bhp/node/geth/chaindata cache=16.00MiB handles=16
INFO [05-19|14:53:17.498] Writing custom genesis block
INFO [05-19|14:53:17.501] Persisted trie from memory database      nodes=21 size=56.84KiB time=357.915µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B
INFO [05-19|14:53:17.502] Successfully wrote genesis state         database=chaindata hash=7d79cc…fb0d1e
INFO [05-19|14:53:17.503] Allocated cache and file handles         database=/Users/huangsuyu/Downloads/bhp/node/geth/lightchaindata cache=16.00MiB handles=16
INFO [05-19|14:53:17.524] Writing custom genesis block
INFO [05-19|14:53:17.525] Persisted trie from memory database      nodes=21 size=56.84KiB time=638.396µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=-574.00B
INFO [05-19|14:53:17.528] Successfully wrote genesis state         database=lightchaindata hash=7d79cc…fb0d1e
```

6.Start your fullnode

--http Enable the HTTP-RPC server
--http.addr value HTTP-RPC server listening interface (default: "localhost")
--http.port value HTTP-RPC server listening port (default: 8545)
--http.api value API's offered over the HTTP-RPC interface
--http.corsdomain value Comma separated list of domains from which to accept cross origin requests (browser enforced)
--http.vhosts value Comma separated list of virtual hostnames from which to accept requests (server enforced). Accepts '\*' wildcard. (default: "localhost")
--ws Enable the WS-RPC server
--ws.addr value WS-RPC server listening interface (default: "localhost")
--ws.port value WS-RPC server listening port (default: 8546)
--ws.api value API's offered over the WS-RPC interface
--ws.origins value Origins from which to accept websockets requests
--pprof Enable the pprof HTTP server
--pprof.port value pprof HTTP server listening port (default: 6060)
--pprof.addr value pprof HTTP server listening interface (default: "127.0.0.1")
--metrics Enable metrics collection and reporting

```bash
## start a full node
geth --datadir node --gcmode=archive --port 26681 --http --http.addr '0.0.0.0' --http.port 26682 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26682 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 999
```

7. Backend start geth

```shell
nohup geth --datadir node --gcmode=archive --port 26681 --http --http.addr '0.0.0.0' --http.port 26682 --http.vhosts '*' --ws --ws.addr '0.0.0.0' --ws.port 26682 --ws.origins '*' --bootnodes 'enode://10b89d31a13d672c3b5b1c27441089e84921c47de304e24ede773cafb935862473250a5f6c8621c738002e47003eefba97999cdfde91c8a1614d1a36f83b8c50@172.19.166.129:0?discport=26690' --networkid 999 & > nohup.out
```

If you run it directly from a shell terminal, you can close the process with CTRL + C. How to close the geth process running in the background is to use the following script.

```shell
#!/bin/sh
pid=`ps -ef|grep geth|grep -v grep|awk '{print $2}'`
echo $pid
kill -INT $pid
```

8. Monitor node status

You can check the synchronization status of a running node by attaching it with the following command (if it returns false, it has been synchronized to the latest height)

```shell
geth attach data/geth.ipc
> eth.syncing
false
```

9. Start a validator node

```bash
## generate the consensus key and input the password
geth account new --datadir ./node
echo {your-password} > password.txt
geth --config ./config.toml --datadir ./node -unlock {your-validator-address} --password password.txt  --mine --allow-insecure-unlock  --pprofaddr 0.0.0.0 --metrics --pprof
```
