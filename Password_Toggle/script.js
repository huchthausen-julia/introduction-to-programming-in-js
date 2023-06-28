
const toggleButton = document.querySelector("#toggle-btn");
const password = document.querySelector("#password");

toggleButton.addEventListener("click", function(){
    if (password.type === "password") {
        password.type = "text";
        toggleButton.innerText = "Hide Password";
    } else {
        password.type = "password";
        toggleButton.innerText = "Show Password";
    }
});