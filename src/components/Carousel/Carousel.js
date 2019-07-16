import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";

export default function Carousel(props) {
  return (
    <section className="Carousel">
      <h2>{props.title}</h2>
      <div className="movies-container">
        {props.movies &&
          props.movies.map(movie => {
            return (
              <MovieCard
                title={movie.original_title}
                overview={movie.overview}
                backdrop={movie.backdrop_path}
                poster={movie.poster_path}
                languange={movie.original_language}
                id={movie.id}
                key={movie.id}
              />
            );
          })}
      </div>
    </section>
  );
}
