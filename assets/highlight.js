!function t(i,o,a){function s(r,e){if(!o[r]){if(!i[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(u)return u(r,!0);throw new Error("Cannot find module '"+r+"'")}e=o[r]={exports:{}};i[r][0].call(e.exports,function(e){var n=i[r][1][e];return s(n||e)},e,e.exports,t,i,o,a)}return o[r].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,n,r){document.addEventListener("DOMContentLoaded",()=>{const e=640,n=990;var r=new Swiper(".swiper",{loop:!0,slidesPerView:1.3,spaceBetween:10,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{[e]:{slidesPerView:2,spaceBetween:20},[n]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}});r&&r.forEach(e=>{console.log(e),e.enabled=!1})})},{}]},{},[1]);