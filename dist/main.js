$(document).ready(function(){"use strict";$(".slick-slider").slick({arrows:!0,dots:!0,autoplay:!0,autoplaySpeed:1e4,prevArrow:$(".left-nav-custom"),nextArrow:$(".right-nav-custom"),appendDots:$(".my-pagination"),cssEase:"ease-out",responsive:[]}),$(window).scroll(function(){100<=$(window).scrollTop()?($(".header-box").addClass("sticky-active"),$(".header-nav ul li > a").addClass("nav-color")):($(".header-box").removeClass("sticky-active"),$(".header-nav ul li a").removeClass("nav-color"))})}),$(".nav-right__total, .close-btn-cart-js").on("click",function(a){$(".item-added-to-car").toggleClass("active")});