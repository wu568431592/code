function namespace(oNamespace, sPackage) {
  const paths = sPackage.split('.')
  let target = oNamespace
  paths.forEach(item =>{
    console.log(item)
    console.log(target)
    if(!target[item]){
      target[item] = {}
    }else if(typeof target[item] !== 'object'){
      target[item] = {}
    }
    console.log(target[item])
    target = target[item]
  })
  console.log('target',target)
  // target[paths[paths.length-1]] = {}
  return oNamespace
}
const res = namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
console.log(res)