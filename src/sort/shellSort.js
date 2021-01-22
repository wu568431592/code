function shellSort(arr){
  const res = arr.concat()
  function sort(res){
    for(let gap = Math.floor(res.length/2); gap>0; gap = Math.floor(gap/2)){
      for(let i = gap; i < res.length; i++){
        let j = i
        while(j - gap >= 0 && res[j]<res[j-gap]){
          [res[j],res[j-gap]] = [res[j-gap], res[j]]
          j-=gap
        }
      }
    }
  }
  sort(res)
  return res
}

module.exports = shellSort


// function shellSort(res){
//   for(let gap = Math.floor(res.length/2); gap>0; gap = Math.floor(gap/2)){
//     for(let i = gap; i<res.length;i++){
//       let j = i
//       while(j-gap>=0 && res[j]< res[j-gap]){
//         [res[j],res[j-gap]] = [res[j-gap], res[j]]
//         j-=gap
//       }
//     }
//   }
//   return res
// }