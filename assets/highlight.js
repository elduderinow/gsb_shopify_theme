"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var handeSlidePerView=function(e){return 4<=e?4:e},handleAutoplay=function(e){return 4<e&&{delay:4e3,disableOnInteraction:!1}},handlePagination=function(e){return 4<e&&{el:".swiper-pagination"}},handleNavigation=function(e){return 4<e&&{nextEl:".slider-button--next",prevEl:".slider-button--prev"}},onInit=function(){var r=640,o=990,e=(console.log("refreshing 6"),Array.from(document.querySelectorAll(".swiper")));0<e.length&&e.forEach(function(e,t){var n=parseInt(e.attributes["data-swiper-size"].value),e=new Swiper(e,{loop:!0,slidesPerView:1.3,spaceBetween:10,runCallbacksOnInit:!0,autoplay:handleAutoplay(n),breakpoints:(_defineProperty(e={},r,{slidesPerView:2,spaceBetween:20}),_defineProperty(e,o,{slidesPerView:handeSlidePerView(n),spaceBetween:40}),e),pagination:handlePagination(n),navigation:handleNavigation(n)});console.log("swiper ".concat(t),e)})};document.addEventListener("DOMContentLoaded",onInit);