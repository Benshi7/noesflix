import { FreeMode, Pagination } from "swiper"

export const settingsSlider = {
    slidesPerView: 4.3,
        spaceBetween:20,
        freeMode:true,
        modules:[FreeMode, Pagination],
        className:"mySwiper",
        responsive: [
            {
            breakpoint: 320,
            settings: {
                slidesPerView: 2.2,
                spaceBetween: 15,
            }
            },
            {
                breakpoint: 480,
                settings:{
                    slidesPerView: 3.2,
                    spaceBetween: 20,
                }
            },
                {
                    breakpoint: 640,
                    settings:{
                        slidesPerView: 4.2,
                        spaceBetween: 25,
                    },
        }]
}
