const myInstanceof = require('./index')
const a = {}
const b = []
console.log(myInstanceof(a, Object))
console.log(myInstanceof(b, Object))
console.log(myInstanceof(b, Array))
console.log(myInstanceof(b, Function))

