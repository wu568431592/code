class MaxHeap{
  constructor(){
    this.heap = []
  }
  getParentIndex(i){
    return (i - 1) >> 1
  } 
  swap(left, right){
    [this.heap[left], this.heap[right]] = [ this.heap[right],  this.heap[left]]
  }
  shiftUp(index){
    if(index === 0){
      return
    }
    const parentIndex = this.getParentIndex(index)
    if(this.heap[index]> this.heap[parentIndex]){
      this.swap(index, parentIndex)
      this.shiftUp(parentIndex)
    }
  }
  getLeftIndex(i){
    return i*2+1
  }
  getRightIndex(i){
    return i*2+2
  }
  shiftDown(index){
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    if(this.heap[left] > this.heap[index]){
      this.swap(index, left)
      this.shiftDown(left)
    }
    if(this.heap[right] > this.heap[index]){
      this.swap(index, right)
      this.shiftDown(right)
    }
  }
  insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
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

module.exports = MaxHeap
