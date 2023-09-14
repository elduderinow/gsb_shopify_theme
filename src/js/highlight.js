// const filterSlides = (slides) => {
//     console.log('all slides arr f', slides)
//     slides.map((slide) => {

//         let arr = Array.from(slide.classList).join()
//         if (!arr.includes('duplicate')) {
//             console.log('not dupl', slide)
//         }
//     })
// }

// import Swiper from "swiper";

const onInit = () => {

    console.log('refreshing 2')

    const breakPoints = { sm: 640, md: 750, lg: 990 }

    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 10,
        runCallbacksOnInit: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            [breakPoints.sm]: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            [breakPoints.lg]: {
                slidesPerView: 4,
                spaceBetween: 40,
            }
        },
        breakpoints: function (sw) {
            console.log('test self invoking')
        }(),
        onInit: function (swiper) {
            console.log('yolo2', swiper)
        }(),
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        },
    });

    if (swiper) {
        swiper.forEach(swiper => {
            console.log(swiper)
            const swiperSize = parseInt(swiper.el.attributes['data-swiper-size'].value)
            console.log(swiperSize)

            if (swiperSize <= 4) {
                swiper.enabled = false
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', onInit)