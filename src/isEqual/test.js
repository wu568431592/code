const isEqual = require('./index')

const obj1 = {
  a: 'a',
  b: {
    x: 'x',
    y: 'y'
  }
}

const obj2 = {
  a: 'a',
  b: {
    x: 'x',
    y: 'y',
    z: ''
  }
}

console.log(isEqual(obj1, obj2))

const arr1 = [1,2,3,4,5,6,7]
const arr2 = [1,2,3,4,5,6,7]
console.log(isEqual(arr1, arr2))

