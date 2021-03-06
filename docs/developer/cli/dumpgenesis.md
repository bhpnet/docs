---
title: dumpgenesis
---

## dumpgenesis

The dumpgenesis command dumps the genesis block configuration in JSON format to stdout.

### Command

```shell
dumpgenesis [command options] [arguments...]
OPTIONS
--datadir value  Data directory for the databases and keystore
```

### Example

```shell
> gbhp dumpgenesis --datadir node
{"config":{"chainId":3476,"homesteadBlock":0,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"clique":{"period":15,"epoch":30000}},"nonce":"0x0","timestamp":"0x5fbb9e51","extraData":"0x00000000000000000000000000000000000000000000000000000000000000000941a01ab7b3a39ed6f55d6a4907778a3f15e5c92d2d68a59880eaacf24b96731956d287482dac4b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","gasLimit":"0x47b760","difficulty":"0x1","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","coinbase":"0x0000000000000000000000000000000000000000","alloc":{},"number":"0x0","gasUsed":"0x0","parentHash":"0x0000000000000000000000000000000000000000000000000000000000000000"}
```
