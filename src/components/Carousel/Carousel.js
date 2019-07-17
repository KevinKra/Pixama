import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";

export default class Carousel extends Component {
  state = {
    splitMovies: [],
    loaded: false
  };

  componentDidUpdate() {
    if (this.props.movies.length > 0 && this.state.loaded === false)
      this.CarouselTransitions();
  }

  CarouselTransitions = () => {
    //Expects 20 movies from fetch
    let movieSelection = [];
    this.props.movies.map((movie, index) => {
      let movies = [],
        key = 1;
      movies.push(movie);
      if ((index + 1) % 5 === 0) {
        movieSelection.push({ [key]: movies });
        key += 1;
        movies = [];
      }
    });
    console.log(movieSelection);
    this.setState({ splitMovies: movieSelection, loaded: true });
  };

  render() {
    return (
      <section className="Carousel">
        <h2>{this.props.title}</h2>
        <button>X</button>
        <div className="movies-container">
          {/* {this.props.movies.length > 0 && this.CarouselTransitions()} */}
          {this.props.movies &&
            this.props.movies.map(movie => {
              return (
                <MovieCard
                  title={movie.original_title}
                  overview={movie.overview}
                  backdrop={movie.backdrop_path}
                  poster={movie.poster_path}
                  language={movie.original_language}
                  id={movie.id}
                  key={movie.id}
                />
              );
            })}
        </div>
        <button>Y</button>
      </section>
    );
  }
}
