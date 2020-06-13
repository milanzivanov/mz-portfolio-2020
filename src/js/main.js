$(document).ready(function() {
    'use strict';

    // Slick
    $('.slick-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $(".left-nav-custom"),
        nextArrow: $(".right-nav-custom"),
        cssEase: 'ease-out',

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            }
          ]
    });

    // open mobil menu and hamburger btn
    $(".botton-nav").on("click", function(e) {
        $(".botton-nav, .header-nav__container").toggleClass("active");
        // $(".botton-nav").toggleClass("hover-active");
    });


    // scroll to section
    $('a[href^="#"]').bind('click', function(e) {
        e.preventDefault(); 

        var target = $(this).attr("href");

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; 
        });

        $(".botton-nav, .header-nav__container").removeClass("active");

        return false;
    });

    // btt
    if ($('.back-to-top').length) {
        let scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.back-to-top').addClass('show');
            } else {
                $('.back-to-top').removeClass('show');
            }
        };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }

    // accordian education
    $(function() {
        $('.acc_ctrl').on('click', function(e) {
          e.preventDefault();
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next()
            .stop()
            .slideUp(300);
          } else {
            $(this).addClass('active');
            $(this).next()
            .stop()
            .slideDown(300);
          }
        });
      });


    // adding shadow on scroll and sticky
    // try with padding-top!!!
    // $(window).scroll(function() {
 
    //     if ($(window).scrollTop() >= 100) { 
    //         // $('.header-box').addClass('sticky-active');
    //         $('.header-nav ul li > a').addClass('nav-color');
    //     } else {
    //         // $('.header-box').removeClass('sticky-active');
    //         $('.header-nav ul li a').removeClass('nav-color');
    //     }
    // });

});

// random bg on reload
// function randombg(){
//     let random = Math.floor(Math.random() * 3) + 0;
//     let bigSize = ["url('./../src/img/laptop-glasses.jpeg')",
//                     "url('./../src/img/laptopOnTheTable.jpg')",
//                    "url('./../src/img/bg-main.jpeg')"];
//     document.getElementById("random-bg-js").style.backgroundImage = bigSize[random];
// }

////////// wes bos grid gallery
const gallery = document.querySelector('.gallery-box');
const overlay = document.querySelector('.overlay-box');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick(e) {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

function close() {
    overlay.classList.remove('open');
}

const items = document.querySelectorAll('.item-flex');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);






