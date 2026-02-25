const toggleBtn = document.querySelector(".toggle-btn");
const navbar = document.querySelector(".navbar");

toggleBtn.onclick = function () {
    navbar.classList.toggle("active");
};