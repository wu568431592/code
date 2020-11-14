function Observer(){
  this.list = []
}

Observer.prototype.add = function(fn){
  this.list.push(fn)
}

Observer.prototype.remove = function(fn){
  const index = this.list.indexOf(fn)
  if(index > -1){
    this.list.splice(index,1)
    return true
  }
  return false
}

Observer.prototype.notify = function(message){
  this.list.forEach(item=>{
    item(message)
  })
}

module.exports = Observer