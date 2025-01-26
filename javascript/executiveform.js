let exeQns1=document.getElementsByName("exe-qns1[]")
let checkBoxWrapper=document.querySelector(".checkbox-wrapper")
let exeQns2=document.getElementsByName("exe-qns2")[0]
let exeQns3=document.getElementsByName("exe-qns3")[0]
let exeQns4=document.getElementsByName("exe-qns4")[0]
let exeQns5=document.getElementsByName("exe-qns5")[0]
let exeQns6=document.getElementsByName("exe-qns6")[0]
let exeQns7=document.getElementsByName("exe-qns7")[0]
let exeRegisterBtn=document.querySelector(".exe-register-btn")
let exeCloseBtn=document.querySelector(".exe-close-btn")
// console.log(exeRegisterBtn)
let exeQns1Err=document.querySelector("#exe-qns1-err")
let exeQns2Err=document.querySelector("#exe-qns2-err")
let exeQns3Err=document.querySelector("#exe-qns3-err")
let exeQns4Err=document.querySelector("#exe-qns4-err")
let exeQns5Err=document.querySelector("#exe-qns5-err")
let exeQns6Err=document.querySelector("#exe-qns6-err")
let exeQns7Err=document.querySelector("#exe-qns7-err")
let exeOverallErr=document.querySelector("#exe-overall-err")

let checkbox
function validatecheckbox(){
    let atleastcheck=false
    exeQns1.forEach((checkbox)=>{
    if(checkbox.checked){
        atleastcheck=true
    }
    })
    return atleastcheck
}
exeQns1.forEach((checkbox)=>{
  checkbox.addEventListener("click",function(){
    if(validatecheckbox()){
    checkBoxWrapper.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
    exeQns1Err.textContent=""
    }
    else{
    checkBoxWrapper.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
    exeQns1Err.textContent="*Required"
    console.log("no")
    }
  })
})


//  from second..
function exeCheck(exefield,exeerr){
exefield.addEventListener("focusout",function(){ 
if(exefield.value===""){
    exefield.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)"
    exeerr.textContent="*Required"
}
else{
    exefield.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)"
    exeerr.textContent=""
}
})
}
exeCheck(exeQns2,exeQns2Err)
exeCheck(exeQns3,exeQns3Err)
exeCheck(exeQns4,exeQns4Err)
exeCheck(exeQns5,exeQns5Err)
exeCheck(exeQns6,exeQns6Err)
exeCheck(exeQns7,exeQns7Err)

exeRegisterBtn.addEventListener("click", function(e){
if(exeQns1Err.textContent==="" && exeQns2Err.textContent==="" && exeQns3Err.textContent=="" && exeQns4Err.textContent==="" && exeQns5Err.textContent==="" && exeQns6Err.textContent==="" && exeQns7Err.textContent===""){
    exeOverallErr.textContent="Submitted"
    exeOverallErr.style.textContent="green"
    document.querySelector("#myform3").reset()
    // document.querySelector(".form-container3").reload()

    setTimeout(function(){
        formContainer3.style.display="none"
        window.location.href="./overview.html"
    },1000)
}
else{
    e.preventDefault()
    exeOverallErr.textContent="*All field required"
    exeOverallErr.style.color="red"
}
})
exeCloseBtn.addEventListener("click", function(){
document.querySelector("#myform3").reset()
window.location.href="./userdashboard.html"
formContainer3.style.display="none"

})