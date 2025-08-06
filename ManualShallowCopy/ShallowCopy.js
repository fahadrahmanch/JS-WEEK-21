let obj={
    name:"fahad",
    age:21,
    address:{
        place:"wandoor"
    }
}
const shallowCopy={}
for(let key in obj){
    shallowCopy[key]=obj[key]
}
shallowCopy.name='adhil'
shallowCopy.address.place='malappuram'
console.log("orginal object",obj)
console.log("shallow object",shallowCopy)