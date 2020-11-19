function myNew (...args){
  const obj = {}
  const constructorFunc = [].shift.call(args)
  obj.__proto__  =  constructorFunc.prototype 
  const params = args
  const res = constructorFunc.apply(obj, params)
  return res instanceof Object ? res : obj
}

module.exports  = myNew