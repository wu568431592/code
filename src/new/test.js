const myNew = require('./index')

function A (name){
  this.name = name
}

const a = myNew(A,'a')

console.log(a instanceof A)
console.log(a.__proto__ === A.prototype)
console.log(a.__proto__.constructor === A)
