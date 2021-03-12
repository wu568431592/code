// 预订会议室
function minMeetingRooms(arr){
  if(!arr.length){
    return 0
  }
  const res = [arr[0]]
  for(let i = 1; i < arr.length; i++){
    const startTime = arr[i][0]
    let flag = false
    for(let j = 0; j< res.length; j++){
      if(startTime >= res[j][1]){
        flag = true
        break
      }
    }
    if(!flag){
      res.push(arr[i])
    }
  }
  return res.length
}
const arr = [[0, 30],[5, 10],[15, 20]]
const arr1 = [[10, 20], [20, 30]]
const arr2 =[[10,20], [19,30]]


// console.log(minMeetingRooms(arr))
// console.log(minMeetingRooms(arr1))
// console.log(minMeetingRooms(arr2))
// 大数相加
function add (num1, num2){
  const len = Math.max(num1.length, num2.length)
  num1 = num1.padStart(len, '0')
  num2 = num2.padStart(len, '0')
  let flag = 0
  let res = ''
  for(let i = len - 1; i>=0; i--){
    const item1= Number(num1[i]) || 0
    const item2 = Number(num2[i]) || 0
    // console.log(item1,item2)
    const t = item1 + item2 + flag
    const total = t%10
    flag = Math.floor(t / 10)
    res = total + res
  }

  if(flag > 0){
    res = flag + res
  }
  return res
}
console.log(add('1','23'))


function s(obj, key = '', res=[]){
  for(let i in obj){
    if(typeof obj[i] ==='object' && !Array.isArray(obj[i])){
      s(obj[i], key+i, res)
    }else{
      const result = {
        key: key+i,
        value: obj[i]
      }
      res.push(result)
    }
  }
  return res
}
var a = {
  a: {
    b: {
      c: 1
    },
    d: [1, 2]
  },
  e: 's'
};
console.log(s(a))