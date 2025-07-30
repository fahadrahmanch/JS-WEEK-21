function throttling(fn,delay){
    
let isThr=false
return function(){
    if(!isThr){
        fn.apply()
        isThr=true
        
        setTimeout(() => {
            isThr=false
        }, delay);
        
    }
    
}
}

function fn(){
    console.log("scrolled")
}

window.addEventListener("scroll",throttling(fn,1000))
