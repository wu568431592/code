function deepClone(obj, hash = new WeakMap()){
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  // 此处obj == null 包含多种情况
  if(typeof obj !=='object' || obj == null){
    return obj
  }
  if(hash.get(obj)){
    return hash.get(obj)
  }
  let res 
  if(obj instanceof Array){
    res = []
  }else{
    res = {}
  }
  hash.set(obj, res)
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      res[key] = deepClone(obj[key], hash)
    }
  }
  Boolean
  return res
}

module.exports = deepClone