const onInit = () => {
    const breakPoints = { sm: 640, md: 750, lg: 990 }
    // const swiperContainers = [...document.querySelectorAll('.swiper')]
    // swiperContainers.forEach((swiper)=> {
    //     console.log()
    // })
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1.3,
        spaceBetween: 10,
        autoplay: {
            delay: 2000,
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
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        },
    });
}

document.addEventListener('DOMContentLoaded', onInit)