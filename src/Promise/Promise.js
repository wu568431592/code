const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
function Promise(fn){
  const _this = this;
  _this.status = PENDING
  _this.response = null   
  _this.error = null
  // _this.onFulfilled = null
  // _this.onRejected = null
  _this.onFulfilledCallbacks = []
  _this.onRejectedCallbacks = []
  
  function resolve(value){
    if(value instanceof Promise){
      return value.then(resolve, reject)
    }
    if(_this.status === PENDING){
      setTimeout(()=>{
        _this.status = FULFILLED
        _this.response = value
        // _this.onFulfilled(value)
        _this.onFulfilledCallbacks.forEach(callback => {
          return callback(value)
        });
      },0)
    }
  }

  function reject(err){
    if(_this.status === PENDING){
      setTimeout(()=>{
        _this.status = REJECTED
        _this.error = err 
        // _this.onRejected(err)
        _this.onRejectedCallbacks.forEach(callback => {
          return callback(err)
        })
      },0)
    }
  }
  try{
    fn(resolve,reject)
  }catch(e){
    reject(e)
  }
}

Promise.prototype.then = function(onFulfilled, onRejected){
  const _this = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
  let bridgePromise

  if(_this.status === FULFILLED){
    return bridgePromise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        try{
          let x = onFulfilled(_this.response)
          resolvePromise(bridgePromise, x, resolve, reject)
        }catch(e) {
          reject(e)
        }
      })
    })
  }

  if(_this.status === REJECTED){
    return bridgePromise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        try{
          let x = onRejected(_this.error)
          resolvePromise(bridgePromise, x, resolve, reject)
        }catch(e){
          reject(e)
        }
      })
    })
  }

  if(_this.status === PENDING){
    return bridgePromise = new Promise((resolve, reject)=>{
      _this.onFulfilledCallbacks.push((value)=>{
        try{
          let x = onFulfilled(value)
          resolvePromise(bridgePromise, x, resolve, reject);
        }catch(e){
          reject(e)
        }
      })

      _this.onRejectedCallbacks.push((err)=>{
        try{
          let x = onRejected(err)
          resolvePromise(bridgePromise, x, resolve, reject);
        }catch(e){
          reject(e)
        }
      })

    })
  }

  // if(_this.status === PENDING){
  //   // this.onFulfilled = onFulfilled
  //   // this.onRejected = onRejected
  //   _this.onFulfilledCallbacks.push(onFulfilled)
  //   _this.onRejectedCallbacks.push(onRejected)
  // }else if(_this.status === FULFILLED){
  //   onFulfilled(_this.response)
  // }else {
  //   onRejected(_this.error)
  // }
  // return _this
}
//用来解析回调函数的返回值x，x可能是普通值也可能是个promise对象
function resolvePromise(bridgePromise, x, resolve, reject) {
  //2.3.1规范，避免循环引用
  if(bridgePromise === x) {
    return reject(new TypeError('Circular reference'))
  }
  let called = false;
  if (x != null && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
        // 是否是thenable对象（具有then方法的对象/函数）
        //2.3.3.1 将 then 赋为 x.then
      let then = x.then;
      if (typeof then === 'function') {
        //2.3.3.3 如果 then 是一个函数，以x为this调用then函数，且第一个参数是resolvePromise，第二个参数是rejectPromise
        then.call(x, y => {
          if (called) return;
            called = true;
            resolvePromise(bridgePromise, y, resolve, reject);
          }, error => {
            if (called) return;
            called = true;
            reject(error);
          })
      } else {
        //2.3.3.4 如果 then不是一个函数，则 以x为值fulfill promise。
        resolve(x);
      }
    } catch (e) {
      //2.3.3.2 如果在取x.then值时抛出了异常，则以这个异常做为原因将promise拒绝。
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
}



Promise.prototype.catch = function(fn){
  return this.then(null, fn)
}

Promise.deferred = function() {
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
  });
  return defer;
}
try {
  module.exports = Promise
} catch (e) {
  console.log(e)
}
