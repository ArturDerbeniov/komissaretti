"use strict";function eventWindowLoad(){var t=document.querySelector(".headerMain"),o=t.querySelector(".headerMain-burger"),r=window.innerHeight;ScrollTrigger.create({trigger:document.body,start:"top center",onUpdate:function(e){-1==e.direction?(t.classList.add("show"),t.classList.remove("hide"),window.scrollY<=0&&t.classList.remove("show")):(0<window.scrollY&&t.classList.add("show"),window.scrollY>r/2&&(t.classList.remove("show"),t.classList.add("hide"),o.classList.remove("active")))}}),customSrcoll.init()}function eventDocClick(e){var t=e.target;for(e.target;t&&t!=this;){if(t.classList.contains("headerMain-burger")){t.classList.toggle("active"),t.classList.contains("active")?document.body.classList.add("menuMobileActive"):document.body.classList.remove("menuMobileActive");break}t=t.parentNode}}document.addEventListener("click",eventDocClick,!1),window.addEventListener("load",eventWindowLoad,!1),gsap.registerPlugin(ScrollTrigger);var customSrcoll={wrapper:document.querySelector("[data-simplebar]"),isAllowed:!0,init:function(){this.wrapper&&SimpleBar.instances.get(window.customSrcoll.wrapper)}};function animationScroll(){document.querySelector(".case")&&gsap.utils.toArray(".case").forEach(function(e,t){gsap.to(e.querySelector(".case-title"),{y:30,opacity:0}),gsap.to(e.querySelector(".case-intro"),{y:20,opacity:0}),gsap.to(e.querySelector(".btn"),{y:20,opacity:0}),gsap.to(e.querySelector("img"),{scale:1.1,opacity:0});gsap.timeline({defaults:{y:0,opacity:1},scrollTrigger:{trigger:e,start:"top 70%"}}).to(e.querySelector(".case-title"),{duration:.8},"<").to(e.querySelector(".case-intro"),{duration:1},".1").to(e.querySelector(".btn"),{duration:1.2},".2").to(e.querySelector("img"),{scale:1,duration:1},"<")}),document.querySelector(".separator")&&document.querySelectorAll(".separator").forEach(function(t,e){ScrollTrigger.create({trigger:t,start:"bottom 80%",onEnter:function(e){e.progerss,e.direction,e.isActive;t.classList.add("init")}})}),document.querySelector(".clientsWords-item")&&gsap.utils.toArray(".clientsWords-item").forEach(function(e,t){gsap.to(e.querySelector(".clientsWords-item-img"),{x:-30,opacity:0}),gsap.to(e.querySelector(".clientsWords-item-text"),{x:30,opacity:0});gsap.timeline({defaults:{x:0,opacity:1},scrollTrigger:{trigger:e,start:"top 70%"}}).to(e.querySelector(".clientsWords-item-img"),{duration:1}).to(e.querySelector(".clientsWords-item-text"),{duration:1},"<")})}function menuScroll(){var e;(e=document.querySelector(".menuMain"))&&ScrollTrigger.create({trigger:e,start:"bottom bottom",end:"bottom top",onEnter:function(e){e.progerss,e.direction,e.isActive},onUpdate:function(e){e.progerss,e.direction;e=e.isActive;console.log(e,self)}})}