const request = function (option){
  return new Promise((resolve, reject)=>{
    const { method, url } = option
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          console.log(xhr)
          resolve(xhr.responseText)
        }else{
          reject(xhr.response)
        }
      }
    }
    xhr.send()
  })
}
request({
  method: 'get',
  url:'http://127.0.0.1:8082/'
}).then(res => {
  console.log('res', res)
}).catch(err => {
  console.log('err', err)
})

