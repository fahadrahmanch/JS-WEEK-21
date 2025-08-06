// Constructor function .prototype

// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// Person.prototype.isAdult=function(){
//     if(this.age>=18){
        
//         console.log(`yes he is ${this.age}`)
//     }else{
//         console.log(this.age)
//         console.log(`no he is ${this.age}`)

//     }
// }

// const instancePerson=new Person("fahad",21)
// instancePerson.isAdult()

// Object.create()	No constructor needed

// let proto={
//     sayHello:function(){
//         console.log(this.name)
//     }
// }
// let obj2=Object.create(proto)
// obj2.name='fahad'
// obj2.age=21
// obj2.sayHello()

// class syntax	Modern, clean

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     sayHello(){
//         console.log("hello",this.name)
//     }
// }
// const newPerson=new Person('fahad',21)
// newPerson.sayHello()

// __proto__	Old-way

// let ProtoMethods={
//     sayHello:function(){
//         console.log("hello",this.name)
//     }
// }
// let obj={
//     name:'fahad',
//     __proto__:ProtoMethods
// }
// obj.sayHello()
