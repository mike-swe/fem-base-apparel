let baseValidation = () => {
    let userCredentials = document.getElementById("email");
    let response = document.querySelector("input");
    let errorState = document.querySelector("#error-icon");
    let errorMessage = document.querySelector("form > p");

    if(userCredentials.value.trim() ==="") {
        response.style.border = "1.5px solid hsl(0, 6%, 24%)";
        errorState.style.opacity = "1";
        errorMessage.style.opacity = "1";

        response.addEventListener("click", e => {
            response.style.border = "1.5px solid hsl(0, 36%, 70%)";
            errorState.style.opacity = "0";
        });
        return false    
    } else {
        true
        alert("Registered Successfully");
    }
}