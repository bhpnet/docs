# bhpdoc

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

如果直接在 shell 终端运行，可以用 CTRL + C 关闭进程，如何关闭运行在后台的 geth 进程呢，可以使用以下脚本：

```shell
#!/bin/sh
pid=`ps -ef|grep gbhp|grep -v gbhp|awk '{print $2}'`
echo $pid
kill -INT $pid
```
