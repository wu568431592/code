function bindThis(f, oTarget) {
  return function(...params){
     return f.apply(oTarget, params)
  }
}