let events=document.querySelector("#events")
let allEventsExtends=document.querySelector(".all-events-extends")

let overview=document.querySelector("#Overview")
let Status=document.querySelector("#status")
let setting=document.querySelector("#setting")
let logout=document.querySelector("#logout")

events.addEventListener("click",function(){
    allEventsExtends.classList.toggle("show-extends-menu")
    // if(overview.click ||Status.click || setting.click || logout.click===allEventsExtends.style.display=="hide" ){
    //     allEventsExtends.style.display="block"
    // }
    if(allEventsExtends.style.display==="none" && (overview.click || Status.click || setting.click || logout.click )){
        allEventsExtends.style.display="block"
    }
})

overview.addEventListener("click",function(){
    allEventsExtends.style.display="none"
    // allEventsExtends.classList.toggle("show-extends-menu")
})
Status.addEventListener("click",function(){
    allEventsExtends.style.display="none"
})
setting.addEventListener("click",function(){
    allEventsExtends.style.display="none"
})
logout.addEventListener("click",function(){
    allEventsExtends.style.display="none"
})

// interest button
let interestBtn=document.querySelector("#interest-btn")
interestBtn.addEventListener("click",function(){
    if(interestBtn.innerHTML==="Interest"){
        interestBtn.innerHTML="Interested"
    }
    else{
        interestBtn.innerHTML="Interest"
    }
})