let arr1=[11,22,33,null,[1000,2000]]
function deep(arr){
    if(!Array.isArray(arr)||arr==null){
        return arr
    }
    let copy=[]
    for(let i=0;i<arr.length;i++){
        copy[i]=deep(arr[i])
    }
    return copy
}
let deepCopy=deep(arr1)
deepCopy[4][1]=34521
console.log("orginalArray",arr1)
console.log("deepCopyArray",deepCopy)
