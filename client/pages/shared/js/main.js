
const headerInfoButton = document.getElementById("header-open-info")
const contentInfoButton = document.getElementById("content-open-info")
const info = document.getElementById("popup-info")


headerInfoButton.onclick = function() {
    OpenInfo()
}
contentInfoButton.onclick = function() {
    OpenInfo()
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