## 编程式导航

router.push()会向history中加一条历史, 点击浏览器后退按钮,调到之前的url

```
router.push('home');
router.push({path: 'home'})
router.push({name: 'home', params: { userId: 123 }});
router.push({path: `home/${userId}`})
router.push({path: 'home', query: { userId: 123 }});
```

如果提供了path, params会被忽略

## 使用webpack配置vue项目代理

https://www.cnblogs.com/DY9412/p/7873847.html
