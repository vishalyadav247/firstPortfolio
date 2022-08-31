console.log("welcome to javascript");

// navbar animation on scroll
let navbar = document.querySelector('.nav_mid')
window.addEventListener('scroll', function (event) {
    event.preventDefault()
    if (window.scrollY <= 570) {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = '0'

    } else {
        navbar.style.backgroundColor = 'silver';
    }
})

// type effect
let typed = new Typed(".animated_text", {
    strings: ["I'm a Web Developer", "I Love to Design UI"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})

// Menu show hide button
let menuSideBar = document.getElementById("bar");
let menuLinks = document.getElementById("allLinks");
let links = document.querySelectorAll('.navbar_links');

menuSideBar.addEventListener("click",show)
menuLinks.addEventListener('click',(e) => {
    if (e.target) {hide()}
})

function show() {
    menuLinks.style.transition = '1s'
    menuLinks.style.position = 'absolute'
    menuLinks.style.top = '0px'
    menuLinks.style.zIndex = '1'
    menuLinks.style.right = '0px'
    menuLinks.style.width = '100%'
    menuLinks.style.display = "flex";
    menuLinks.style.flexDirection = 'column'
    menuLinks.style.alignItems = 'center'
    menuLinks.style.padding = '20px 0px'
    menuLinks.style.backgroundColor = 'dodgerBlue';
    links.forEach(element => {
        let a = element.querySelector('a')
        a.style.display = 'block';
        a.style.color = 'white'
    });
}

function hide() {
    menuLinks.style.right = "-102%"
}