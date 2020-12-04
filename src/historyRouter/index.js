
document.addEventListener('DOMContentLoaded',()=>{
  console.log(location.pathname)
  if(location.pathname === '/'){
    location.pathname = '/index'
  }
  historyChange()
})

document.getElementById('goindex').addEventListener('click',()=>{
  history.pushState({}, '','/index')
  historyChange()
})

document.getElementById('godetails').addEventListener('click',()=>{
  history.pushState({},'','/details')
  historyChange()
})

window.onpopstate = function(event){
  console.log('onpopstate',event.state, location.pathname)
  historyChange()
}


function historyChange(){
  const pathname = location.pathname
  const routerView =  document.getElementById('router-view')
  if(pathname.includes('index')){
    routerView.innerHTML = 'index'
  }else if(pathname.includes('details')){
    routerView.innerHTML = 'details'
  }
}