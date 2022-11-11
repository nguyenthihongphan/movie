// header shadow
let header = document.querySelector('header');
let menu =  document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

} //
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeradSlides: true,
    autoplay:{
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
 
});
//swiper coming
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay: 55000,
        disableOnInteraction: false,
    },
    centeradSlides: true,
    breakpoints:{
        0:{
            slidesPerView: 2,
        },
        568:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        },
        968:{
            slidesPerView: 5,
        },
    }
});