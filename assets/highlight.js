!function t(i,o,a){function s(n,e){if(!o[n]){if(!i[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(u)return u(n,!0);throw new Error("Cannot find module '"+n+"'")}e=o[n]={exports:{}};i[n][0].call(e.exports,function(e){var r=i[n][1][e];return s(r||e)},e,e.exports,t,i,o,a)}return o[n].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(e,r,n){document.addEventListener("DOMContentLoaded",()=>{const r={sm:640,md:750,lg:990};var e=[...document.querySelectorAll(".swiper")];e&&0<e&&e.forEach(e=>{let e=new Swiper(e,{loop:!0,slidesPerView:1.3,spaceBetween:10,autoplay:{delay:2e3},breakpoints:{[r.sm]:{slidesPerView:2,spaceBetween:20},[r.lg]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}})})})},{}]},{},[1]);