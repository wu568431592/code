function insertSort(arr){
  const res = arr.concat()
  function sort(array){
    const length = array.length;
    for(let i = 1; i < length; i++){ //外层遍历i = 1开始
      const iNum = array[i];
      let j ;
      for(j = i - 1 ; j >= 0 ; j--){
        if(iNum < array[j]){ //内层遍历元素不断向右挪，直至找到可插入的位置
          array[j + 1] = array[j];
        }else{ //由于前面的元素已排序好，所以可以结束遍历
          break;
        }
      }
      array[j + 1] = iNum; //插入
    }
  }
  sort(res)
  return res
}

module.exports = insertSort