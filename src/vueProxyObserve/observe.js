function reactive(target){
  if(typeof target !== 'object' || target == null){
    return target
  }
  const proxyConfig = {
    get(target, key, receiver){
      if(Reflect.ownKeys(target).includes(key)){
        console.log('get', key)
      }
      const result = Reflect.get(target, key, receiver)
      return reactive(result)
    },
    set(target, key, val, receiver){
      if(val === target[key]){
        return true
      }
      if(Reflect.ownKeys(target).includes(key)){
        console.log('设置已存在的key', key)
      }else{
        console.log('设置新增的key', key)
      }
      return Reflect.set(target, key, val, receiver)
    },
    deleteProperty(target, key){
      return Reflect.deleteProperty(target, key)
    }
  }
  const observed = new Proxy(target, proxyConfig)
  return observed
}

const data = {
  name: 'John',
  age:21,
  info:{
    address: '北京'
  }
}

const proxyData = reactive(data)

proxyData.name = 'hahahha'
delete proxyData.age
// console.log(proxyData.name)
// console.log(proxyData.info.address)
proxyData.sex = '男'



