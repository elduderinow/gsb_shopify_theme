!function t(i,o,u){function p(r,e){if(!o[r]){if(!i[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(s)return s(r,!0);throw new Error("Cannot find module '"+r+"'")}e=o[r]={exports:{}};i[r][0].call(e.exports,function(e){var n=i[r][1][e];return p(n||e)},e,e.exports,t,i,o,u)}return o[r].exports}for(var s="function"==typeof require&&require,e=0;e<u.length;e++)p(u[e]);return p}({1:[function(e,n,r){document.addEventListener("DOMContentLoaded",()=>{const e=640,n=990;new Swiper(".swiper",{loop:!0,breakpoints:{[e]:{slidesPerView:2,spaceBetween:20},[n]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--prev",prevEl:".slider-button--next"}})})},{}]},{},[1]);