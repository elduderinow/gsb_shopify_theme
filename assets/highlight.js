!function t(i,o,p){function s(r,e){if(!o[r]){if(!i[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(u)return u(r,!0);throw new Error("Cannot find module '"+r+"'")}e=o[r]={exports:{}};i[r][0].call(e.exports,function(e){var n=i[r][1][e];return s(n||e)},e,e.exports,t,i,o,p)}return o[r].exports}for(var u="function"==typeof require&&require,e=0;e<p.length;e++)s(p[e]);return s}({1:[function(e,n,r){document.addEventListener("DOMContentLoaded",()=>{const e=640,n=750,r=990;new Swiper(".swiper",{direction:"horizontal",loop:!0,breakpoints:{[e]:{slidesPerView:2,spaceBetween:20},[n]:{slidesPerView:3,spaceBetween:30},[r]:{slidesPerView:4,spaceBetween:40}},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})})},{}]},{},[1]);