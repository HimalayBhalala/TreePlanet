const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const humbeger = document.getElementById("humbeger")

humbeger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    humbeger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        humbeger.classList.toggle("ri-close-large-line")
    })
})