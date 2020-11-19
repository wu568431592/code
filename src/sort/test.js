const arr = [1,5,1,43,5,234,1,232,432,12,4,5,78,12]


// 冒泡排序
const bubbleSort = require('./bubbleSort')
console.log('冒泡排序', bubbleSort(arr))

// 快速排序
const quickSort = require('./quickSort')
console.log('快速排序', quickSort(arr))
