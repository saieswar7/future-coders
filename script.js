const menu = document.getElementById("menu")

menu.addEventListener('click',navToggle)

const menuitems = document.getElementById("menu-items")
function navToggle(){
    menu.classList.toggle("open")
    menuitems.classList.toggle("hidden")
    menuitems.classList.toggle("flex")


}