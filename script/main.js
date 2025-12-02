// Elements
const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const menuBg = document.querySelector(".menu-bg");
const closeMenuBtn = document.querySelector(".close-menu");
const heroImg = document.querySelector(".hero-img");
const contactBtn = document.querySelector('a[href="#contact"]');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const form = document.querySelector("#contact-modal form");
const header = document.querySelector("header");


// MENU FUNCTIONS
function openMenu() {
    menuOverlay.classList.add("active");
    menuBg.classList.add("active");
    heroImg.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeMenu() {
    menuOverlay.classList.remove("active");
    menuBg.classList.remove("active");
    heroImg.classList.remove("active");
    document.body.classList.remove("no-scroll");
}


// MODAL FUNCTIONS
function openModal() {
    modal.classList.add("show");
    document.body.classList.add("no-scroll");
    closeMenu();
}

function closeModal() {
    modal.classList.remove("show");
    document.body.classList.remove("no-scroll");
}


// Event Listeners
menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
menuBg.addEventListener("click", closeMenu);

contactBtn.addEventListener("click", e => {
    e.preventDefault();
    openModal();
});

closeModalBtn.addEventListener("click", closeModal);


// Close modal if clicking outside
window.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

// Close modal on ESC key
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
});


// Handle form submit
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    });

    if (res.ok) {
        form.innerHTML = `<p class="success">Thanks! Your message was sent.</p>`;
        setTimeout(closeModal, 1500);
    }
});


// Hide header on scroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentY = window.scrollY;

    if (currentY > 100 && currentY > lastScrollY) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollY = currentY;
});

