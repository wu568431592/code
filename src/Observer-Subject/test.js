const Observer = require('./Observer')

const observer1 = new Observer()
function fn1(message) {
  console.log('fn1 recevie message:',message)
}
function fn2(message) {
  console.log('fn2 recevie message:',message)
}
observer1.add(fn1)
observer1.add(fn2)
observer1.notify('hello world')

observer1.remove(fn2)
observer1.notify('hello world again')
