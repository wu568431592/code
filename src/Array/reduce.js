Array.prototype._reduce = function(fn, pre){
  if(!(this instanceof Array)){
    throw new Error('must be array')
  }
  
  if(!pre){
    for(let i = 0; i< this.length; i++){
      if(this[i]){
        pre = this[i]
        break
      }
    }
  }

  for(let i = 1; i< this.length; i++){
    pre = fn(pre, this[i])
  }
  return pre
}