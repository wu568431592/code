function debounce (func, wait = 1000){
  let timer = null 
  return function(...params){
    clearTimeout(timer)
    timer = setTimeout(()=>{
      timer = null
      func.apply(this, params)
    }, wait)
  }
}

module.exports = debounce
