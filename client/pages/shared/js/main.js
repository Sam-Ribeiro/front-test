
const headerInfoButton = document.getElementById("header-open-info")
const contentInfoButton = document.getElementById("content-open-info") || []
const contentAdminButton = document.getElementById("content-admin-button") || []
const info = document.getElementById("popup-info")


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