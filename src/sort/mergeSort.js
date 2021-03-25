function mergeSort(arr){
  const res = arr.concat()
  function sort(res){
    const len = res.length
    if(len < 2){
      return res;
    }
    const middle = Math.floor(len/2)
    const left = res.slice(0,middle)
    const right = res.slice(middle)
    return merge(sort(left),sort(right))
  }

  function merge(left, right){
    const result = []
    while(left.length && right.length){
      if(left[0]<=right[0]){
        result.push(left.shift())
      }else{
        result.push(right.shift())
      }
    }
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())
    return result
  }
  return sort(res)
  // return res
}

module.exports = mergeSort
