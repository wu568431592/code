Function.prototype._bind = function(context, ...params){
  if(typeof this !== 'function'){
    throw new Error('绑定必须是函数')
  }
  const self = this
  // 此处声明一个func 用于判断 绑定的函数是否作为构造函数new
  const func = function(){}

  const resFunction = function(...args){
    // 如果绑定函数作为构造函数new 一个对象时。
    // new 会先创建一个新的空对象obj
    // 再将obj.__proto__ === 构造函数的（此时就是绑定函数）.prototype
    // 那么由于倒数第二行代码返回的绑定函数resFunction 是func的实例
    // 所以。当绑定函数作为构造函数 new 一个对象时， this 一定是 func的实例。
    // 为了使实例化的对象this指向正确。这时的this就是生成的空对象obj

    // 而当绑定函数自己执行的时候。
    // this 指向的是window。则使用我们绑定context。
    return self.apply(this instanceof func ? this: context, params.concat(...args))
  }
  if(this.prototype){
    func.prototype = this.prototype
  }
  resFunction.prototype = new func()
  return resFunction
}


Function.prototype._bi = function(context, ...params){
  if(typeof this !== 'function'){
    throw new Error('must be function')
  }
  let _this = this;
  function c (){}
  const resFunciton = function(...args){
    return _this.apply(this instanceof c ? this: context, params.concat(...args))
  }
  if(this.prototype){
    c.prototype = this.prototype
  }
  resFunciton.prototype = new c()
  return resFunciton
}

function news(func, ...args){
  const obj = {}
  obj.__proto__ = func.prototype
  const res = func.apply(obj, args)
  return res instanceof Object ? res : obj
}