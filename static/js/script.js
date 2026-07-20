const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// Sunday booking validation
const dateInput = document.getElementById("date");
const dateError = document.getElementById("date-error");

if (dateInput && dateError) {
    dateInput.addEventListener("change", function () {
        const selectedDate = new Date(this.value);

        if (selectedDate.getDay() === 0) {
            dateError.style.display = "block";
            this.value = "";
        } else {
            dateError.style.display = "none";
        }
    });
}


// Services carousel
const servicesSwiperElement = document.querySelector(".services-swiper");

if (servicesSwiperElement) {
    new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        watchOverflow: true,

        pagination: {
            el: ".services-swiper .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".services-swiper .swiper-button-next",
            prevEl: ".services-swiper .swiper-button-prev",
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 28,
            },
        },
    });
}