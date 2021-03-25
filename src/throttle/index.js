function throttleWithTimeout(func, wait = 1000, immediate){
  let timer = null
  return function (...params){
    if(timer){ return }
    if(immediate){
      func.apply(this, params)
      immediate = false
    }else{
      timer = setTimeout(()=>{
        timer = null
        immediate = false
        func.apply(this, params)
      }, wait)
    }
  }
}

function throttleWithDate(func, wait = 1000, immediate){
  let limited = !immediate; // 节流阀标志位
  let timer = null;
  let start = Date.now();
  return function (...args) {
    const current = Date.now();
    limited = limited && current - start < wait;
    if (limited) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        limited = true;
        func.apply(this, args);
        start = Date.now();
      }, wait);
    }else {
      limited = true;
      func.apply(this, args);
      start = Date.now();
    }
  };
}

module.exports = {
  throttleWithTimeout,
  throttleWithDate
}
