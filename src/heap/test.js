const MinHeap = require('./minHeap')
const MaxHeap = require('./maxHeap')

const minHeap = new MinHeap()

minHeap.insert(3)
console.log(minHeap)

minHeap.insert(2)
console.log(minHeap)

minHeap.insert(1)
console.log(minHeap)

minHeap.pop()
console.log(minHeap)
console.log(minHeap.peek())
console.log(minHeap.size())


const maxHeap = new MaxHeap()

maxHeap.insert(1)
console.log(maxHeap)
maxHeap.insert(2)
console.log(maxHeap)
maxHeap.insert(3)
console.log(maxHeap)

maxHeap.pop()
console.log(maxHeap)
console.log(maxHeap.peek())
console.log(maxHeap.size())
