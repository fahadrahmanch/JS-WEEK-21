function debouncing(func,delay){
    let time;
    return function(...args){
        clearTimeout(time)
        time=setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}
function search(query){
    console.log("search",query)
}
let dSearch=debouncing(search,1000)
dSearch("he")
dSearch("he")
dSearch("hello")
