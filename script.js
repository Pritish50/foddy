let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toogle('fa-times');
    navbar.classList.toogle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
          });
        };

    });


}
document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('.container').classList.add('search-from');
}
 document.querySelector('#close').onclick = ()=>{
     document.querySelector('.search-from').classList.remove('search-from');
 }

 var swiper = new swiper (".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
 });

 

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload =  fadeout;

