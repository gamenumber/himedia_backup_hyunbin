AOS.init();

// TOP버튼
const btnTop = document.querySelector(".btn-top");
const html = document.documentElement;
const htmlPos = html.scrollHeight / 2;

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop >= htmlPos) {
    btnTop.classList.add("active");
  } else {
    btnTop.classList.remove("active");
  }
});
