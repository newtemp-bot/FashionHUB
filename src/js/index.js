window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    // If the scroll is greater than 50px, add the 'scrolled' class
    if (window.scrollY > 0) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
