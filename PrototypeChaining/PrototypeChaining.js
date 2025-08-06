const grandParent={
    greet:function(){
        console.log("hello from parent")
    }
}
let parent=Object.create(grandParent)
parent.sayHello=function(){
    console.log("hello",this.name)
}
let child=Object.create(parent)
child.name='fahad rahman'
child.sayHello()