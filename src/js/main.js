$(document).ready(function() {
    'use strict';

    // Slick
    // $('.slick-slider').slick({
    //     arrows: true,
    //     dots: true,
    //     autoplay: true,
    //     autoplaySpeed: 10000,
    //     cssEase: 'ease-out',
    //     prevArrow: $(".left-nav-custom"),
    //     nextArrow: $(".right-nav-custom"),
    //     appendDots: $(".my-pagination")
    // });

    $('.slick-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $(".left-nav-custom"),
        nextArrow: $(".right-nav-custom"),
        appendDots: $(".my-pagination"),
        cssEase: 'ease-out',
    });


    // adding shadow on scroll and sticky
    $(window).scroll(function() {
 
        if ($(window).scrollTop() >= 100) { 
            $('.header-box').addClass('sticky-active');
            $('.header-nav ul li > a').addClass('nav-color');
        } else {
            $('.header-box').removeClass('sticky-active');
            $('.header-nav ul li a').removeClass('nav-color');

        }

    });
});


//////////


//     // open added cart 
$(".nav-right__total, .close-btn-cart-js").on("click", function(e) {
    $(".item-added-to-car").toggleClass("active");
});