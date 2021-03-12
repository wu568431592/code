Array.prototype._map = function(fn){
  if(!(this instanceof Array)){
    throw new Error('must be array')
  }
  const res = []
  for(let i = 0;i < this.length; i++){
    res.push(fn(this[i],i))
  }
  return res
}