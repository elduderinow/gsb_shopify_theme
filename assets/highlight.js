"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,n){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0===n)return("string"===t?String:Number)(e);n=n.call(e,t||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}var handeSlidePerView=function(e){return 4<=e?4:e},handleAutoplay=function(e){return 4<e&&{delay:4e3,disableOnInteraction:!1}},onInit=function(){var n=640,r=990,e=(console.log("refreshing 5"),Array.from(document.querySelectorAll(".swiper")));0<e.length&&e.forEach(function(e){var t=parseInt(e.attributes["data-swiper-size"].value),t=(console.log(e,t),new Swiper(e,{loop:!0,slidesPerView:1.3,spaceBetween:10,runCallbacksOnInit:!0,autoplay:handleAutoplay(t),breakpoints:(_defineProperty(e={},n,{slidesPerView:2,spaceBetween:20}),_defineProperty(e,r,{slidesPerView:handeSlidePerView(t),spaceBetween:40}),e),pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}}));console.log("correct?",t)})};document.addEventListener("DOMContentLoaded",onInit);