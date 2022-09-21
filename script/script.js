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

menuSideBar.addEventListener("click", show)
menuLinks.addEventListener('click', (e) => {
    if (e.target) { hide() }
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
    menuLinks.style.backgroundColor = 'rgb(51, 47, 36)';
    links.forEach(element => {
        let a = element.querySelector('a')
        a.style.display = 'block';
        a.style.color = 'white'
    });
}

function hide() {
    menuLinks.style.top = "-300px"
}

// contact form validation

let user = document.getElementById('name')
let phone = document.getElementById('phone')
let email = document.getElementById('email')


let validName = false;
let validPhone = false;
let validEmail = false;

user.addEventListener('blur', function ab() {
    let regExp = /^([a-zA-z ]){3,15}$/;
    let str = user.value;
    let result1 = regExp.test(str)
    if (result1 != true) {
        console.log("enter correct name");
        document.getElementById('name').style.border = '1px solid tomato'
        validName = result1

    }
    else {
        validName = result1
        document.getElementById('name').style.border = '1px solid silver'
    }

})

phone.addEventListener('blur', function ab() {
    let regExp = /^([789]){1}([0-9]){9}$/;
    let str = phone.value;
    let result2 = regExp.test(str)
    if (result2 != true) {
        console.log("enter correct number");
        document.getElementById('phone').style.border = '1px solid tomato'
        validPhone = result2
    }
    else {
        document.getElementById('phone').style.border = '1px solid silver'
        validPhone = result2;
    }

})

email.addEventListener('blur', function ab() {
    let regExp = /^([a-zA-z0-9\._]+)@(([a-z]+)){5}\.([a-z]){3}$/;
    let str = email.value;
    let result3 = regExp.test(str)
    if (result3 != true) {
        console.log('enter correct email');
        document.getElementById('email').style.border = '1px solid tomato'
        validEmail = result3
    }
    else {
        document.getElementById('email').style.border = '1px solid silver'
        validEmail = result3
    }
})



let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    if (validName === true && validPhone === true && validEmail === true) {
        console.log(user.value, phone.value, email.value);
        e.preventDefault()
        let form = document.getElementById('contactForm');
        form.reset();
        document.getElementById('name').style.border = '1px solid silver'
        document.getElementById('phone').style.border = '1px solid silver'
        document.getElementById('email').style.border = '1px solid silver'
    }
    else {
        e.preventDefault()
        submit.innerText="Enter Valid Information"
        console.log('error in sumbit the form');
    }
})


if(scrollY => 2427 ){
    let fix=document.querySelector('.project-upper')
    fix.style.position='sticky';
    fix.style.top='0'
}
