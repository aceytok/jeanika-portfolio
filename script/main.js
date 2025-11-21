const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const heroImg = document.querySelector(".hero-img")

menuBtn.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
    heroImg.classList.toggle("active");
});

const menuLinks = menuOverlay.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    // Only start hiding when user scrolls more than 100px
    if (currentY > 100 && currentY > lastScrollY) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollY = currentY;
});