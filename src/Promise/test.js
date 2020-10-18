const Promise = require('./Promise')

const a = new Promise((resolve, reject)=>{
  console.log('inPromise')
  Math.random() > 0.5 ? resolve('big') : reject('small')
})
a.then(value=>{
  console.log(value)
}, (error)=>{
  console.log('error', error)
})
const b = new Promise((resolve)=>{
  console.log('test .then.then.then')
  resolve('resovle')
})
b.then(res=>{
  console.log("then1",res)
}).then(res=>{
  console.log('thend2',res)
})

const c = new Promise((resolve)=>{
  console.log('测试异步串行执行')
  setTimeout(() => {
    resolve('1000')
  }, 1000);
})
c.then(res=>{
  console.log(res)
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve('2000')
    }, 2000);
  })
}).then(res=>{
  console.log(res)
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      reject('3000')
    }, 3000);
  })
}).catch(err=>{
  console.log('error',err)
})