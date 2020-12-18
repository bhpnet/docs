---
title: Install
---

## Install `go`

> TIP
> Go 1.14+ is required for building and installing the bhp software.

Install go by following the [official docs]。

Remember to set your `$GOPATH`, `$GOBIN`, and `$PATH` environment variables, for example:

```shell
mkdir -p $HOME/go/bin
echo "export GOPATH=$HOME/go" >> ~/.bashrc
echo "export GOBIN=$GOPATH/bin" >> ~/.bashrc
echo "export PATH=$PATH:$GOBIN" >> ~/.bashrc
source ~/.bashrc
```

Verify that `go` has been installed successfully

```shell
go version
```

## Install `gbhp`

After setting up `go` correctly, you should be able to compile and run `gbhp`.

Make sure that your server can access to google.com because our project depends on some libraries provided by google. (If you are not able to access google.com, you can also try to add a proxy: `export GOPROXY=https://goproxy.io`)

```shell
git clone https://github.com/bhpnet/go-bhp
# checkout latest tag
git checkout <latest tag>
# go to dir
cd go-bhp
make gbhp
```

or you can download the pre-build binaries from release page

If your environment variables have set up correctly, you should not get any errors by running the above commands. Now check your `gbhp` version.

```shell
gbhp version
```
