

/*===============================SEARCH==========================*/
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content');

/*=======MENU SHOW ==========================*/
if(searchButton){
    searchButton.addEventListener('click', ()=>{
        searchContent.classList.add('show-search')
    })
}    


/*=======MENU HIDDEN =========*/
/*Validate if constant exists */
if(searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}


/*===============================LOGIN==========================*/
const loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content');

/*=======MENU SHOW ==========================*/
if(loginButton){
    loginButton.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}    

/*=======LOGIN HIDDEN =========*/
/*Validate if constant exists */
if(loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}

/*================ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the 
    this.scrollY >= 20 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=====================Home SWIPER ======================*/

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:true,

    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween:-32,
        }

    }
});

/*==================== FEATURED SWIPER=====================*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides:true,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
           slidesPerView: 4,
           centeredSlides: false,
        }

    }
});