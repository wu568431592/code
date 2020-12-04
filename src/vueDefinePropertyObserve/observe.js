function updateView(){
  console.log('更新视图')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype;
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
  arrProto[method] = function(){
    updateView()
    oldArrayProperty[method].call(this, ...arguments)
  }
});


// 重新定义属性，监听
function defineReactive(target, key, value){
  // 深度监听
  observer(value)
  const dep = new Dep()
  Object.defineProperty(target,key, {
    get(){
      if(Dep.target){
        dep.addSub(Dep.target)
      }
      return value
    },
    set(newVal){
      // 设置新值时也需要监听
      observer(newVal)
      value = newVal
      // updateView()
      dep.notify()
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



class Dep{
  static target = null
  constructor(){
    this.subs = []
  }
  addSub(sub){
    this.subs.push(sub)
  }
  notify(){
    this.subs.forEach(item =>{
      item.update()
    })
  }
}


class Watcher{
  constructor(vm, key, cb){
    this.vm = vm
    this.key = key
    this.cb = cb
    this.value = this.get()
  }
  update(){
    var value = this.vm.data[this.key];
    var oldVal = this.value;
    if (value !== oldVal) {
      this.value = value;
      this.cb.call(this.vm, value, oldVal);
    }
  }
  get(){
    Dep.target = this;  // 缓存自己
    var value = this.vm.data[this.key]  // 强制执行监听器里的get函数
    Dep.target = null;  // 释放自己
    return value;
  }
}




var data = {
  name: 'John',
  age: 20,
  info:{
    address: '北京'
  },
  num: [1,2,3,4,5]
}

observer(data)
console.log(data)

//模板编译过程中发现有 data引用。就new一个watcher
new Watcher(this, 'name', function(newVal, oldVal){
  console.log('name更新了',newVal, oldVal)
})
new Watcher(this, 'age', function(newVal, oldVal){
  console.log('age更新了',newVal, oldVal)
})
data.name = '哈哈哈'
data.age = 21
// data.x = '1000'
// data.info.address = '上海'
// data.num.push(6)