const body = document.body;
const navbar = document.getElementById("navbar");
function opennavbar() {
    body.style.overflow = "hidden";
    navbar.style.left = "0";
}
function hidenavbar() {
    body.style.overflow = "auto";
    navbar.style.left = "-50%";
}

function dropdown(element) {
    var dropdownContainer = element.parentNode.querySelector(".dropdown");
    dropdownContainer.classList.toggle("hidden");
    dropdownContainer.classList.toggle("shown");
}

hljs.highlightAll();