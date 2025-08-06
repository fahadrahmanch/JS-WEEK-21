
let arr=[1,2,3,4,[321,213,{name:"fahad"}],{a:123}]
function deepArray(arr){
    if(!Array.isArray(arr)){
        return arr
    }
    let copyy=[]
    for(let i =0;i<arr.length;i++){
        if(typeof arr[i]!='object'){
        copyy[i]=deepArray(arr[i])
        }else{
            copyy[i]=deep(arr[i])
        }
    }
    return copyy
}
const deeArray=deepArray(arr)
deeArray[4][2].name='asil'
deeArray[5].a='fahad'
console.log("orginalAryy",arr)
console.log("deepArray",deeArray)
function deep(obj){
    if(typeof obj!=='object'||obj===null){
        return obj
    }
    let copy=Array.isArray(obj)?[]:{}
    for(let i in obj){
        copy[i]=deep(obj[i])
    }
    return copy
}

