function quickSort(arr){
  if(arr.length <=1){
    return arr
  }
  const center = Math.floor(arr.length/2)
  const left = []
  const right = []
  const centerValue = arr.splice(center, 1)
  for(let i = 0; i < arr.length; i++){
    if(arr[i]< centerValue){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(centerValue, ...quickSort(right))
}

function quickSort2(arr){
  const sort = (arr, begin = 0, end = arr.length - 1) => {
    if(begin >= end)
        return;
    var l = begin; // 左指针
    var r = end; //右指针
    var temp = arr[begin]; //基准数，这里取数组第一个数
    //左右指针相遇的时候退出扫描循环
    while(l < r) {
        //右指针从右向左扫描，碰到第一个小于基准数的时候停住
        while(l < r && arr[r] >= temp)
          r --;
        //左指针从左向右扫描，碰到第一个大于基准数的时候停住
        while(l < r && arr[l] <= temp)
            l ++;
        //交换左右指针所停位置的数
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    //最后交换基准数与指针相遇位置的数
    [arr[begin], arr[l]] = [arr[l], arr[begin]];
    //递归处理左右数组
    sort(arr, begin, l - 1);
    sort(arr, l + 1, end);
  }
  const newArr = arr.concat() // 为了保证这个函数是纯函数拷贝一次数组
  sort(newArr)
  return newArr
}

module.exports = {
  quickSort,
  quickSort2,
  s
}

function s(arr, start = 0 , end = arr.length - 1){
  if(start >= end){
    return 
  }
  let l = start
  let r = end
  let temp = arr[start]
  while(l < r){
    while(l<r && arr[r]>= temp ){
      r--
    }
    while( l< r && arr[l]<= temp){
      l++
    }
    [arr[l], arr[r]] = [arr[r], arr[l]]
  }
  [arr[start], arr[l]] = [arr[l], arr[start]]

  s(arr, start, l-1)
  s(arr, l+1, end)
}