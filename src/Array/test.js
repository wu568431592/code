require('./reduce.js')
require('./map.js')
require('./some.js')
require('./every.js')



const arr1 = [1,2,3,4,5]
const total = arr1._reduce((pre, next)=>{
  return pre+next
})
console.log(total)

const more = arr1._map(item =>{
  return item + 1
})
console.log(more)

const has = arr1._some(item =>{
  return item === 2
})
console.log(has)

const is = arr1._every(item => item > 1)
console.log(is)
