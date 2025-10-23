const menuBtn = document.getElementById("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

menuBtn.addEventListener("click", () => {
    menuOverlay.classList.toggle("open");
});