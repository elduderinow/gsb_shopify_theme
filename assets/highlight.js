!function t(o,i,s){function a(r,e){if(!i[r]){if(!o[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(l)return l(r,!0);throw new Error("Cannot find module '"+r+"'")}e=i[r]={exports:{}};o[r][0].call(e.exports,function(e){var n=o[r][1][e];return a(n||e)},e,e.exports,t,o,i,s)}return i[r].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)a(s[e]);return a}({1:[function(e,n,r){document.addEventListener("DOMContentLoaded",()=>{const e=640,n=990;var r=new Swiper(".swiper",{loop:!0,slidesPerView:1.3,spaceBetween:10,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{[e]:{slidesPerView:2,spaceBetween:20},[n]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}});r&&r.forEach((e,n)=>{e.slides.map(e=>{Array.from(e.classList).join().includes("duplicate")||console.log("not dupl",e)});console.log(void 0),e.loopedSlides})})},{}]},{},[1]);