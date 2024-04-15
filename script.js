let button = document.getElementsByClassName("hamburger")
let sidebar = document.getElementsByClassName("menu-list")
let logo_pic = document.getElementById("menu-logo")
let element = document.querySelector('.moreAboutUs');
let span = document.querySelector('.robotyczne');
let scrollDown = document.querySelector(".icon-angle-double-down")
let ab = document.querySelector(".ab")
let bef = document.getElementsByClassName("bef")
const anim = document.getElementsByClassName("anim")
let desc = document.getElementsByClassName("desc")
let mainBox = document.getElementsByClassName("main-box")

button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
    logo_pic.classList.toggle("logo-active")
})



for(let i=0;i<400;i++){
  const kropka = document.createElement('span');
  kropka.classList.add('kropka');
  if (i % 2 === 0) {
    bef[0].appendChild(kropka);
  }
  else{
    bef[1].appendChild(kropka);
  }
  
}

const kropki = document.querySelectorAll('.kropka');

kropki.forEach(kropka => {
  const pozycjaTop = Math.random() * bef[0].clientHeight;
  const pozycjaLeft = Math.random() * bef[0].clientWidth;
  const przesunieciePoziome = Math.random() * 20 - 10;
  const przesunieciePionowe = Math.random() * 20 - 10; 
  kropka.style.transition = "transform 2s linear";
  kropka.style.transform = `translate(${przesunieciePoziome}px, ${przesunieciePionowe}px)`;
  kropka.style.top = pozycjaTop + 'px';
  kropka.style.left = pozycjaLeft + 'px';
  kropka.addEventListener('transitionend', () => {
  kropka.style.transform = `translate(0px, 0px)`;
  setTimeout(() => {
        const przesunieciePoziome = Math.random() * 20 - 10;
        const przesunieciePionowe = Math.random() * 20 - 10;
        kropka.style.transform = `translate(${przesunieciePoziome}px, ${przesunieciePionowe}px)`;
    }, 100);
});
});

element.addEventListener('click', ()=>{
  document.getElementById('ab').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

const movingDiv = document.getElementById('ab');
let under = document.querySelector(".under")

function calculateTranslateX(scrollPercent) {
  // Domyślna pozycja X (na początku przewijania strony)
  let translateX = 0;
  translateX = 0 + (scrollPercent * 6); // Zmniejszamy przesunięcie w stosunku do procentu przewinięcia strony

  return translateX;
}

function calculateTranslateXForSpan(scrollPercent) {
  // Domyślna pozycja X dla span (na początku przewijania strony)
  let translateX = 0;

  // Jeśli przewinięcie strony przekracza 50%, ustawić pozycję X dla span na -100px (na lewo)
  if (scrollPercent >= 50) {
    translateX = -100;
  } else {
    // Oblicz pozycję X dla span na podstawie procentowego przewinięcia strony
    translateX = -100 * ((50 - scrollPercent) / 50); // Zmniejszamy przesunięcie w stosunku do procentu przewinięcia strony
  }

  return translateX;
}

// Nasłuchuj zdarzenie przewijania strony
window.addEventListener('scroll', () => {
  // Pobierz aktualną pozycję przewijania strony w dół
  const scrollTop = window.scrollY || window.pageYOffset;

  // Oblicz procent przewinięcia strony w dół
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Oblicz pozycję docelową na osi X
  const translateX = calculateTranslateX(scrollPercent);
  const translateX2 = calculateTranslateX(scrollPercent)*(-1);
  ab.style.opacity = `${translateX}%`

  // Ustaw styl transformacji dla elementu DIV
  movingDiv.style.transform = `translateX(${translateX}px)`;
  let x = translateX*2
  under.style.transform = `translateX(-${x}px)`;

});

/*document.addEventListener("scroll",()=>{
  i=window.scrollY/window.clientWidth;
  let under = document.querySelector(".under")
  ab.style.transform = `translateX(${i}%)`;
  let x = i*2
  under.style.transform = `translateX(-${x}px)`;
  if(i/10<80)
    ab.style.opacity = `${i*5}%`
  ab.style.setProperty('--procent', `${i}%`);
  const scrollTop = window.scrollY;
setTimeout(()=>{
  anim[0].style.transform = `translateY(${scrollTop * 0.5}px)`;
},100)
setTimeout(()=>{
  anim[1].style.transform = `translateY(${scrollTop * 0.5}px)`;
},300)
})

/*if(window.innerWidth>700){
  document.addEventListener("scroll",()=>{
    i=window.scrollY*0.75;
    let under = document.querySelector(".under")
    ab.style.transform = `translateX(${i}px)`;
    let x = i*2
    under.style.transform = `translateX(-${x}px)`;
    if(i/10<80)
      ab.style.opacity = `${i*5}%`
    ab.style.setProperty('--procent', `${i}%`);
    const scrollTop = window.scrollY;
  setTimeout(()=>{
    anim[0].style.transform = `translateY(${scrollTop * 0.5}px)`;
  },100)
  setTimeout(()=>{
    anim[1].style.transform = `translateY(${scrollTop * 0.5}px)`;
  },300)
  })
}else{
  document.addEventListener("scroll",()=>{
    i=window.scrollY*0.08;
    let under = document.querySelector(".under")
    ab.style.transform = `translateX(${i}px)`;
    let x = i*2
    under.style.transform = `translateX(-${x}px)`;
    if(i/10<80)
      ab.style.opacity = `${i*5}%`
    ab.style.setProperty('--procent', `${i}%`);
    const scrollTop = window.scrollY;
  setTimeout(()=>{
    if(scrollTop * 0.35<bef[0].clientHeight-anim[0].clientHeight){
      anim[0].style.transform = `translateY(${scrollTop * 0.35}px)`;}
  },100)
  setTimeout(()=>{
    if(scrollTop * 0.35<bef[0].clientHeight-anim[1].clientHeight){
      anim[1].style.transform = `translateY(${scrollTop * 0.35}px)`;}
  },300)
  })
}*/

desc[0].addEventListener("click", ()=>{
  let desc = document.getElementsByClassName("desc")
  let inf = document.getElementsByClassName("inf")
  let przed = document.getElementsByClassName("przed")

  console.log("kliknieto")
  desc[0].classList.toggle("descVis")
  inf[0].classList.toggle("infVis")
  przed[0].classList.toggle("przedVis")
})

desc[1].addEventListener("click", ()=>{
  let desc = document.getElementsByClassName("desc")
  let inf = document.getElementsByClassName("inf")
  let przed = document.getElementsByClassName("przed")

  desc[1].classList.toggle("descVis")
  inf[1].classList.toggle("infVis")
  przed[1].classList.toggle("pzedVis")
})


let text = "oznaj nas lepiej.";
let text2 = `PROGRAMISTYCZNO-ROBOTYCZNE`
let animationInProgress = false;
let animationTimeout;
let animationInProgress2 = false;
let animationTimeout2;


function typeWriter(text, i) {
    if (i < text.length && animationInProgress) {
        element.innerHTML += text.charAt(i);
        animationTimeout = setTimeout(function() {
            typeWriter(text, i + 1);
        }, 40);
      }
}

function typeWriter2(text2, i) {
  if (i < text2.length && animationInProgress2) {
    if(i==15){
      span.innerHTML+=`<span id="block">-</span>`
    }
    else{
      span.innerHTML += text2.charAt(i);
    }
    if(i==15 && window.innerWidth<600){
      span.innerHTML+=`<br>`
      //element.style.transform = "translateY(-50px)"
    }
      animationTimeout2 = setTimeout(function() {
          typeWriter2(text2, i + 1);  
      }, 60);
    }
    else{
      animationTimeout2 = setTimeout(function(){
        span.innerHTML = ""
        typeWriter2(text2,0)
      }, 1500)
    }
}

setInterval(()=>{
  if (!animationInProgress2) {
    span.textContent = ""
    animationInProgress2 = true;
    typeWriter2(text2, 0);
  }
},4)


    element.addEventListener('mouseover', function() {
      element.textContent = "P"
      if (!animationInProgress) {
        animationInProgress = true;
        typeWriter(text, 0);
      }
    });
    element.addEventListener('click', function() {
        element.textContent = "Po"
        if (!animationInProgress) {
          animationInProgress = true;
          typeWriter(text, 0);
        }
      });

    element.addEventListener('mouseout', function() {
      element.textContent = "Poznaj nas lepiej."
      animationInProgress = false;
      clearTimeout(animationTimeout);
    });