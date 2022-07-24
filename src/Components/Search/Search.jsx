import React, { useState } from "react";
import { apiBuilder, apiEntity } from "../../utils/apiConfig";
import useApi from "../../hooks/useApi";
import UnaCard from "../../Components/Carousel/UnaCard";
import overviewCut from "../../utils/overviewCut";
import { Container } from "@material-ui/core";

const Search = (props) => {
  const [movies] = useApi(apiEntity.popularMovies);
  const [query, setQuery] = useState("");

  /* const handleSearch = (e) => {
    const searchTerm = e.target.value
    setQuery(e.target.value);
    console.log(query);
  }; */

  /* const search = (query) => {
    const result = movies.filter((value) =>
      value.name.toLowerCase().includes(query.toLowerCase())
    );
  }; */

  const handleSearch = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };

  return (
    <div>
      <Container>
        <h1 style={{ color: "white" }}>Busqueda</h1>
        <input
          type="text"
          style={{ color: "black", fontSize: "1.5em" }}
          placeholder={props.placeholder}
          onChange={handleSearch}
        ></input>
      </Container>

      {movies
        .filter((movie) => movie.title.toLowerCase().includes(query))
        .map((movie, i) => (
          <UnaCard
            key={i}
            id={movie.id}
            description={overviewCut(movie.overview)}
            title={movie.title || movie.name}
            image={apiBuilder.tryGetImg(movie.backdrop_path)}
            height="280px"
          />
        ))}
    </div>
  );
};

export default Search;
