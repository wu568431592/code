function curry(fn, args = []){
  const argLen = fn.length
  return function(...params){
    const newArgs = args.concat(...params)
    if(newArgs.length < argLen){
      return curry.call(this, fn, newArgs)
    }
    return fn.apply(this, newArgs)
  }
}

module.exports = curry

// function currying(fn, args =[]){
//   const argsLen = fn.length
//   return function(...params){
//     const newArgs = args.concat(...params)
//     if(newArgs.length < argsLen){
//       return currying.call(this, fn, newArgs)
//     }
//     return fn.apply(this, newArgs)
//   }
// }