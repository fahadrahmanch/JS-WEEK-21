let obj={
    name:"fahad rahman",
    age:21,
    address:{
        place:"wandoor",
        district:"Malappuram",
    },
    array:[1,2,3,4,5]
}
function deep(obj){
if(typeof obj!=='object'||obj===null){
    return obj
}
let copy=Array.isArray(obj)?[]:{}
for(let key in obj){
    copy[key]=deep(obj[key])
}
console.log('sdf'+copy)

return copy
}
const deepCopy=deep(obj)
deepCopy.address.place='w'
console.log("orginal object",obj)
console.log("deep object",deepCopy)