function cssStyle2DomStyle(sName) {
  const arr = sName.split('-')
  for(let i = 1; i< arr.length; i++){
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }
  return arr.join('')
}

const res = cssStyle2DomStyle('font-size')
console.log(res)