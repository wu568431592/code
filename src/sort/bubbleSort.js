function BubbleSort(arr){
  for(let i = 0;i< arr.length - 1; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
      if(arr[j+1] < arr[j]){
        [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
      }
    }
  }
  return arr
}

module.exports = BubbleSort