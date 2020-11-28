const {flattenWithConcat, flattenWithReduce} = require('./index')
const arr = [1,2,3,4,[1,23,4,[12,323,43,234,[234],12321],123],1232]

console.log(flattenWithReduce(arr))
console.log(flattenWithConcat(arr))
