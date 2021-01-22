// const arr = [1,5,1,43,5,234,1,232,432,12,4,5,78,12]
const arr = Array.from({length: 100000},()=> parseInt(Math.random()*1000000))


// 冒泡排序
// const bubbleSort = require('./bubbleSort')
// console.log('冒泡排序', bubbleSort(arr))

// 快速排序
// const quickSort = require('./quickSort').quickSort
// const res = quickSort(arr)
// console.log('快速排序', res)

// 快速排序2
// const quickSort2 = require('./quickSort').quickSort2
// const res1 = quickSort2(arr)
// console.log('快速排序2', res1, arr)
const s = require('./quickSort').s
const res1 = s(arr)
console.log('快速排序2', res1, arr)

// 选择排序
// const selectionSort = require('./selectionSort')
// const res = selectionSort(arr)
// console.log('选择排序', res)

// 插入排序
// const insertSort = require('./insertSort')
// const res = insertSort(arr)
// console.log('插入排序', res)

// 希尔排序
// const shellSort = require('./shellSort')
// console.time('希尔排序')
// const res = shellSort(arr)
// console.log('希尔排序', res)
// console.timeEnd('希尔排序')


// 归并排序
// const mergeSort = require('./mergeSort')
// console.time('归并排序')
// const res2 = mergeSort(arr)
// console.log('归并排序', res2)
// console.timeEnd('归并排序')
