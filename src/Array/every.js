Array.prototype._every = function(fn){
  if(!(this instanceof Array)){
    throw new Error('must be array')
  }
  for(let i = 0; i< this.length; i++){
    if(!fn(this[i])){
      return false
    }
  }
  return true
}