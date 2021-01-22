function flattenWithReduce(arr){
  return arr.reduce((pre, next)=>{
    return pre.concat(Array.isArray(next) ? flattenWithReduce(next): next )
  },[])
}

function flattenWithConcat(arr){
  // while (arr.some(Array.isArray)) {
  //   arr = [].concat(...arr);
  // }
  // return arr
  const isDeep = arr.some(Array.isArray)
  if(!isDeep){
    return arr
  }
  // const res = Array.prototype.concat.apply([],arr)
  const res = [].concat(...arr)
  return flattenWithConcat(res)
}


module.exports = {
  flattenWithReduce,
  flattenWithConcat,
}