require('./index')

function funccc(name) {
  this.name = name;
}
var obj = {};
var func1 = funccc._bind(obj);
func1('Jack');
console.log(obj.name);  // Jack
var obj1 = new func1('Alice');
console.log(obj.name);  // Jack
console.log(obj1.name); // Alice
