//  16. Implement a function that checks if two objects are equal.

let a={
    name:'fahad',
    age:'12',
    address:{
        place:"wandoor"
    }
}
let b={
    age:'12',
    name:"fahad",
      address:{
        place:"wandoor"
    }
}

function e(a,b){
    if(typeof a!='object'||typeof b!='object'){
        console.log(a,b)
        return a===b
    }
    let k1=Object.keys(a)
    let k2=Object.keys(b)
    if(k1.length!=k2.length)return false
    for(let i in a){
    if(!e(a[i],b[i])||!k2.includes(i)||k1.indexOf(i)!=k2.indexOf(i)){
        return false
    }
    }
    return true
}

console.log(e(a,b))





