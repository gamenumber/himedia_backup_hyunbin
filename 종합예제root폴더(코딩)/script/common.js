const btnTop = document.querySelector(".btn-top");
const html = document.documentElement;
const htmlPos = html.scrollHeight / 2;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY; // Corrected from window.screenY

    if (scrollTop >= htmlPos) {
        btnTop.classList.add("active");
    } else {
        btnTop.classList.remove("active");
    }
});
