## vue组件中的data必须是函数

当一个组件被定义,data必须声明为返回一个初始数据对象的函数,因为这个组件可能被用来创建多个实例.如果data仍然是一个纯粹的对象,则所有的实例将共享引用同一个数据对象,通过提供data函数,每次创建爱你一个新实例后,我们能够调用data函数,从而返回初始数据的一个全新副本数据对象;

写成函数,会有作用域的概念,是私有函数,只作用发哦当前组件,不会影响到其他各个不同的组件;

类比引用数据类型
Object是引用数据类型,如果不用function 返回,每个组件的data 都是内存的同一个地址,一个数据改变了其他也改变了;

举个🌰

```js
var MyComponent = function() {

};
MyComponent.prototype.data = {
    a: 1,
    b: 2,
}
var component1 = new MyComponent();
var component2 = new MyComponent();

component1.data.a === component2.data.a; // true;
component2.data.b = 5;
component2.data.b // 5
```
如果两个实例同时引用一个对象,那么当你修改其中一个属性的时候,另外一个实例也会跟着改;

两个实例应该有自己各自的域才对,需要通过下面的方法来进行处理

```js
var MyComponent = function() {
    this.data = this.data();
};
MyComponent.prototype.data = function() {
    return {
        a: 1,
        b: 2,
    }
}
```
这样么一个实例的data属性都是独立的,不会相互影响了.
所以，你现在知道为什么vue组件的data必须是函数了吧。这都是因为js本身的特性带来的，跟vue本身设计无关。其实vue不应该把这个方法名取为data()，应该叫setData或其他更容易立即的方法名。

[参考](http://blog.csdn.net/shaleilei/article/details/78084171)
https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E5%87%BD%E6%95%B0
http://blog.csdn.net/shaleilei/article/details/78175702