const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal", // vertical
    loop: true, //false
    autoplay: true,
    speed: 1000, // 기본값은 300
    effect: "slide", // slide, fade, cube, coverflow

    // 캐러셀 만들기
    slidesPerView: 1, // 보여질 슬라이드 갯수
    spaceBetween: 20, // 간격 20px
    centeradSlides: true, // 첫번째 슬라이드를 가운데로

    // 반응형(RWD) setting : min-width, 모바일부터 PC까지 실행한다.
    breakpoints: {
        768: {
            slidesPerView: 3, // 보여질 슬라이드 갯수
            spaceBetween: 30, // 간격 30px
        },
        1200: {
            slidesPerView: "auto", // 보여질 슬라이드 갯수
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
