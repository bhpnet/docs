---
title: console
---

## console                            
### Start an interactive JavaScript environment.The JavaScript console is started with the console sub-commands. The console subcommands starts the full node and then opens the console. 

```shell
gbhp console
```

## copydb                             
### Create a local chain from a target chaindata folder
```shell
geth --datadir=data/ copydb  ~/.bhp/gbhp/chaindata/ ~/.bhp/gbhp/chaindata/ancient/
```

## init                               
### Bootstrap and initialize a new genesis block
```shell
gbhp init genesis.json --datadir data/
```
Output:
```text
INFO [12-21|14:39:04.212] Maximum peer count                       BHP=50 LES=0 total=50
INFO [12-21|14:39:04.212] Smartcard socket not found, disabling    err="stat /run/pcscd/pcscd.comm: no such file or directory"
INFO [12-21|14:39:04.213] Set global gas cap                       cap=25000000
INFO [12-21|14:39:04.213] Allocated cache and file handles         database=/home/lab/eth-poa-testnet/data/gbhp/chaindata cache=16.00MiB handles=16
INFO [12-21|14:39:04.217] Persisted trie from memory database      nodes=0 size=0.00B time="2.389µs" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-21|14:39:04.217] Successfully wrote genesis state         database=chaindata hash="e13f27…fd1a59"
INFO [12-21|14:39:04.217] Allocated cache and file handles         database=/home/lab/eth-poa-testnet/data/gbhp/lightchaindata cache=16.00MiB handles=16
INFO [12-21|14:39:04.220] Writing custom genesis block 
INFO [12-21|14:39:04.220] Persisted trie from memory database      nodes=0 size=0.00B time="1.714µs" gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [12-21|14:39:04.220] Successfully wrote genesis state         database=lightchaindata hash="e13f27…fd1a59"
```

## inspect                            
### Inspect the storage size for each type of data in the database
```shell
gbhp inspect --datadir ./data
```
Output:
```text
+-----------------+--------------------+------------+---------+
|    DATABASE     |      CATEGORY      |    SIZE    |  ITEMS  |
+-----------------+--------------------+------------+---------+
| Key-Value store | Headers            | 36.92 MiB  |   59960 |
| Key-Value store | Bodies             | 536.13 MiB |   59960 |
| Key-Value store | Receipt lists      | 20.57 MiB  |   59960 |
| Key-Value store | Difficulties       | 2.59 MiB   |   60014 |
| Key-Value store | Block number->hash | 2.41 MiB   |   60016 |
| Key-Value store | Block hash->number | 2.34 MiB   |   59960 |
| Key-Value store | Transaction index  | 90.45 MiB  | 2709787 |
| Key-Value store | Bloombit index     | 1.18 MiB   |   28672 |
| Key-Value store | Contract codes     | 464.84 KiB |      38 |
| Key-Value store | Trie nodes         | 521.24 MiB | 3753836 |
| Key-Value store | Trie preimages     | 378.00 B   |       6 |
| Key-Value store | Account snapshot   | 0.00 B     |       0 |
| Key-Value store | Storage snapshot   | 0.00 B     |       0 |
| Key-Value store | Clique snapshots   | 39.97 KiB  |      59 |
| Key-Value store | Singleton metadata | 150.00 B   |       5 |
| Ancient store   | Headers            | 6.00 B     |       0 |
| Ancient store   | Bodies             | 6.00 B     |       0 |
| Ancient store   | Receipt lists      | 6.00 B     |       0 |
| Ancient store   | Difficulties       | 6.00 B     |       0 |
| Ancient store   | Block number->hash | 6.00 B     |       0 |
| Light client    | CHT trie nodes     | 0.00 B     |       0 |
| Light client    | Bloom trie nodes   | 0.00 B     |       0 |
+-----------------+--------------------+------------+---------+
|                         TOTAL        |  1.19 GIB  |         |
+-----------------+--------------------+------------+---------+
```

## js                                 
### Execute the specified JavaScript files
```shell
gbhp js path-to-js.js
```

## license                            
### Display license information
```shell
gbhp license
```
Output:
```text
Geth is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Geth is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with gbhp. If not, see <http://www.gnu.org/licenses/>.
```
