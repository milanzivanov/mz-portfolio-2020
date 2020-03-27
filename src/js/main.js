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
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 6,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

    // console.log("監視タスクの実行!!!!!!");
});
