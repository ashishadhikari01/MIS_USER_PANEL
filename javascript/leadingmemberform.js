let leQns1Ans=document.getElementsByName("le-qns1-ans")[0]
let leQns2Ans=document.getElementsByName("le-qns2-ans")[0]
let leQns3Ans=document.getElementsByName("le-qns3-ans")[0]
let leQns4Ans=document.getElementsByName("le-qns4-ans")[0]
let leQns5Ans=document.getElementsByName("le-qns5-ans")[0]
let leQns6Ans=document.getElementsByName("le-qns6-ans")[0]
let leQns7Ans=document.getElementsByName("le-qns7-ans")[0]
let leQns8Ans=document.getElementsByName("le-qns8-ans")[0]
let leQns9Ans=document.getElementsByName("le-qns9-ans")[0]
let leQns10Ans=document.getElementsByName("le-qns10-ans")[0]
let leOverallErr=document.querySelector("#le-overall-err")
let leRegisterBtn=document.querySelector(".le-register-btn")
let leCloseBtn=document.querySelector(".le-close-btn")

let leQns1Err=document.querySelector("#le-qns1-err")
let leQns2Err=document.querySelector("#le-qns2-err")
let leQns3Err=document.querySelector("#le-qns3-err")
let leQns4Err=document.querySelector("#le-qns4-err")
let leQns5Err=document.querySelector("#le-qns5-err")
let leQns6Err=document.querySelector("#le-qns6-err")
let leQns7Err=document.querySelector("#le-qns7-err")
let leQns8Err=document.querySelector("#le-qns8-err")
let leQns9Err=document.querySelector("#le-qns9-err")
let leQns10Err=document.querySelector("#le-qns10-err")

let qns1AnsStatus,qns2AnsStatus,qns3AnsStatus,qns4AnsStatus,qns5AnsStatus,qns6AnsStatus,qns7AnsStatus,qns8AnsStatus,qns9AnsStatus,qns10AnsStatus

function greenshadow(field){
    field.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)";
    }

function redshadow(field){
    field.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)";
    }

document.querySelector("#le-qns2").style.display="none"
document.querySelector("#le-qns3").style.display="none"
document.querySelector("#le-qns4").style.display="none"
document.querySelector("#le-qns5").style.display="none" 

leQns1Ans.addEventListener("click",function(){
if(leQns1Ans.value==="select"){
document.querySelector("#le-qns2").style.display="none"
document.querySelector("#le-qns3").style.display="none"
document.querySelector("#le-qns4").style.display="none"
document.querySelector("#le-qns5").style.display="none"
console.log("if")
}
else if(leQns1Ans.value==="yes"){
console.log("yes")
document.querySelector("#le-qns2").style.display="block"
document.querySelector("#le-qns3").style.display="block"
document.querySelector("#le-qns4").style.display="none"
document.querySelector("#le-qns5").style.display="none"
console.log("else if ")
}
else if(leQns1Ans.value==="no"){
    document.querySelector("#le-qns2").style.display="none"
    document.querySelector("#le-qns3").style.display="none"
    // document.querySelector("#qns2").remove()
    // document.querySelector("#qns3").remove()
    document.querySelector("#le-qns4").style.display="block"
    document.querySelector("#le-qns5").style.display="block" 
    console.log("no")
}
})

// form validation for register as:leading starts form here
leQns1Ans.addEventListener("focusout",function(){
if(leQns1Ans.value==="select"){
    redshadow(leQns1Ans)
    leQns1Err.textContent="*Required"
    return
}
else{
    greenshadow(leQns1Ans)
    leQns1Err.textContent=""
}
})

leQns2Ans.addEventListener("click",function(){ 
    if(leQns2Ans.value==="select"){
        redshadow(leQns2Err)
        leQns2Err.textContent="*Required"
        return
    }
    else{
        greenshadow(leQns2Ans)
        leQns2Err.textContent=""
    }
})

leQns3Ans.addEventListener("focusout",function(){
    if(leQns3Ans.value===""){
        redshadow(leQns3Ans)
        leQns3Err.textContent="*Required"
    }
    else{
        greenshadow(leQns3Ans)
        leQns3Err.textContent=""
    }
})

leQns4Ans.addEventListener("focusout",function(){
    if(leQns4Ans.value===""){
        redshadow(leQns4Ans)
        leQns4Err.textContent="*Required"
    }
    else{
        greenshadow(leQns4Ans)
        leQns4Err.textContent=""
    }
})

leQns5Ans.addEventListener("focusout",function(){
    if(leQns5Ans.value===""){
        redshadow(leQns5Ans)
        leQns5Err.textContent="*Required"
    }
    else{
        greenshadow(leQns5Ans)
        leQns5Err.textContent=""
    }
})


function leFieldCheck(lefield,leerr){
lefield.addEventListener("focusout",function(){
if(lefield.value===""){
    lefield.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)";
    leerr.textContent="*Required"
}
else{
    lefield.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)";
    leerr.textContent=""
}
})
}
leFieldCheck(leQns6Ans,leQns6Err)
leFieldCheck(leQns7Ans,leQns7Err)
leFieldCheck(leQns8Ans,leQns8Err)
leFieldCheck(leQns9Ans,leQns9Err)
leFieldCheck(leQns10Ans,leQns10Err)



leRegisterBtn.addEventListener("click",function(e){ 
if(leQns1Err.textContent=="" && leQns2Err.textContent=="" && leQns3Err.textContent=="" && leQns4Err.textContent=="*Required" && leQns5Err.textContent=="*Required" && leQns6Err.textContent=="" && leQns7Err.textContent=="" && leQns8Err.textContent=="" && leQns9Err.textContent=="" && leQns10Err.textContent=="" ||
leQns1Err.textContent=="" && leQns2Err.textContent=="*Required" && leQns3Err.textContent=="*Required" && leQns4Err.textContent=="" && leQns5Err.textContent=="" && leQns6Err.textContent=="" && leQns7Err.textContent=="" && leQns8Err.textContent=="" && leQns9Err.textContent=="" && leQns10Err.textContent==""){
leOverallErr.textContent="Submitted"
leOverallErr.style.color="green"
document.querySelector("#myform2").reset()
setTimeout(function(){
    document.querySelector(".form-container2").style.display="none"
    window.location.href="./overview.html"
},2000)
}
else {
    e.preventDefault()
    console.log("prevent")
    leOverallErr.textContent="All Field Required"
    leOverallErr.style.color="red"
}
})
leCloseBtn.addEventListener("click",function(){
    document.querySelector(".form-container2").style.display="none"
    window.location.href="./userdashboard.html"
})

