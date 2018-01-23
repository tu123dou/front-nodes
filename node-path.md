
## path.join([...paths])

使用平台特定的分割符把全部给定的path片段连接到一起,并规范化生成的路径
长度为零的path片段会被忽略,如果连接后的路径字符串是一个长度为零的字符串,则返回'.',表示当前工作目录

```
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'
```


## path.resolve([...paths])

将一个路径或路径片段的序列解析成一个绝对路径
给定的路径序列是从右向左被处理的,后面每个path被依次解析,知道构造完成一个绝对目录;
例如
```
path.resolve('/foo', '/bar', 'baz')会返回 /bar/baz
```
如果处理完全部给定的path片段后还未生成一个绝对路径,则当前的工作目录会被用上;
生成的路径是规范化后的,且末尾的斜杠会被删除,除非路径被解析为跟目录;
长度为0的path会被忽略
如果没有传入path片段,则path.resolve()会返回当前工作目录的绝对路径;
```
path.resolve('/foo/baz', '/tmp/file/'); 返回 /tmp/file
path.resolve('/foo/baz', 'tmp/file/'); 返回/foo/baz/tmp/file

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```
在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
__dirname：全局变量，存储的是文件所在的文件目录
__filename：全局变量，存储的是文件名

## process.cwd()

返回Node.js进程当前的工作目录

## process.env 用法
