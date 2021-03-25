function Person(name){
  this.name = name
}
Person.prototype.sayHello = function(){
  return this.name
}

function Student(name, grade){
  Person.call(this, name)
  this.grade = grade
}

Student.prototype = new Person()
Student.prototype.constructor = Student

const xiaoming = new Student('小明',5)
console.log(xiaoming)
console.log(xiaoming.sayHello())


class Animal{
  constructor(name){
    this.name = name
  }
  sayHello(){
    return this.name
  }
  // sayHello = ()=>{
  //   return this.name
  // }
}

class Cat extends Animal{
  constructor(name, sex){
    super(name)
    this.sex = sex
  }
}

const cat = new Cat('mimi','girl')
console.log(cat)
console.log(cat.sayHello())