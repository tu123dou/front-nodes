## 函数的简写

```js
getList() {
    ...
}
// 等同于
getList: function() {
    ...
}
```
## 数组的拓展运算符

将一个数组转为用逗号分隔的参数序列
console.log(...[1,2,3]) 1,2,3

## 对象的解构赋值
内部机制： 先找到同名属性，然后再赋值给对应的变量
```js
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```

## 模块

export 对外的接口
import 对内的接口
