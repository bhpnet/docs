---
title: export
---

## export

Export blockchain into file

Requires a first argument of the file to write to.
Optional second and third arguments control the first and
last block to write. In this mode, the file will be appended
if already existing. If the file ends with .gz, the output will
be gzipped.

### Command

```shell
export [command options] [arguments...]
OPTIONS
--datadir  value  Data directory for the databases and keystore
--syncmode value  Blockchain sync mode ("fast", "full", or "light") (default: fast)
--cache    value  Megabytes of memory allocated to internal caching (default = 4096 mainnet full node, 128 light mode) (default: 1024)
```

### Example

```shell
> gbhp export --datadir .\node\ --syncmode full data
INFO [12-23|10:57:40.319] Maximum peer count                       ETH=50 LES=0 total=50
INFO [12-23|10:57:40.392] Set global gas cap                       cap=25000000
ode\gbhp\chaindata cache=512.00MiB handles=8192
INFO [12-23|10:57:40.610] Opened ancient database                  database=node\gbhp\chaindata\ancient
INFO [12-23|10:57:40.614] Persisted trie from memory database      nodes=0 size=0.00B time=0s gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-23|10:57:40.618] Loaded most recent local header          number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.621] Loaded most recent local full block      number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.623] Loaded most recent local fast block      number=70516 hash="c183cf…678ad5" td=98750 age=24s
INFO [12-23|10:57:40.684] Exporting blockchain                     file=data
INFO [12-23|10:57:40.686] Exporting batch of blocks                count=70517
INFO [12-23|10:57:48.689] Exporting blocks                         exported=12520 elapsed=8.001s
INFO [12-23|10:57:56.692] Exporting blocks                         exported=30753 elapsed=16.003s
INFO [12-23|10:58:00.341] Exported blockchain                      file=data
Export done in 19.6627604s
```
