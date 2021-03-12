## setState是同步还是异步？
在React 管理的handler事件、生命周期中setState是异步方法
```
setState({
  a: 1
})
setState(()=>{
  return{
    a: 2
  }
})
```
在setTimeout、自定义事件addEventListener中setState是异步方法
```
setTimeout(()=>{
  setState({
    a: 1
  })
})
```

这是因为在react管理的hander事件和生命周期中在进入方法前会Batch Update，
Batch Update是通过transaction事务机制实现的。分为三个阶段 
1. initialize初始化阶段。 
2. 函数执行阶段(我们写的函数执行)。 
3. close阶段
```
*                       wrappers (injected at creation time)
*                                      +        +
*                                      |        |
*                    +-----------------|--------|--------------+
*                    |                 v        |              |
*                    |      +---------------+   |              |
*                    |   +--|    wrapper1   |---|----+         |
*                    |   |  +---------------+   v    |         |
*                    |   |          +-------------+  |         |
*                    |   |     +----|   wrapper2  |--------+   |
*                    |   |     |    +-------------+  |     |   |
*                    |   |     |                     |     |   |
*                    |   v     v                     v     v   | wrapper
*                    | +---+ +---+   +---------+   +---+ +---+ | invariants
* perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
* +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
*                    | |   | |   |   |         |   |   | |   | |
*                    | |   | |   |   |         |   |   | |   | |
*                    | |   | |   |   |         |   |   | |   | |
*                    | +---+ +---+   +---------+   +---+ +---+ |
*                    |  initialize                    close    |
*                    +-----------------------------------------+
```
1. 在initialize时将组件的isbatchingUpdates = true。
2. 然后执行函数体，如果函数体内存在setState。将newState推入异步更新队列中（此时可能发生setState合并）
3. 接着判断isbatchingUpdates是否为true。
  - 如果为true，则将组件push到dirtyComponents中。
  - 如果为false。则将组件置为dirtyComponents，遍历dirtyComponents，调用updateComponent, 更新数据。此时setState为同步更新。
4. 函数执行完成后进入close阶段，将isbatchingUpdates = false。

根据上边的流程我们发现如果是在react事件handler中直接使用setState,发生以下流程
1. isbatchingUpdates = true
2. setState,将newState推入更新队列
3. 判断isbatchingUpdates === true
4. 将当前组件push到dirtyComponents
5. isbatchingUpdates = false

而如果使用setTimeout包裹setState时，发生以下流程
1. isbatchingUpdates = true
2. setTimout(setState())
3. isbatchingUpdates = false
4. Event loop 执行setTimout回调setState()
5. newState推入更新队列
6. 判断isbatchingUpdates === false
7. 将组件push到dirtyComponents中
7. 遍历dirtyComponents中各个组件，调用updateComponent方法，更新组件。此时setState被同步执行

## setState为何使用不可变值
这样有利于SCU。我们可以通过SCU比较新旧props判断是否进行组件更新，优化性能。

## React父子组件通信
- props传递数据
- props传递函数
- Provider、Consumer

## jsx的本质是什么
jsx的本质是一个函数。会转换成React.createElement方法。该方法执行后返回以vnode

## React合成事件
React的事件不是直接绑定到当前DOM节点上。而是统一绑定到了document上，并且自己实现了事件机制。
点击按钮触发事件，事件冒泡到document上。根据currentTarget找到相应的处理事件，dispatchEvenet执行回调函数。


## React事务机制
transaction 事务机制
1. 在initialize时将当前事务的isbatchingUpdates = true。
2. 然后执行函数体，
3. 函数执行完成后进入close阶段，将当前事务的isbatchingUpdates = false

## React fiber
在react执行patch()时会拆分为两个阶段。
- reconciliation阶段 - 执行diff算法。纯js计算
- commit阶段 - 将diff结果渲染DOM
fiber是将第一个阶段reconciliation阶段任务进行拆分，拆分成子任务，当DOM需要渲染更新时先暂停reconciliation，空闲时恢复。
通过window.requsetIdleCallback在空闲时调用函数