function EventChannel(){
  this.list = {}
}

EventChannel.prototype.$on = function (type, fn) {
  if(!this.list[type]){
    this.list[type] = [fn]
  }else{
    this.list[type].push(fn)
  }
}

EventChannel.prototype.$once = function(type, fn){
  let _this = this;
  const callback = function(message){
    _this.$off(type, callback)
    fn(message)
  }
  callback['fn'] = fn
  if(!this.list[type]){
    this.list[type] = [callback]
  }else{
    this.list[type].push(callback)
  }
}

EventChannel.prototype.$off = function(type, fn){
  if(!this.list[type]){
    return false
  }else{
    const index = this.list[type].indexOf(fn)
    if(index>-1){
      this.list[type].splice(index,1)
      return true
    }else{
      return false
    }
  }
}

EventChannel.prototype.$emit = function (type, message) {
  if(!this.list[type]){
    return false
  }else{
    const list = this.list[type]
    for(let i = 0; i< list.length; i++){
      const item = list[i]
      item(message)
      if(item.fn){
        i--
      }
    }
  }
}

module.exports = EventChannel

