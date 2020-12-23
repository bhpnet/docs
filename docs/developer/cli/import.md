---
title: import
---

## import

Import a blockchain file

The import command imports blocks from an RLP-encoded form. The form can be one file
with several RLP-encoded blocks, or several files can be used.

If only one file is used, import error will result in failure. If several files are used,
processing will proceed even if an individual RLP-file import failure occurs.

### Command

```shell
import [command options] [arguments...]
OPTIONS
--datadir  value   Data directory for the databases and keystore
--syncmode value  Blockchain sync mode ("fast", "full", or "light") (default: fast)
```

### Example

```shell
> gbhp import --datadir node --syncmode full data1 data2

Import done in 5m4.8862365s.

Compactions
 Level |   Tables   |    Size(MB)   |    Time(sec)  |    Read(MB)   |   Write(MB)
-------+------------+---------------+---------------+---------------+---------------
   0   |          3 |     206.02363 |       9.06507 |       0.00000 |    1069.34945
   1   |         56 |      98.39996 |      10.47070 |    1061.10760 |    1027.71964
   2   |        365 |     732.03782 |       8.61698 |     806.42401 |     806.92392
-------+------------+---------------+---------------+---------------+---------------
 Total |        424 |    1036.46141 |      28.15275 |    1867.53161 |    2903.99302

Read(MB):2817.20141 Write(MB):4888.00115
Object memory: 1988.822 MB current, 2638.004 MB peak
System memory: 3442.518 MB current, 3347.548 MB peak
Allocations:   981.975 million
GC pause:      12.0548ms

Compacting entire database...
Compaction done in 17.3442597s.

Compactions
 Level |   Tables   |    Size(MB)   |    Time(sec)  |    Read(MB)   |   Write(MB)
-------+------------+---------------+---------------+---------------+---------------
   0   |          0 |       0.00000 |       9.71510 |       0.00000 |    1178.27469
   1   |          0 |       0.00000 |      14.26894 |    1474.45642 |    1428.90630
   2   |        561 |    1135.02545 |      21.49000 |    2271.76849 |    2274.06938
-------+------------+---------------+---------------+---------------+---------------
 Total |        561 |    1135.02545 |      45.47405 |    3746.22492 |    4881.25037

Read(MB):4547.13685 Write(MB):6865.36820
```
