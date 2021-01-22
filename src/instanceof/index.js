function myInstanceof(left, right){
  left = left.__proto__
  const prototype = right.prototype
  while(true){
    if(left === null){
      return false
    }else if(left === prototype){
      return true
    }
    left = left.__proto__
  }
}
module.exports = myInstanceof
