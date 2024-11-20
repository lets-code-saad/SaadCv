let navToggler = document.querySelector('.hamburgerMenu')
let navItems = document.querySelector(".responsiveNav")
navToggler.addEventListener("click", ()=>{
    if(navItems.style.display === 'block'){
        navItems.style.display = "none";
    }
    else {
        (navItems.style.display = 'block')
    }
})