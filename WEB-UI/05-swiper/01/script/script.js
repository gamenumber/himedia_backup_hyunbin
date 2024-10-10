const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal", // vertical
    loop: true,
    autoplay: true,
    speed: 1000, // 기본값 300
    effect: "cube", // slide, fade, cube, flip, coverflow

    // 캐러셀 만들기
    slidesPerView: 1, // 보여질 슬라이드 갯수
    spaceBetween: 20, // 간격 20px
    centeredSlides: true, // 첫번째 슬라이드를 가운데로

    // RWD setting
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
