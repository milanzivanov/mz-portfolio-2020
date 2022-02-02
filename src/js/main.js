jQuery(function() {
    'use strict';

    // change bg image on page refres
    // let images = [
    //     'https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg', 
    //     'https://ik.imagekit.io/milanz/src/img/bg-main.jpeg', 
    //     'https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg', 
    //     'https://ik.imagekit.io/milanz/src/img/bg-main.jpeg', 
    //     'https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg', 
    //     'https://ik.imagekit.io/milanz/src/img/bg-main.jpeg'
    // ];

    // $('.grid-container').css(
    //     {
    //         'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'
    //     }
    // );

    // open mobil menu and hamburger btn
    $(".botton-nav").on("click", function(e) {
        $(".botton-nav, .header-nav__container").toggleClass("active");
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

});

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


// animation on scroll
AOS.init({
    delay: 100,
    duration: 300,
    once: false
});






















