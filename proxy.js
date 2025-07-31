const person={
    name:"Raj"
}
const handler={
    get(targert,prop){
        return targert[prop]
    },
    set(targert,prop,value){
        if(value>0){
            targert[prop]=value
        }
    },
    deleteProperty(target,prop){
    if(prop in target){
        delete target[prop]
    }
    }
}
const proxy=new Proxy(person,handler)
console.log(proxy.name)

proxy.age=10
// delete proxy.age
console.log(person)