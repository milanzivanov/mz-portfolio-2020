jQuery((function(){"use strict";let e=["https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg","https://ik.imagekit.io/milanz/src/img/bg-main.jpeg","https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg","https://ik.imagekit.io/milanz/src/img/bg-main.jpeg","https://ik.imagekit.io/milanz/src/img/laptopOnTheTable.jpg","https://ik.imagekit.io/milanz/src/img/bg-main.jpeg"];if($(".grid-container").css({"background-image":"url("+e[Math.floor(Math.random()*e.length)]+")"}),$(".botton-nav").on("click",(function(e){$(".botton-nav, .header-nav__container").toggleClass("active")})),$('a[href^="#"]').bind("click",(function(e){e.preventDefault();var t=$(this).attr("href");return $("html, body").stop().animate({scrollTop:$(t).offset().top},600,(function(){location.hash=t})),$(".botton-nav, .header-nav__container").removeClass("active"),!1})),$(".back-to-top").length){let e=100,t=function(){$(window).scrollTop()>e?$(".back-to-top").addClass("show"):$(".back-to-top").removeClass("show")};t(),$(window).on("scroll",(function(){t()})),$(".back-to-top").on("click",(function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},500)}))}$((function(){$(".acc_ctrl").on("click",(function(e){e.preventDefault(),$(this).hasClass("active")?($(this).removeClass("active"),$(this).next().stop().slideUp(300)):($(this).addClass("active"),$(this).next().stop().slideDown(300))}))}))}));const gallery=document.querySelector(".gallery-box"),overlay=document.querySelector(".overlay-box"),overlayImage=overlay.querySelector("img"),overlayClose=overlay.querySelector(".close");function handleClick(e){const t=e.currentTarget.querySelector("img").src;overlayImage.src=t,overlay.classList.add("open")}function close(){overlay.classList.remove("open")}const items=document.querySelectorAll(".item-flex");items.forEach(e=>e.addEventListener("click",handleClick)),overlayClose.addEventListener("click",close);