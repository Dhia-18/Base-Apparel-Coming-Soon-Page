const inputText = document.querySelector("input");
const submitBtn = document.querySelector("button");
const errorMessage = document.querySelector("#error-message");
const errorIcon = document.querySelector(".error-icon");

function verifyEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email.value)
    return emailRegex.test(email.value);
}

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(inputText.value===""){
        errorMessage.textContent="Please provide an email";
        inputText.style.borderColor="var(--soft-red)";
        inputText.style.borderWidth="2px";
        errorIcon.classList.remove("hidden");
    }
    else if(!verifyEmail(inputText)){
        errorMessage.textContent="Please provide a valid email";
        inputText.style.borderColor="var(--soft-red)";
        inputText.style.borderWidth="2px";
        errorIcon.classList.remove("hidden");
    }
    else{
        alert("Congratulation!");
    }
})