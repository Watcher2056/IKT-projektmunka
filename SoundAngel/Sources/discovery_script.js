let slideIndex = 1;

function showSlides(n) {
    const slidesContainer = document.querySelector('.SlideContainer');
    const dots = document.getElementsByClassName('dot');
    const totalSlides = dots.length;

    if (n > totalSlides) slideIndex = 1;
    if (n < 1) slideIndex = totalSlides;

    slidesContainer.style.transform = `translateX(-${(slideIndex - 1) * 1000}px)`;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function plusSlides(n) {
    currentSlide(slideIndex + n);
}

window.onload = () => {
    showSlides(slideIndex);

    setInterval(() => {
        plusSlides(1);
    }, 5000);
};