function quickSort(arr){
  if(arr.length <=1){
    return arr
  }
  const center = Math.floor(arr.length/2)
  const left = []
  const right = []
  const centerValue = arr.splice(center, 1)
  for(let i = 0; i < arr.length; i++){
    if(arr[i]< centerValue){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(centerValue, ...quickSort(right))
}

module.exports = quickSort