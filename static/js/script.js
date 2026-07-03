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

if (dateInput) {
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

const servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
