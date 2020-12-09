function getUrlParam(sUrl, sKey) {
  const search = sUrl.split('?')[1].split('#')[0]
  console.log(search)
  const objs = search.split('&')
  const obj = {}
  objs.forEach(item => {
    const key = item.split('=')[0]
    const val = item.split('=')[1]
    if(!obj[key]){
      obj[key] = [val]
    }else{
      obj[key].push(val)
    }
  });
  for(let i in obj){
    if(obj[i].length === 1){
      obj[i] = obj[i][0]
    }
  }
  if(sKey){
    return obj[sKey]
  }
  return obj
}
const res = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe')
console.log(res)