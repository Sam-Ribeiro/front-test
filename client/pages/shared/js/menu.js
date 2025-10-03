
const menuButton = document.getElementById("menu-btn")
const nav = document.querySelector("nav")

menuButton.onclick = function(){
    if(nav.classList.contains("hidden")){
        nav.classList.remove("hidden")
    }else{
        nav.classList.add("hidden")
    }
}