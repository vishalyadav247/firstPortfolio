console.log("welcome to javascript");

// navbar animation on scroll
let link=document.querySelectorAll('.navbar_links a')[0]
let link2=document.querySelectorAll('.navbar_links a')[1]
let link3=document.querySelectorAll('.navbar_links a')[2]

let navbar = document.getElementById('header')
let verticalNav=document.getElementById('verticalNav')
window.addEventListener('scroll', function (event) {
    event.preventDefault()
    if (this.innerWidth > 912) {
        if (window.scrollY <= 570) {
            navbar.style.backgroundColor = 'transparent';
            link.style.color='white'
            link2.style.color='white'
            link3.style.color='white'


        } else {
            navbar.style.backgroundColor = 'white';
            link.style.color='black'
            link2.style.color='black'
            link3.style.color='black'
        }
    } 
    else {
        navbar.style.backgroundColor = 'transparent';
    }

    if (window.scrollY >= 570) {
        verticalNav.style.left='10px';
    } else {
        verticalNav.style.left='-80px';
    }
})

// type effect
let typed = new Typed(".animated_text", {
    strings: ["I'm a Web Developer", "I Love to Design UI"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
})

// Menu show hide button
let menuSideBar = document.getElementById("bar");
let menuSideBar2 = document.getElementById("bar2");
let menuLinks = document.getElementById("nav");

menuSideBar.addEventListener("click", show)

menuSideBar2.addEventListener('click', (e) => {
    if (e.target) { hide() }
})
menuLinks.addEventListener('click', (e) => {
    if (e.target) { hide() }
})

function show() {
    menuLinks.style.top= "-2px"
    menuSideBar2.style.display = 'block'
}

function hide() {
    menuLinks.style.top = "-430px"
    menuSideBar2.style.display = 'none'
}

// contact form validation

let user = document.getElementById('name')
let phone = document.getElementById('phone')
let emailVar = document.querySelectorAll('.ema')[0];


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

emailVar.addEventListener('blur', function ab() {
    let regExp = /^([a-zA-z0-9\._]+)@(([a-z]+)){5}\.([a-z]){3}$/;
    let str = emailVar.value;
    let result3 = regExp.test(str)
    if (result3 != true) {
        console.log('enter correct email');
        document.querySelectorAll('.ema')[0].style.border = '1px solid tomato'
        validEmail = result3
    }
    else {
        document.querySelectorAll('.ema')[0].style.border = '1px solid silver'
        validEmail = result3
    }
})



let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    if (validName === true && validPhone === true && validEmail === true) {
        console.log(user.value, phone.value, emailVar.value);
        e.preventDefault()
        let form = document.getElementById('contactForm');
        form.reset();
        document.getElementById('name').style.border = '1px solid silver'
        document.getElementById('phone').style.border = '1px solid silver'
        document.getElementById('email').style.border = '1px solid silver'
    }
    else {
        e.preventDefault()
        submit.innerText = "Enter Valid Information"
        console.log('error in sumbit the form');
    }
})


window.addEventListener("scroll",scrlFun);
function scrlFun(){
    let docHeight=$(document).height()
    let scrlHeight=(scrollY/docHeight)*120
    let scrl=document.querySelectorAll('.scrl-bar')[0];
    scrl.style.width=`${scrlHeight}%`
}
function iframeWidth(xx) {
    if (xx.matches) { // If media query matches
      let ifrm=document.getElementById('location-frame')
      console.log(ifrm);
      ifrm.setAttribute("width","100%")
      console.log('mob');
    } else {
      let ifrm=document.getElementById('location-frame')
      ifrm.setAttribute("width","400px")
      console.log('desk');

    }
  }
  
  let xx = window.matchMedia("(max-width: 820px)")
  iframeWidth(xx);