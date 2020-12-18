function selectionSort(arr){
  const res = arr.concat()
  function sort(res){
    for(let i = 0; i< res.length;i++){
      let min = i
      for(let j = i + 1;j < res.length; j++){
        if(res[j] <= res[min]){
          min = j
        }
      }
      [res[min], res[i]] = [res[i], res[min]]
    }
  }
  sort(res)
  return res
}
module.exports = selectionSort