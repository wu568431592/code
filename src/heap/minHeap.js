class MinHeap {
  constructor(){
    this.heap = []
  }
  getParentIndex(i){
    return (i-1) >> 1
  }
  getLeftIndex(i){
    return i * 2 + 1
  }
  getRightIndex(i){
    return i * 2 + 2
  }
  swap(left,right){
    [this.heap[left], this.heap[right]] = [this.heap[right],this.heap[left]]
  }
  shiftUp(index){
    if(index === 0){
      return
    }
    const parentIndex = this.getParentIndex(index)
    if(this.heap[parentIndex] > this.heap[index]){
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  shiftDown(index){
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    if(this.heap[left]< this.heap[index]){
      this.swap(left, index)
      this.shiftDown(left)
    }
    if(this.heap[right]< this.heap[index]){
      this.swap(right, index)
      this.shiftDown(right)
    }
  }
  pop(){
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }
  peek(){
    return this.heap[0]
  }
  size(){
    return this.heap.length
  }
}

module.exports = MinHeap