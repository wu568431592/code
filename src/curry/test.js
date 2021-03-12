const curry = require('./index')

function multiFn(a, b, c){
  return a * b * c
}

const multi = curry(multiFn)

console.log(multi(2)(3)(4))
console.log(multi(2,3,4))
console.log(multi(2)(3,4))
console.log(multi(2,3)(4))

// multi(2)(3)(4)


