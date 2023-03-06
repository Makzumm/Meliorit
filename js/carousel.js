const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: true,

    navigation: {
        nextEl: '.swiper-button-unique-next',
        prevEl: '.swiper-button-unique-prev',
    },

    slidesPerView: 4,
    spaceBetween: 20,

    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
    },
});

const swiperSecond = new Swiper('.swiper-second', {
    direction: 'horizontal',
    loop: true,
    pagination: true,

    navigation: {
        nextEl: '.swiper-button-specific-next',
        prevEl: '.swiper-button-specific-prev',
    },

    slidesPerView: 3,
    spaceBetween: 20,

    autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
    },
});