function updateView(){
  console.log('更新视图')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
  arrProto[method] = function(){
    updateView()
    oldArrayProperty[method].call(this, ...arguments)
  }
});


// 重新定义属性，监听
function defineReactive(target, key, value){
  // 深度监听
  observer(value)
  Object.defineProperty(target,key, {
    get(){
      return value
    },
    set(newVal){
      // 设置新值时也需要监听
      observer(newVal)
      value = newVal
      updateView()
    }
  })
}

function observer(target){
  if(typeof target !=='object' || target === null){
    return target
  }
  if(Array.isArray(target)){
    target.__proto__ = arrProto
  }
  for(let key in target){
    defineReactive(target, key, target[key])
  }
}

const data = {
  name: 'John',
  age: 20,
  info:{
    address: '北京'
  },
  num: [1,2,3,4,5]
}

observer(data)
// data.name = '哈哈哈'
// data.age = 21
// data.x = '1000'
// data.info.address = '上海'
data.num.push(6)
