// toggle button aside of 'personal information'
   // Your code here
   let expandBtn=document.querySelector(".expand-btn")
   let expandedContainer=document.querySelector(".expanded-container")
   console.log(expandedContainer)
expandBtn.addEventListener("click", function(){
   expandedContainer.classList.toggle("expand")
   let a=5;
   let b=6;
   console.log(a+b)
})


// // js for profile picture
let inputFile=document.querySelector("#input-file")
let defaultPic=document.querySelector("#default-pic")
// inputFile.addEventListener("onchange", function(){
//     defaultPic.src=URL.createObjectURL(inputFile.files[0])
// })
inputFile.addEventListener("change", function(event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const fileSizeMB = file.size / (1024 * 1024); // Calculate file size in MB
    if (fileSizeMB > 2) {
    alert("Please select an image file with size less than 2MB.");
    inputFile.value = ''; // Clear the input value
    }
    else {
      const reader = new FileReader();            // Create a FileReader object
      reader.onload = function(e) {               // Set a callback function to run when the file is read
        defaultPic.src = e.target.result;         // Update the src attribute of the defaultPic image
      }
      reader.readAsDataURL(file);                 // Read the selected file as a Data URL
    }
}
  })

  // js for register-as
let registerAsExpandButton=document.querySelector(".registeras-expand-btn")
let registerAsExpand=document.querySelector(".register-as-expand")
registerAsExpandButton.addEventListener("click", function(){
   registerAsExpand.classList.toggle("expand-one")
})

// fetching part


// js for form container 1
let formContainer1=document.querySelector(".form-container1")
console.log(formContainer1)
let generalMemberApplyBtn=document.querySelector("#general-member-apply-btn")
formContainer1.style.display="none"
generalMemberApplyBtn.addEventListener("click",function(){
  registerAsExpand.classList.toggle("expand-one")
  formContainer1.style.display="block"
})

// js for form container 2: leading member
let formContainer2=document.querySelector(".form-container2")
let leadingMemberApplyBtn=document.querySelector("#leading-member-apply-btn")
formContainer2.style.display="none"
leadingMemberApplyBtn.addEventListener("click",function(){
  registerAsExpand.classList.toggle("expand-one")
  formContainer2.style.display="block"
})

// js for form container 3: executive member
let formContainer3=document.querySelector(".form-container3")
let executiveApplyBtn=document.querySelector("#executive-apply-btn")
formContainer3.style.display="none"
executiveApplyBtn.addEventListener("click",function(){
  registerAsExpand.classList.toggle("expand-one")
  formContainer3.style.display="block"
})

