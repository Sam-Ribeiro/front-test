

const users = JSON.parse(localStorage.getItem("users")) || []
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const buttonLogin = document.getElementById("btn-login")
const errorLogin = document.getElementById("error-login")

buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    Login()
})

function Login(){
    const user = users.find(u => u.email === emailInput.value) || []
    if(user != null){   
        if(user.password === passwordInput.value){
            localStorage.setItem("user", JSON.stringify(user.email))
            window.location.href = `../dashboard/dashboard.html`
        }
    }
    errorLogin.style.display = 'block'
}