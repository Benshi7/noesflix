import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { apiBuilder, apiQuality } from "../../utils/apiConfig";
import overviewCut from "../../utils/overviewCut";
import Separator from "../Separator/Separator";
import { Button, Typography } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import { Favorite, PlayArrow } from "@mui/icons-material";
import { settingsSwiper } from "./settings";

const Banner = (props) => {
  return (
    <>
      <Swiper {...settingsSwiper}>
        {props.loading ? (
          <div>Loading...</div>
        ) : props.error ? (
          <div>Error...</div>
        ) : (
          props.data.map((movie) => (
            <SwiperSlide
              key={movie.id}
              style={{
                transition: "0.3ms",
                width: "100%",
                height: "680px",
                backgroundImage: `url(${apiBuilder.tryGetImg(
                  movie.backdrop_path,
                  apiQuality.backdropLarge
                )})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "0% 15%",
                borderRadius: "15px",
              }}
            >
              <Separator height="57.5%"></Separator>
              <div
                title={movie.title || movie.name}
                description={overviewCut(movie.overview)}
                style={{ marginLeft: "12.5%" }}
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    className="boton"
                    variant="contained"
                    size="large"
                    style={{
                      backgroundColor: "rgba(200,200,200,0.65)",
                      fontSize: "1.1em",
                    }}
                    endIcon={<PlayArrow sx={{ color: "rgb(70,24,87)" }} />}
                  >
                    REPRODUCIR
                  </Button>
                  <div>
                    <Button
                      className="boton"
                      variant="contained"
                      size="large"
                      style={{
                        backgroundColor: "rgba(200,200,200,0.65)",
                        fontSize: "1.1em",
                      }}
                      endIcon={<Favorite sx={{ color: "rgb(70,24,87)" }} />}
                    >
                      FAVORITOS
                    </Button>
                  </div>
                </Stack>
                <h1
                  style={{
                    display: "block",
                    bottom: "0",
                    fontSize: "2.7em",
                    color: "rgba(210,210,210,0.95)",
                    letterSpacing: "0.1em",
                    marginBottom: "10px",
                    marginTop: "10px",
                    textShadow:
                      "rgb(70,24,87) 1px 0px 0px, rgb(70,24,87) 0.540302px 0.841471px 0px, rgb(70,24,87) -0.416147px 0.909297px 0px, rgb(70,24,87) -0.989992px 0.14112px 0px, rgb(70,24,87) -0.653644px -0.756802px 0px, rgb(70,24,87) 0.283662px -0.958924px 0px, rgb(70,24,87) 0.96017px -0.279415px 0px",
                  }}
                >
                  {(movie.title || movie.name).toUpperCase()}
                </h1>
                <div style={{ width: "30%", height: "50%" }}>
                  <Typography
                    variant="body1"
                    style={{
                      color: "rgba(200,200,200,0.9)",
                      textShadow:
                        "rgb(70,24,87) 1px 0px 0px, rgb(70,24,87) 0.540302px 0.841471px 0px, rgb(70,24,87) -0.416147px 0.909297px 0px, rgb(70,24,87) -0.989992px 0.14112px 0px, rgb(70,24,87) -0.653644px -0.756802px 0px, rgb(70,24,87) 0.283662px -0.958924px 0px, rgb(70,24,87) 0.96017px -0.279415px 0px",
                    }}
                  >
                    FECHA DE SALIDA: {movie.release_date} <br />
                    PUNTUACIÓN: {movie.vote_average}/10{" "}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default Banner;
