
// console.log(minMeetingRooms(arr))
// console.log(minMeetingRooms(arr1))
// console.log(minMeetingRooms(arr2))
// 大数相加
// function add (num1, num2){
//   const len = Math.max(num1.length, num2.length)
//   num1 = num1.padStart(len, '0')
//   num2 = num2.padStart(len, '0')
//   let flag = 0
//   let res = ''
//   for(let i = len - 1; i>=0; i--){
//     const item1= Number(num1[i]) || 0
//     const item2 = Number(num2[i]) || 0
//     const t = item1 + item2 + flag
//     const total = t%10
//     flag = Math.floor(t / 10)
//     res = total + res
//   }

//   if(flag > 0){
//     res = flag + res
//   }
//   return res
// }
// console.log(add('1','23'))


// function s(obj, key = '', res=[]){
//   for(let i in obj){
//     if(typeof obj[i] ==='object' && !Array.isArray(obj[i])){
//       s(obj[i], key+i, res)
//     }else{
//       const result = {
//         key: key+i,
//         value: obj[i]
//       }
//       res.push(result)
//     }
//   }
//   return res
// }
// var a = {
//   a: {
//     b: {
//       c: 1
//     },
//     d: [1, 2]
//   },
//   e: 's'
// };
// console.log(s(a))

function sleep(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(1)
    }, 1000);
  })
}
function s(){
  return new Promise((resolve, reject)=>{
    sleep().then(res=>{
      // reject(res)
      return Promise.reject(res)
    }).catch(err=>{
      console.log(err,'errorin',)
    })
  })
}
s().then(res=>{
  console.log(res,'then1')
}).catch(err=>{
  console.log(err,'errorout',)
}).then(res=>{
  console.log(res,'then2')
})



// function hasProperty(obj, str){
//   // const arr = str.split('.')
//   const arr = str.replace(/\./g,'')
//   if(obj[arr[0]]){
//     if(arr.length === 1){
//       return true
//     }else{
//       return hasProperty(obj[arr[0]], arr.substr(1))
//     }
//   }
//   return false
// }
// const o ={
//   x:{
//     y:{
//       z: 1
//     }
//   },
//   z:1
// }
// console.log(hasProperty(o, 'x.y.z'))
// console.log(hasProperty(o, 'z.x'))

 
// const data = [ 
//   {
//     id: 1,title: "课程 1", 
//     children: [
//       { id: 4, title: "课程 1-1" }, 
//       {id: 5,title: "课程 1-2", 
//         children: [
//           { id: 6, title: "课程 1-2-1" },
//           { id: 7, title: "课程 1-2-2" }, 
//         ],
//       }, 
//     ],
//   },
//   { id: 2, title: "课程 2" }, 
//   { id: 3, title: "课程 3" },
// ];

// function flat(obj, res = []){
//   for(let i in obj){
//     res.push({
//       id: obj[i].id,
//       title: obj[i].title
//     })
//     if(obj[i].children){
//       flat(obj[i].children, res)
//     }
//   }
//   return res
// }
// console.log(flat(data))


// const arr =  ['1a','2b','13c','5a'] 
// function max(arr){
//   let max = 0
//   let res = 0
//   const map = new Map()
//   const map2 = new Map()
//   for(let i = 0; i < arr.length; i++){
//     const item = arr[i]
//     const key = item[item.length - 1]
//     let value = Number(item.substr(0,item.length - 1))
//     if(map.has(key)){
//       map2.set(key, map2.get(key) + 1)
//       value = value + map.get(key)
//     }else{
//       map2.set(key, 1)
//     }
//     map.set(key, value)
//     const times = map2.get(key)
//     if(times > max){
//       res = map.get(key)
//     }
//   }
//   return res
// }
// console.log(max(arr))


// console.log(/[a-zA-Z]+/g.exec('1sa'))
// console.log('1sa'.match(/[a-zA-Z]+/g))
// console.log('1sa'.search(/[a-zA-Z]+/g))


// function fn(a,c){
//   console.log(a)
//   var a = 123;
//   console.log(a)
//   console.log(c)
//   function a(){}
//   if(false){
//     var d = 456
//   }
//   console.log(d)
//   console.log(b)
//   var b = function(){}
//   console.log(b)
//   function c(){}
//   console.log(c)
// }

// fn(1,2)

const tree = [
  {id: 0,children:null},
  { id:1,
    children:[
      {id:2,children:[]},
      {id:3,children:[
        {id: 4, children:[
          {id:5, children:null}
        ]}
      ]}
    ]
  },{
    id: 6,
    children:[
      {id:7, children:[]}
    ]
  }
]

function getChildren(tree, id, res = {}){
  // for(let i = 0; i < tree.length; i++){
  //   const item = tree[i]
  //   if(item.id === id){
  //     res.data = item.children
  //     return
  //   }
  //   if(item.children && item.children.length){
  //     getChildren(item.children, id, res)
  //   }
  // }
  // return res.data
  const queue = [...tree]
  while(queue.length){
    let len = queue.length
    while(len){
      const item = queue.shift()
      if(item.id === id){
        return item.children
      }
      if(item.children && item.children.length){
        for(let i = 0; i < item.children.length;i++){
          queue.push(item.children[i])
        }
      }
      len --
    }
  }
}

console.log(getChildren(tree, 4))
