


const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const buttonLogin = document.getElementById("btn-login")


buttonLogin.addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = `../dashboard/dashboard.html`
})