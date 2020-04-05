$(document).ready(function() {
    'use strict';

    // Slick
    $('.slick-slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        preconstrow: $(".left-nav-custom"),
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
          ]
    });

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

    // accordian ccs tricks
    (function($) {
    
        let allPanels = $('.accordion > dd').hide();
          
        $('.accordion > dt > a').click(function() {
          allPanels.slideUp();
          $(this).parent().next().slideDown();
          return false;
        });
      
      })(jQuery);


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

// me
////////// wes bos grid gallery
const gallery = document.querySelector('.gallery-box2');
const overlay = document.querySelector('.overlay-box2');
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


const items = document.querySelectorAll('.item-grid2');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);

// modal 
// Get modal element
const modal = document.getElementById('simpleModalJs');
// Get open modal button
const modalBtn = document.getElementById('modalBtnJs');
// Get close button
const closeBtn = document.querySelector('.closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for outside click
window.addEventListener('click', outsideClick);
// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'flex';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// // Function to close modal if outside click
function outsideClick(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

// random bg on reload
function randombg(){
    let random = Math.floor(Math.random() * 2) + 0;
    let bigSize = ["url('./../src/img/laptop-glasses.jpeg')",
                   "url('./../src/img/bg-main.jpeg')"];
    document.getElementById("random-bg-js").style.backgroundImage = bigSize[random];
}


// on click event on all anchors with a class of scrollTo
// $('a.scrollTo').on('click', function() {
  
//     // data-scrollTo = section scrolling to name
//     let scrollTo = $(this).attr('data-scrollTo');
    
//     // toggle active class on/off
//     $( "a.scrollTo" ).each(function() {
//       if (scrollTo == $(this).attr('data-scrollTo')){
//         $(this).addClass('active');
//         // 
//         $(".add-sicky-h").addClass("active-test");
//       } else{
//         $(this).removeClass('active');
//         $(".botton-nav, .header-nav__container").removeClass("active");

//       }
//     });

//     // animate and scroll to the sectin 
//     $('body, html').animate({
      
//       // the magic - scroll to section
//       "scrollTop": $('#'+scrollTo).offset().top + $(".header-box").height()
//     }, 1000 );
//     return false;
// })
