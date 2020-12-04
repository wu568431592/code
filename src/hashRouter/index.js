window.onhashchange = function (event) {
  console.log(event.oldURL)
  console.log(event.newURL)
  const hash = location.hash
  const routerView =  document.getElementById('router-view')
  if(hash.includes('index')){
    routerView.innerHTML = 'index'
  }else if(hash.includes('details')){
    routerView.innerHTML = 'details'
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  console.log(location.hash)
  if(!location.hash){
    location.hash = '#/index'
  }
})

document.getElementById('goindex').addEventListener('click',()=>{
  location.hash = '#/index'
})

document.getElementById('godetails').addEventListener('click',()=>{
  location.hash = '#/details'
})