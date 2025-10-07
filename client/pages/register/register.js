

const users = JSON.parse(localStorage.getItem("users")) || []
const registerButton = document.getElementById("btn-register")
const nameInput = document.getElementById("first-name")
const nameError = document.getElementById("first-name-error")
const lastNameInput = document.getElementById("last-name")
const lastNameError = document.getElementById("last-name-error")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
const ageInput = document.getElementById("age")
const ageError = document.getElementById("age-error")
const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("password-error")
const passwordConfirmInput = document.getElementById("password-confirm")
const passwordConfirmError = document.getElementById("password-confirm-error")


registerButton.onclick = function(e){
    e.preventDefault();
    if(ValidateData()){
        RegisterUser()
    }
}

function ValidateData(){
    let ok = true

    if(nameInput.value.length < 3){
        nameError.style.display = 'block'
        ok = false
    }
    if(lastNameInput.value.length < 3){
        lastNameError.style.display = 'block'
        ok = false
    }
    if(emailInput.value.length < 5 || users.some(u => u.email === emailInput.value) ){
        emailError.style.display = 'block'
        ok = false
    }
    if(ageInput.value > 120 || ageInput.value <1){
        ageError.style.display = 'block'
        ok = false
    }
    if(passwordInput.value.length < 5){
        passwordError.style.display = 'block'
        ok = false
    }
    if(passwordConfirmInput.value != passwordInput.value){
        passwordConfirmError.style.display = 'block'
        ok = false
    }
    return ok
}

function RegisterUser(){
    
    const newUser = {
        name: nameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        age: ageInput.value,
        password: passwordInput.value,
        passwordConfirm: passwordConfirmInput.value
    }
    users.push(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    localStorage.setItem("users", JSON.stringify(users))
    window.location.href = `../login/login.html`
}   