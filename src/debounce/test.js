const debounce = require('./index')


const a = debounce(function(name){
  console.log(name)
},1000)

a('哈哈1')
a('哈哈2')
a('哈哈3')
a('哈哈4')
a('哈哈5')
a('哈哈6')
