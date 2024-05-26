const swiper = new Swiper('.popular-swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
        nextEl: '.swiper-arrows__next',
        prevEl: '.swiper-arrows__prev',
    },
});