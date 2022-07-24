import { Navigation,Autoplay } from "swiper"


export const settingsSwiper = {

    navigation: true,
    modules:[Navigation, Autoplay],
    className: "mySwiper",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    style: {
        transition: "0.4ms",
        marginTop: "1px",
    }
}
