const scrollDownButton = document.getElementById("scrollDownButton");

scrollDownButton.style.display = "block";

scrollDownButton.addEventListener("click", function () {
    document.querySelector(".obj3").scrollIntoView({
        behavior: "smooth",
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
    const fireflyContainer =
        document.querySelector(".firefly-container");

    for (let i = 0; i < 50; i++) {
        const firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.top = Math.random() * 100 + "vh";
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.animationDuration =
            Math.random() * 10 + 5 + "s";
        fireflyContainer.appendChild(firefly);
    }
});