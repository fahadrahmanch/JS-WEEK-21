let arr1=[1,2,3,[55,66]]
let arr2=[]
for(let i=0;i<arr1.length;i++){
    arr2[i]=arr1[i]
}
arr2[1]=3000
arr2[3][1]=1000
console.log('orginalArray',arr1)
console.log("shallowArray",arr2)