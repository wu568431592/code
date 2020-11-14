const EventChannel = require('./index')

const eventBus = new EventChannel()

function handleClick1(message){
  console.log('click1 and message:'+ message)
}
function handleClick2(message){
  console.log('click2 and message:'+ message)
}

eventBus.$on('click', handleClick1)
eventBus.$on('click', handleClick2)

eventBus.$emit('click','first click')

eventBus.$off('click',handleClick2)
eventBus.$emit('click','second click')

function handleHover1(message){
  console.log('hover1 and message:'+ message)
}
function handleHover2(message){
  console.log('hover2 and message:'+ message)
}
function handleHover3(message){
  console.log('hover3 and message:'+ message)
}
eventBus.$once('hover', handleHover1)
eventBus.$once('hover', handleHover2)
eventBus.$on('hover', handleHover3)
eventBus.$emit('hover','first hover')
eventBus.$emit('hover','second hover')




