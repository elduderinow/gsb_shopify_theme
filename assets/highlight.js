"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0===o)return("string"===t?String:Number)(e);o=o.call(e,t||"default");if("object"!==_typeof(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}var onInit=function(){var t=640,o=990,e=(console.log("refreshing 4"),Array.from(document.querySelectorAll(".swiper")));0<e.length&&e.forEach(function(e){console.log(void 0),new Swiper(e,{loop:!0,slidesPerView:1.3,spaceBetween:10,runCallbacksOnInit:!0,autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:(_defineProperty(e={},t,{slidesPerView:2,spaceBetween:20}),_defineProperty(e,o,{slidesPerView:4,spaceBetween:40}),e),onInit:void console.log("yolo2",void 0),pagination:{el:".swiper-pagination"},navigation:{nextEl:".slider-button--next",prevEl:".slider-button--prev"}})})};document.addEventListener("DOMContentLoaded",onInit);