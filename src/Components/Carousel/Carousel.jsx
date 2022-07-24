import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { apiBuilder} from "../../utils/apiConfig";
import UnaCard from "../Card/UnaCard";
import overviewCut from "../../utils/overviewCut";
import { Oval } from "react-loader-spinner";
import { settingsSlider } from "./settings";

const Carousel = (props) => {

  return (
    <>
      <h1 style={{ color: "rgb(240,240,240)" }}>{
        // eslint-disable-next-line eqeqeq
        props.query == 0 ? (
          props.entityTitle
        ) :
        (<></>)
      }</h1>

      <Swiper
        {...settingsSlider}
      >
        {
        props.loading? (
          <Oval color="white" height={80} width={80} />
        ) :
        props.error? (
          <div>Error...{console.log(props.error)}</div>
        ) :
        props.data?.filter((movie) => (movie.title || movie.name).toLowerCase().includes(props.query))
        .map((movie, i) => {
              return (
                <SwiperSlide key={movie.id}>
                  <UnaCard
                    key={i}
                    id={movie.id}
                    description={
                      overviewCut(movie.overview)}
                    title={movie.title || movie.name}
                    image={apiBuilder.tryGetImg(movie.backdrop_path)}
                    height="280px"
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </>
  );
};

export default Carousel;
