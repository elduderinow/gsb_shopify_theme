!function t(i,o,u){function s(n,e){if(!o[n]){if(!i[n]){var r="function"==typeof require&&require;if(!e&&r)return r(n,!0);if(a)return a(n,!0);throw new Error("Cannot find module '"+n+"'")}e=o[n]={exports:{}};i[n][0].call(e.exports,function(e){var r=i[n][1][e];return s(r||e)},e,e.exports,t,i,o,u)}return o[n].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,r,n){document.addEventListener("DOMContentLoaded",()=>{const e=640,r=990;[...document.querySelectorAll(".swiper")],new Swiper(".swiper",{loop:!1,slidesPerView:1.3,spaceBetween:10,autoplay:{delay:2e3},breakpoints:{[e]:{slidesPerView:2,spaceBetween:20},[r]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}})})},{}]},{},[1]);