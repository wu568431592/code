const {throttleWithTimeout, throttleWithDate} = require('./index')

const a = throttleWithTimeout(function(name){
  console.log(name)
}, 1000, true)
const b = throttleWithDate(function(name){
  console.log(name)
},1000, false)

let i = 0
const timer = setInterval(()=>{
  a('哈哈哈'+ new Date())
  // b('嘻嘻嘻'+ new Date())
  i++
  if(i>=10){
    clearInterval(timer)
  }
},500)
