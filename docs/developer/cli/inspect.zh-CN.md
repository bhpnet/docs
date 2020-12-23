---
title: inspect
---
## inspect                            
### 查看数据库中每种数据类型的存储大小
```shell
gbhp inspect --datadir ./data
```
输出：
```
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