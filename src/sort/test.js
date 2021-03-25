// const arr = [1,5,1,43,5,234,1,232,432,12,4,5,78,12]
const arr = Array.from({length: 100000},()=> parseInt(Math.random()*1000000))


// 冒泡排序
// console.time('冒泡排序')
// const bubbleSort = require('./bubbleSort')
// console.log('冒泡排序', bubbleSort(arr))
// console.timeEnd('冒泡排序')


// 快速排序
// const quickSort = require('./quickSort').quickSort
// console.time('快速排序')
// const res = quickSort(arr)
// console.log('快速排序', res)
// console.timeEnd('快速排序')


// 快速排序2
// const quickSort2 = require('./quickSort').quickSort2
// console.time('快速排序2')
// const res1 = quickSort2(arr)
// console.log('快速排序2', res1)
// console.timeEnd('快速排序2')


// 选择排序
// console.time('选择排序')
// const selectionSort = require('./selectionSort')
// const res = selectionSort(arr)
// console.log('选择排序', res)
// console.timeEnd('选择排序')


// 插入排序
// console.time('插入排序')
// const insertSort = require('./insertSort')
// const res = insertSort(arr)
// console.log('插入排序', res)
// console.timeEnd('插入排序')


// // 希尔排序
const shellSort = require('./shellSort')
console.time('希尔排序')
const res = shellSort(arr)
console.log('希尔排序', res)
console.timeEnd('希尔排序')


// 归并排序
// const mergeSort = require('./mergeSort')
// console.time('归并排序')
// const res2 = mergeSort(arr)
// console.log('归并排序', res2)
// console.timeEnd('归并排序')


// 堆排序
// const arr = [1,2,3,4,5,6,7,8]
// console.time('堆排序') 
// const heapSort = require('./heapSort')
// const res2 = heapSort(arr)
// console.log('堆排序', res2)
// console.timeEnd('堆排序')