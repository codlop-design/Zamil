(function () {
    const body = document.body;
    const header = document.querySelector('.section_up');

    window.addEventListener('scroll', throttle);

    function throttle() {
        // نستخدم requestAnimationFrame لتقليل الارتجاجات أثناء scroll
        if (!window._ticking) {
            window._ticking = true;
            window.requestAnimationFrame(() => {
                const sc = window.scrollY || window.pageYOffset;
                if (document.body.scrollHeight > window.innerHeight) {
                    if (sc >= 150) {
                        if (!body.classList.contains('fixed_header')) {
                            body.classList.add('fixed_header');

                            // نضمن إزالة is-visible ثم إضافته في الإطار التالي ليبدأ الانتقال
                            header.classList.remove('is-visible');
                            requestAnimationFrame(() => header.classList.add('is-visible'));
                        }
                    } else {
                        body.classList.remove('fixed_header');
                        header.classList.remove('is-visible');
                    }
                }
                window._ticking = false;
            });
        }
    }
})();



//    scroll_to_top
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
    } else {
        $("#back-top").removeClass("show");
    }
});

$(document).on('click', '#back-top', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

// loader
$(window).on('load', function () {
    $(window).scrollTop(0);
    $('.logo-loader').fadeOut(500, function () {
        $('.half.left').css('transform', 'translateX(-100%)');
        $('.half.right').css('transform', 'translateX(100%)');
        $('.loader').fadeOut(500);
    });
});


// button_menue
$(document).ready(function () {
    $(".btn_menu").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").addClass("show_menu");

    });
});

//X_menu_Action

$(document).ready(function () {
    $(".btn_close").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").removeClass("show_menu");

    });
});


// when click on background div of menue remove the show_menu
$(document).ready(function () {
    $(".menu-backdrop").click(function (e) {
        e.preventDefault()
        $(".header__menu--navigation").removeClass("show_menu");

    });
});

// Business_Division_dropdowen
document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.querySelector(".Business_Division_click");
    const dropdown = document.querySelector(".Business_Division_dropdowen");

    trigger.addEventListener("click", function (e) {
        e.preventDefault(); // علشان مايروحش للينك
        dropdown.classList.toggle("active");
    });
});

// Business_unites
var swiper = new Swiper(".Business_unites", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Certification_swiper
var swiper = new Swiper(".Certification_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// our_partner_swiper
var swiper = new Swiper(".our_partner_swiper", {
    slidesPerView: 6,
    slidesPerGroup: 6,
    grid: {
        rows: 4,
        fill: "row",
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
});


// our_partner_swiper
var swiper = new Swiper(".Major_Clients", {
    slidesPerView: 9,
    slidesPerGroup: 9,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },
    loop: false,
});


document.querySelectorAll(".btn_toggle").forEach((btn) => {
    const dropdown = btn.querySelector(".mobile_dropdowen");
    btn.addEventListener("click", () => {
        if (dropdown.classList.contains("active")) {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            requestAnimationFrame(() => dropdown.style.maxHeight = "0");
            dropdown.classList.remove("active");
        } else {
            dropdown.classList.add("active");
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
            dropdown.addEventListener("transitionend", function handler() {
                if (dropdown.classList.contains("active")) {
                    dropdown.style.maxHeight = "none"; 
                }
                dropdown.removeEventListener("transitionend", handler);
            });
        }
    });
});

