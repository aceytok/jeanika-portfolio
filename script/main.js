const menuBtn = document.getElementById("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

menuBtn.addEventListener("click", () => {
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
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