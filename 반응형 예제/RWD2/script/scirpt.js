const btnMenu = document.querySelector(".btn-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".btn-close");

btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// 대상.classList.remove('클래스명')
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
