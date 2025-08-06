const thenable={
    then:function(resolve,reject){
        resolve("success")
    }
}
let T=Promise.resolve(thenable)
.then((msg)=>{
    console.log(msg)
})
.catch((err)=>{
    console.log(err)
})