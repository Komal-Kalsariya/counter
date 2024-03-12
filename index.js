 let show=()=>{
    let sbcribe=document.getElementById("count1").innerHTML
    let count=0
    let id=setInterval(() => {
        count=count+1;
        document.getElementById("count1").innerHTML=count
       
    
        if(count==sbcribe){
            clearInterval(id)
            
        }
       
    },1000)
}


setTimeout(()=>{

    show()
},2000)


let show2=()=>{


let comment=document.getElementById("count2").innerHTML
let count1=0;
let no=setInterval(()=>{


    count1=count1+1;
    document.getElementById("count2").innerHTML=count1

    if(count1==comment){
        clearInterval(no)
        show3()
    }
},2000);
}

setTimeout(()=>{

    show2()
},4000)



let show3=()=>{
    let likes=document.getElementById("count3").innerHTML
let count2=0;
let show=setInterval(()=>{
    count2=count2+1;
    document.getElementById("count3").innerHTML=count2

    if(count2==likes){
        clearInterval(show)
    }
},2000);

}
setTimeout(()=>{
    show3()
},2000)


let show4=()=>{
let rating=document.getElementById("count4").innerHTML
let count2=0;
let show=setInterval(()=>{
    count2=count2+1;
    document.getElementById("count4").innerHTML=count2

    if(count2==rating){
        clearInterval(show)
    }
},2000);

}
setTimeout(()=>{
    show4()
},2000)