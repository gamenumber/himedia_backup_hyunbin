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
    tl.from(imgsNav, { autoAlpha: 0, y: -50, duration: 1, stagger: 0.3 }, "<");
    tl.from(title, { autoAlpha: 0, y: -50, duration: 0.5 });
    tl.to(middleLine, { duration: 0.5, height: 200 });
    tl.from(grape, { autoAlpha: 0, y: -50, duration: 0.8, ease: "bounce.out" });
    tl.from(btnDiscover, { autoAlpha: 0, y: -50, duration: 0.5 }, "+=1");
    tl.to(grape, { duration: 1, rotation: 360, repeat: -1, repeatDelay: 2 });
});
