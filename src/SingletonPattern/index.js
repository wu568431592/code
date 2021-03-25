function Person(name){
  if(Person.instance){
    return Person.instance
  }
  this.name = name
  Person.instance = this
}

const p1 = new Person('哈哈哈1')
const p2 = new Person('哈哈哈2')
console.log(p1, p2, p1 === p2)


class Animal{
  constructor(name) {
    if(!Animal.instance) {
      this.name = name
      Animal.instance = this
    }
    return Animal.instance
  }
  a = 1
  setName(name) {
    console.log(this.a)
    this.name = name
  }
}

const a1 = new Animal('hahah1')
const a2 = new Animal('hahah2')
console.log(a1, a2, a1===a2)
a1.setName('111')