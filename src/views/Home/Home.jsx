import React from "react";
import { Container } from "@material-ui/core";
import Carousel from "../../Components/Carousel/Carousel";
import Separator from "../../Components/Separator/Separator";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import useApi from "../../hooks/useApi";
import { apiEntity } from "../../utils/apiConfig";

const Home = (props) => {
  const unaEntidad = apiEntity.popularMovies;

  const [data, isLoading, error, handleSearch, query] = useApi(unaEntidad);

  // ¿Esto está bien? ¿Quizás hay mejores maneras de hacerlo? ¿La carga parece ser más lenta de lo que debería y esta podría ser la causa? // 

  const topMovies = useApi(apiEntity.topRatedMovies);

  const popularMovies = useApi(apiEntity.popularMovies);

  const popularShows = useApi(apiEntity.popularTv);

  return (
    <div>
      <Container maxWidth="xl">
        <Navbar searchFunction={handleSearch} />
        <Separator height="65px" />

        <Banner data={data} loading={isLoading} error={error} />
        <Container maxWidth="xl">
          <Carousel
            entityTitle="Mejor puntuadas"
            loading={isLoading}
            data={topMovies[0]}
            query={query}
          />
          <Separator height="10px" />
          <Carousel
            entityTitle="Películas populares"
            loading={isLoading}
            data={popularMovies[0]}
            query={query}
          />
          <Separator height="10px" />
          <Carousel
            entityTitle="Shows populares"
            loading={isLoading}
            data={popularShows[0]}
            query={query}
          />
          <Separator height="50px" />
        </Container>
      </Container>
    </div>
  );
};

export default Home;
