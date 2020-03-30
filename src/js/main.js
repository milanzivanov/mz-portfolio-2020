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

// me
////////// wes bos grif gallery
const gallery = document.querySelector('.gallery-box2');
const overlay = document.querySelector('.overlay-box2');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick(e) {
    // console.log(e.curentTarget);
    const src = e.currentTarget.querySelector('img').src;
    // console.log(src);
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
// var modal = document.getElementById('simpleModalJs');
// Get open modal button
// var modalBtn = document.getElementById('modalBtnJs');
// Get close button
// var closeBtn = document.querySelector('.closeBtn');

// Listen for open click
// modalBtn.addEventListener('click', openModal);
// Listen for outside click
// window.addEventListener('click', outsideClick);
// Listen for close click
// closeBtn.addEventListener('click', closeModal);

// Function to open modal
// function openModal() {
//     modal.style.display = 'flex';
// }

// Function to close modal
// function closeModal(){
//     modal.style.display = 'none';
// }

// // Function to close modal if outside click
// function outsideClick(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   }
// }

