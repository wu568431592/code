Array.prototype._some = function(fn){
  if(!(this instanceof Array)){
    throw new Error('must be array')
  }
  for(let i = 0; i< this.length; i++){
    if(fn(this[i])){
      return true
    }
  }
  return false
}