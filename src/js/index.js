window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    // If the scroll is greater than 50px, add the 'scrolled' class
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
const text = "FashionHUB"; // Text to type
const typingElement = document.getElementById("typing-effect");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Adjust speed of typing here
    }
}

window.onload = function () {
    typeText(); // Start typing effect on page load
};



