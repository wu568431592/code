function insertSort(arr){
  const res = arr.concat()
  function sort(array){
    const length = array.length;
    for(let i = 1; i < length; i++){ //外层遍历i = 1开始
      const iNum = array[i];
      let preIndex = i - 1
      while(preIndex >=0 && array[preIndex]>iNum){
        array[preIndex + 1] = array[preIndex]
        preIndex --
      }
      array[preIndex + 1] = iNum; //插入
    }
  }
  sort(res)
  return res
}

module.exports = insertSort

function s(arr){
  for(let i = 1; i<arr.length;i++){
    const cur = arr[i]
    let preIndex = i - 1
    while(preIndex>=0 && arr[preIndex]> cur){
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    } 
    arr[preIndex + 1] = cur
  }
  return arr
}

