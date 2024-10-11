// 썸네일 슬라이더를 먼저 정의
const bottomSlider = new Swiper(".bottom-slider", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const topSlider = new Swiper(".top-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: bottomSlider,
    },
});
