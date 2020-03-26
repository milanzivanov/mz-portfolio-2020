$(document).ready(function() {
    'use strict';

    // Slick
    $('.slick-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase: 'ease-out',
        prevArrow: $(".left-nav-custom"),
        nextArrow: $(".right-nav-custom"),
        appendDots: $(".my-pagination")
    });

    console.log("監視タスクの実行!!!!!!");
});
