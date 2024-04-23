let element = document.querySelector('.moreAboutUs');
let video = document.getElementsByClassName('video');
let changeIm = document.getElementById("firstI")
let change2 = document.getElementById("secI")

/*let kierunkiH3 = document.getElementsByClassName("kierunki-h3-main")
kierunkiH3[0].style.transform = `translateY(100px)`;
kierunkiH3[0].style.opacity = `100`;
let prog = document.getElementsByClassName("prog")
prog[0].style.transform = `translateX(-100px)`;
prog[0].style.opacity = `100`;
let robo = document.getElementsByClassName("robo")
robo[0].style.transform = `translateX(100px)`;
robo[0].style.opacity = `0`;
let innoh3 = document.getElementById("innoh3")
innoh3.style.transform = `translateX(40px)`;
innoh3.style.opacity = `0`;
let innoP = document.getElementById("innoP")
innoP.style.transform = `translateX(-40px)`;
innoP.style.opacity = `0`;*/

let tok = document.getElementById("tok")
let tik = document.getElementById("tik")

tok.addEventListener("mouseover", ()=>{
    tik.src = "images/tiktok2.svg"
})
tok.addEventListener("mouseleave", ()=>{
    tik.src = "images/tiktok.svg"
})

button = document.getElementsByClassName("hamburger")
sidebar = document.getElementsByClassName("menu-list")

button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
})



/*window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollHeight = window.innerHeight;
    console.log(scrollTop)
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    if(scrollTop<0.05*scrollHeight){
        kierunkiH3[0].style.transform = `translateY(100px)`;
        kierunkiH3[0].style.opacity = `100`;
        prog[0].style.transform = `translateX(-100px)`;
        prog[0].style.opacity = `100`;
        robo[0].style.transform = `translateX(100px)`;
        robo[0].style.opacity = `0`;
        innoh3.style.transform = `translateX(40px)`;
        innoh3.style.opacity = `0`;
        innoP.style.transform = `translateX(-40px)`;
        innoP.style.opacity = `0`;
    }
    if(scrollTop>scrollHeight+50){
        kierunkiH3[0].style.transform = `translateX(0px)`;
        kierunkiH3[0].style.opacity = `100%`;
        kierunkiH3[0].style.transition = "all .2s linear"
    }
    if(scrollTop>scrollHeight+100){
        prog[0].style.transform = `translateX(0px)`;
        prog[0].style.opacity = `100%`;
        prog[0].style.transition = "all .3s linear"
        robo[0].style.transform = `translateX(0px)`;
        robo[0].style.opacity = `100%`;
        robo[0].style.transition = "all .3s linear"

    }
    if(scrollTop>1.2*scrollHeight){
        innoh3.style.transform = `translateX(0px)`;
        innoh3.style.transition = "all .4s linear"
        innoh3.style.opacity = `100`;
        innoP.style.transform = `translateX(0px)`;
        innoP.style.opacity = `100`;
        innoP.style.transition = "all .5s linear"
    }
})*/

changeIm.addEventListener('click', ()=>{
    changeIm.classList.add("active")
    change2.classList.remove("active")
    video[0].style.backgroundImage= "url('images/robo2.png')"
})
change2.addEventListener('click', ()=>{
    change2.classList.add("active")
    changeIm.classList.remove("active")
    video[0].style.backgroundImage = "url('images/ai2.png')"
    console.log( "url(images/ai.png) center/cover no-repeat;")

})

let zm = 1

setInterval(() => {
    change2.classList.toggle("active")
    changeIm.classList.toggle("active")
    if(zm==1){
        video[0].style.opacity = "0%"
        video[0].style.transition = "all 1s linear"
        video[0].style.backgroundImage = "url('images/ai2.png')"
        video[0].style.opacity = "100%"
        zm=0
    }
    else{
        zm=1
        video[0].style.opacity = "0%"
        video[0].style.transition = "all 1s linear"
        video[0].style.backgroundImage = "url('images/robo2.png')"
        video[0].style.opacity = "100%"
    }

}, 5000);

element.addEventListener('click', ()=>{
    document.getElementById('kierunki').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

let text = "oznaj nas bliżej.";
function typeWriter(text, i) {
    if (i < text.length && animationInProgress) {
        element.innerHTML += text.charAt(i);
        animationTimeout = setTimeout(function() {
            typeWriter(text, i + 1);
        }, 80);
    }
}

element.addEventListener('mouseover', function() {
    element.textContent = "P"
    if (!animationInProgress) {
      animationInProgress = true;
      typeWriter(text, 0);
    }
});
element.addEventListener('click', function() {
    element.textContent = "Po"
    if(!animationInProgress){
        animationInProgress = true;
        typeWriter(text, 0);
    }
});

element.addEventListener('mouseout', function() {
    element.textContent = "Poznaj nas bliżej."
    animationInProgress = false;
    clearTimeout(animationTimeout);
  });