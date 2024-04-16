let button = document.getElementsByClassName("hamburger")
let sidebar = document.getElementsByClassName("menu-list")
let logo_pic = document.getElementById("menu-logo")
let background = document.getElementsByClassName("main-box")
let up = document.getElementsByClassName("up")
let iconMove = document.getElementsByClassName("cursorFun")

addEventListener("mousemove", (e) => {
    mousePos = { x: e.clientX, y: e.clientY };
    iconMove[0].style.left = `${mousePos.x+20}px`
    iconMove[0].style.top = `${mousePos.y+15}px`
});


up[0].addEventListener('click', ()=>{
    button[0].classList.remove("hamburger-active")
    sidebar[0].classList.remove("list-active")
    logo_pic.classList.remove("logo-active")
})
button[0].addEventListener('click', ()=>{
    button[0].classList.toggle("hamburger-active")
    sidebar[0].classList.toggle("list-active")
    logo_pic.classList.toggle("logo-active")
})

document.addEventListener("scroll", (event) => {
    let box = document.getElementsByClassName("first")
    if(window.scrollY > box[0].clientHeight){
        up[0].classList.add("up-active");
        up[0].addEventListener('click',()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
    if(window.scrollY < box[0].clientHeight){
        up[0].classList.remove("up-active");
    }
});

let left = 0, timer = 0, timer2 = 0, currentPosition = 0;

let startTime = null;
const duration = 7000; // 7 sekund w milisekundach

const photos = ["grafika/transport1.png", "grafika/transport2.png", "grafika/transport3.png", "grafika/transport4.png", "grafika/transport5.png"]
let counter = 0


function moveBackground(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    const progress = timestamp - startTime;

    if (progress <= duration) {
        const percentage = (progress / duration) * 100;
        background[0].style.backgroundPosition = percentage + '% 0';
        requestAnimationFrame(moveBackground);
    } else {
        startTime = null; // Zaczynamy od nowa
        if(counter<photos.length-1){
            background[0].style.backgroundImage = `url('${photos[counter+1]}')`; 
            background[0].style.transition = "opacity 0.5s linear;"
            counter++
        }
        else{
            counter = 0
            background[0].style.backgroundImage = `url('${photos[counter]}')`; 
            background[0].style.transition = "opacity 0.5s linear;"
        }
        requestAnimationFrame(moveBackground);
    }
}

let list_item = document.getElementsByClassName("list-item")
let box = document.getElementsByClassName("first")
let sec1 = document.getElementsByClassName("second")
let offer = document.getElementsByClassName("offer")
let form = document.getElementsByClassName("form")
let callN = document.getElementsByClassName("callN")

list_item[0].addEventListener('click',()=>{
    button[0].classList.remove("hamburger-active")
    sidebar[0].classList.remove("list-active")
    logo_pic.classList.remove("logo-active")
})
list_item[1].addEventListener('click',()=>{
    button[0].classList.remove("hamburger-active")
    sidebar[0].classList.remove("list-active")
    logo_pic.classList.remove("logo-active")
})
list_item[2].addEventListener('click',()=>{
    button[0].classList.remove("hamburger-active")
    sidebar[0].classList.remove("list-active")
    logo_pic.classList.remove("logo-active")
})
list_item[3].addEventListener('click',()=>{
    button[0].classList.remove("hamburger-active")
    sidebar[0].classList.remove("list-active")
    logo_pic.classList.remove("logo-active")
})

document.addEventListener("scroll", (event) => {
    if(window.scrollY<box[0].clientHeight){
        for(let i=0;i<list_item.length;i++){
            list_item[i].classList.remove("active-menu")
        }
        list_item[0].classList.add("active-menu")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY>box[0].clientHeight/3){
        let boxy = document.getElementsByClassName("boxyJS")
        let boxi = document.getElementsByClassName("boxI")
        let boxh = document.getElementsByClassName("boxH")
        let boxp = document.getElementsByClassName("boxP")
        boxi[0].classList.add("boxes-show1")
        boxi[1].classList.add("boxes-show2")
        boxi[2].classList.add("boxes-show3")
        boxh[0].classList.add("boxesH-show1")
        boxh[1].classList.add("boxesH-show2")
        boxh[2].classList.add("boxesH-show3")
        boxp[0].classList.add("boxesP-show1")
        boxp[1].classList.add("boxesP-show2")
        boxp[2].classList.add("boxesP-show3")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY>box[0].clientHeight/2){
        let h3offer = document.getElementsByClassName("offerh3")
        h3offer[0].classList.add("h3offer-show")
        let imgBox = document.getElementsByClassName("boxyJS")
        imgBox[0].classList.add("boxes-show1I")
        imgBox[1].classList.add("boxes-show2I")
        imgBox[2].classList.add("boxes-show3I")
        imgBox[3].classList.add("boxes-show4I")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY > box[0].clientHeight+sec1[0].clientHeight){
        for(let i=0;i<list_item.length;i++){
            list_item[i].classList.remove("active-menu")
        }
        list_item[1].classList.add("active-menu")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY > box[0].clientHeight+sec1[0].clientHeight+offer[0].clientHeight/2){
        let wyc = document.getElementsByClassName("wycH")
        wyc[0].classList.add("boxes-show1")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY >box[0].clientHeight+sec1[0].clientHeight+offer[0].clientHeight){
        for(let i=0;i<list_item.length;i++){
            list_item[i].classList.remove("active-menu")
        }
        list_item[2].classList.add("active-menu")
        callN[0].classList.remove("callN-noactive")
    }
    if(window.scrollY >box[0].clientHeight+sec1[0].clientHeight+offer[0].clientHeight+form[0].clientHeight/2){
        for(let i=0;i<list_item.length;i++){
            list_item[i].classList.remove("active-menu")
        }
        list_item[3].classList.add("active-menu")
        callN[0].classList.add("callN-noactive")
    }

});


requestAnimationFrame(moveBackground);

let trasa = document.getElementById("trasa")
let telefon = document.getElementById("kontakt")
let opis = document.getElementById("opis")
let send = document.getElementsByClassName("form_button")

send[0].addEventListener('click', ()=>{
    if(trasa.value=="" || telefon.value=="" || opis.value==""){
        console.log("Wypisz poprawne dane!")
        alert("Sprawdź, czy podane pola są uzupełnione!");
    }
    else{
        console.log("Formularz zostal wysłany!")
        alert("Formularz zostal wysłany poprawnie!");
        var formData = new FormData();
        formData.append("trasa", trasa);
        formData.append("telefon", telefon);
        formData.append("opis", opis);

        fetch("/submit_form", {
            method: "POST",
            body: formData
        });

    }
})