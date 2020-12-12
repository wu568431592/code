// const arr = [1,5,1,43,5,234,1,232,432,12,4,5,78,12]
const arr = Array.from({length: 100000},()=> parseInt(Math.random()*10000000))


// 冒泡排序
// const bubbleSort = require('./bubbleSort')
// console.log('冒泡排序', bubbleSort(arr))

// 快速排序
// const quickSort = require('./quickSort').quickSort
// const res = quickSort(arr)
// console.log('快速排序', res.length)

// 快速排序
const quickSort2 = require('./quickSort').quickSort2
const res1 = quickSort2(arr)
console.log('快速排序2', res1)

