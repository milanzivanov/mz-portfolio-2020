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

        responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     infinite: true,
            //     dots: true
            //   }
            // },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            //   }
            // },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
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