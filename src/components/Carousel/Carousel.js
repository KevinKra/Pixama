import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";

export default function Carousel() {
  return (
    <section className="Carousel">
      <h2>Carousel</h2>
      <div className="movies-container">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
}
