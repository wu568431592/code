const search = require('./index')

const arr = Array.from({length: 100}, (v,k)=>k+1)
console.log(arr)

const res = search(arr, 55) 
console.log(res)