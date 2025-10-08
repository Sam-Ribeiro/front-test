
const headerInfoButton = document.getElementById("header-open-info")
const contentInfoButton = document.getElementById("content-open-info") || []
const contentAdminButton = document.getElementById("content-admin-button") || []
const info = document.getElementById("popup-info")
const headerLogout = document.getElementById("header-logout")
const navLogout = document.getElementById("nav-logout")

headerInfoButton.onclick = function(event) {
    event.preventDefault()
    OpenInfo()
}

contentInfoButton.onclick = function(event) {
    event.preventDefault()
    OpenInfo()
}

contentAdminButton.onclick = function(event) {
    event.preventDefault()
    window.location.href = `../admin/admin.html`
}

headerLogout.onclick = function(event) {
    event.preventDefault()
    Logout()
}

navLogout.onclick = function(event) {
    event.preventDefault()
    Logout()
}

info.addEventListener('blur', () => {
    CloseInfo()
});


function OpenInfo(){
    info.style.visibility = 'visible'
    info.focus()
}

function CloseInfo(){
    info.style.visibility = 'hidden'
}

function Logout(){
    localStorage.removeItem("user")
    window.location.href = `../login/login.html`
}

function VerifyPermission(){
    const user = JSON.parse(localStorage.getItem("user"))   
    if(user == null){
        window.location.href = `../login/login.html`
    }
}

VerifyPermission()