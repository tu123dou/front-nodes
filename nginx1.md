nginx的作用
1.代理
2.web静态服务器

## 代理

### 代理
拦截访问请求到当前设置的
### 正向代理
像翻墙软件,vpn这种只主动发起的请求
### 反向代理
用户发出的请求先访问nginx,nginx对每个请求再进行分发

## 服务器的概念

服务器的概念类比服务员,服务员是给人提供服务的,服务器是给网站提供数据的

## hosts的作用
hosts作用: 给IP起别名

mac下hosts的目录所在位置: /etc/hosts
window下hosts的目录所在位置: /system/drivers/hosts



利用nginx反向代理解决跨域问题

1.koa简单起一个服务

```js
const Koa = require('koa');
const app = new Koa();


const main = ctx => {
    ctx.response.body = 'Hello World';
};
  
app.use(main);
app.listen(3100);
```
在命令行执行 node index.js,在浏览器中打开 http://localhost:3100/, 页面显示 Hello World;

我不想用localhost去访问,感觉有点不正经,想使用http://server.com:3100/ 来访问, 利用 SwitchHosts 给localhost起个别名

```js
127.0.0.1	localhost
127.0.0.1	server.com
```
此时打开 http://server.com:3100/ ,页面显示 Hello World

2.在页面中去请求这个服务的接口返回数据;
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="main"></div>
    <script>
        fetch('http://server.com:3100').then((res) => {
            document.getElementById('main').innerHTML = res;
        })
    </script>
</body>
</html>
```
在浏览器中打开页面 file:///Users/wangyaxing/github/try-koa/home.html ,此时浏览器的控制台报错 有跨域问题,我们都知道: 协议,域名,端口号只要有一样不同就会有跨域问题;现在我们使用的协议是file协议,而我们访问的接口地址是http协议,所以存在跨域问题;






