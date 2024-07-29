let personName = document.getElementById("Name");
let email = document.getElementById("Email");
let msg = document.getElementById("Message");
let submit = document.getElementById("submit-btn");

submit.addEventListener("click", () => {



    if (!personName.value || !email.value || !msg.value){
        alert("Please fill all the fields");
        return;
    }



    let obj = {
        name : personName.value,
        emailId: email.value,
        message: msg.value 
    }
    personName.value = email.value = msg.value = "";
    alert("Form submitted successfully");
    console.log(obj);
})