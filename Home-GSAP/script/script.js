window.addEventListener("load", () => {
    const navLinks = document.querySelectorAll(".container-nav a");
    const imgsNav = document.querySelectorAll("nav img");
    const title = document.querySelector(".home-content h1");
    const middleLine = document.querySelector(".middle-line");
    const grape = document.querySelector(".home-content img");
    const btnDiscover = document.querySelector(".home-content button");

    // 순차적인 애니메이션을 위해 타임라인을 구성하자!
    const tl = gsap.timeline();

    tl.from(navLinks, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.3 });
    tl.from(imgsNav, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.3 });
});
