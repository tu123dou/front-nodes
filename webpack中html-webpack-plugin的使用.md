---
title: webpack中html-webpack-plugin的使用
date: 2018-01-17 20:04:35
tags: 
---
`html-webpack-plugin`是webpack的一个插件,目前用到改插件的两个作用:
- 为html文件中引入的外部资源文件`script`, `link`动态添加compile后的hash,放在引用缓存的外部文件问题
- 可以生成创建html入口文件,比如单页面可以生成一个html入口,配置N个`html-webpack-plugin`可以生成N个页面入口(及生成多页面);

## 原理

将webpack中的`entry`配置相关入口thunk和`extract-text-webpack-plugin`抽取css样式插入到该插件提供的
