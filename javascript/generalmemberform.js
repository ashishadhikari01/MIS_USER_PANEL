        let qns4Ans=document.getElementsByName("qns4-ans")[0]
        let qns4Err=document.querySelector("#qns4-err")
        let qns5Ans=document.getElementsByName("qns5-ans")[0]
        let qns6Ans=document.getElementsByName("qns6-ans")[0]
        let qns5Err=document.querySelector("#qns5-err")
        let qns6Err=document.querySelector("#qns6-err")
        let overallErr=document.querySelector("#overall-err")
        let qns1Status,qns2Status,qns3Status,qns4Status,qns5Status,qns6Status,qns7Status
         if(qns4Ans.value==="select"){
            qns5Err.textContent=""
            qns6Err.textContent=""
        document.querySelector("#qns5").style.display="none"
        document.querySelector("#qns6").style.display="none"
        qns4Status=false
        // document.querySelector("#qns5").remove()
        // document.querySelector("#qns6").remove()
  
         }
        
         qns4Ans.addEventListener("click", function(){
            if(qns4Ans.value==="yes"){
               document.querySelector("#qns5").style.display="block"
               document.querySelector("#qns6").style.display="block"
               
            }
            else {
                document.querySelector("#qns5").style.display="none"
                document.querySelector("#qns6").style.display="block"
            }
        })
    

        let registerBtn=document.querySelector(".register-btn")
        let gmCloseBtn=document.querySelector(".gm-close-btn")
        let qns1Ans=document.getElementsByName("qns1-ans")[0]
        let qns2Ans=document.getElementsByName("qns2-ans")[0]
        let qns3Ans=document.getElementsByName("qns3-ans")[0]
        let qns7Ans=document.getElementsByName("qns7-ans")[0]
        let qns1Err=document.querySelector("#qns1-err")
        let qns2Err=document.querySelector("#qns2-err")
        let qns3Err=document.querySelector("#qns3-err")
        let qns7Err=document.querySelector("#qns7-err")
       
        
        function greenshadow(field){
            field.style.boxShadow="0px 0px 1.5px 1.5px rgba(0, 255, 0, 0.5)";
            }

        function redshadow(field){
            field.style.boxShadow="0px 0px 1.5px 1.5px rgba(255,0,0,0.5)";
             }

        registerBtn.addEventListener("click", function(e){
             e.preventDefault()
            if(qns1Ans.value===""){
                qns1Err.textContent="*Required"
                redshadow(qns1Ans)
                qns1Status=false
            }
            else {
            qns1Err.textContent=""
            greenshadow(qns1Ans)
            qns1Status=true
            }
            // second field validation
            if(qns2Ans.value===""){
                qns2Err.textContent="*Required"
                redshadow(qns2Ans)
                qns2Status=false
            }
            else{
                qns2Err.textContent=""
                greenshadow(qns2Ans)
                qns2Status=true
            }
            // third field validation
            if(qns3Ans.value===""){
                qns3Err.textContent="*Required"
                redshadow(qns3Ans)
                qns3Status=false
            }
            else{
                qns3Err.textContent=""
                greenshadow(qns3Ans)
                qns3Status=true
            }
            // fourth field validation

            if(qns4Ans.value==="select"){
                qns5Err.textContent=""
                qns6Err.textContent=""
                qns4Err.textContent="*Required"
                qns4Status=false
                redshadow(qns4Ans)
                return
            }
            else if(qns4Ans.value==="yes") {
                qns4Err.textContent=""
                greenshadow(qns4Ans)
                qns4Status=true
            // part
             // fifth field validation
            if(qns5Ans && qns5Ans.value===""){
               console.log("kina chiroo")
                qns5Err.textContent="*Required"
                redshadow(qns5Ans)
                qns5Status=false
            }
            else {
                qns5Err.textContent=""
                greenshadow(qns5Ans)
                qns5Status=true
                console.log("kina chiroo green")
            }

            // // sixth field validation
            if(qns6Ans.value===""){
                qns6Err.textContent="*Required"
                redshadow(qns6Ans)
                qns6Status=false
                console.log("kina chiroo 2 red")
            }
            else {
            qns6Err.textContent=""
            greenshadow(qns6Ans)
            qns6Status=true
            console.log("kina chiroo 2 green")
            }
            }
            else if(qns4Ans.value==="no"){
                qns4Err.textContent=""
                greenshadow(qns4Ans)
                qns4Status=true
                // fifth field validation
                if(qns5Ans.value===""){
                document.querySelector("#qns5").remove()
                console.log("ramro chiroo")
                // qns5Err.textContent=""
                // redshadow(qns5Ans)
                qns5Status=false
                }
                else {
                console.log("lau chiroo")
                qns5Err.textContent=""
                greenshadow(qns5Ans)
                qns5Status=true
                }
            
                // // sixth field validation
                if(qns6Ans.value===""){
                    console.log("aayema")
                qns6Err.textContent="*Required"
                redshadow(qns6Ans)
                qns6Status=false
                }
                else{
                    console.log("uff")
                    qns6Err.textContent=""
                    greenshadow(qns6Ans)
                    qns6Status=true
                }
            }
            if(qns7Ans.value===""){
                qns7Err.textContent="*Required"
                redshadow(qns7Ans)
                qns7Status=false
            }
            else{
                qns7Err.textContent=""
                greenshadow(qns7Ans)
                qns7Status=true
            }
        if(qns1Status==true && qns2Status==true && qns3Status==true && qns4Status==true && qns5Status==true && qns6Status==true && qns7Status==true){
            overallErr.textContent="sumitted"
            overallErr.style.color="green"
            document.querySelector("#myform1").reset()
            // registerAsExpand.classList.toggle("expand-one")
            setTimeout(function(){ 
            formContainer1.style.display="none"
            window.location.href="./overview.html"
        },1000)
        }
        else{
            overallErr.textContent="*All field required"
        }
            })
gmCloseBtn.addEventListener("click",function(){
document.querySelector("#myform1").reset()
formContainer1.style.display="none"
window.location.href="./userdashboard.html"
})
