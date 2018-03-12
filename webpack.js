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
