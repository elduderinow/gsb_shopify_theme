const handeSlidePerView = (size) => {
    if (size >= 4) {
        return 4
    } else {
        return size
    }
}

const handleAutoplay = (size) => {
    if (size > 4) {
        return {
            delay: 4000,
            disableOnInteraction: false
        }
    } else {
        return false
    }
}

const handlePagination = (size) => {
    if (size > 4) {
        return {
            el: '.swiper-pagination',
        }
    } else {
        return false
    }
}

const handleNavigation = (size) => {
    if (size > 4) {
        return {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        }
    } else {
        return false
    }
}

const onInit = () => {
    const breakPoints = { sm: 640, md: 750, lg: 990 }
    const swipers = Array.from(document.querySelectorAll('.swiper'));

    if (swipers.length > 0) {
        swipers.forEach((swiperEl, i) => {

            const swiperSize = parseInt(swiperEl.attributes['data-swiper-size'].value)

            const swiper = new Swiper(swiperEl, {
                loop: true,
                slidesPerView: 1.3,
                spaceBetween: 10,
                runCallbacksOnInit: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.slider-button--next',
                    prevEl: '.slider-button--prev',
                },
                breakpoints: {
                    [breakPoints.sm]: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    [breakPoints.lg]: {
                        autoplay: handleAutoplay(swiperSize),
                        slidesPerView: handeSlidePerView(swiperSize),
                        spaceBetween: 40,
                    }
                }
            });
            console.log(`swiper ${i}`, swiper)
        })
    }

}

document.addEventListener('DOMContentLoaded', onInit)