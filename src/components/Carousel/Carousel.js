import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";

export default class Carousel extends Component {
  state = {
    splitMovies: [],
    translate: 0,
    page: 1
    // loaded: false
  };

  componentDidUpdate() {
    if (this.props.movies.length > 0 && this.state.loaded === false)
      this.CarouselTransitions();
  }

  // CarouselTransitions = () => {
  //   //Expects 20 movies from fetch
  //   let movieSelection = [];
  //   this.props.movies.map((movie, index) => {
  //     let movies = [],
  //       key = 1;
  //     movies.push(movie);
  //     if ((index + 1) % 5 === 0) {
  //       movieSelection.push({ [key]: movies });
  //       key += 1;
  //       movies = [];
  //     }
  //   });
  //   console.log(movieSelection);
  //   this.setState({ splitMovies: movieSelection, loaded: true });
  // };

  translateXForward = () => {
    const previousPosition = this.state.translate;
    this.setState({ translate: previousPosition + 50 });
  };

  translateXBackward = () => {
    const previousPosition = this.state.translate;
    this.setState({ translate: previousPosition - 50 });
  };

  render() {
    return (
      <div className="Carousel">
        <h2>{this.props.title}</h2>
        <button className="forwards-btn" onClick={this.translateXBackward}>
          Forward
        </button>
        <button className="backwards-btn" onClick={this.translateXForward}>
          Back
        </button>
        <div
          className="movies-container"
          style={{
            transform: `translateX(${this.state.translate}vw)`
          }}
        >
          {this.props.movies &&
            this.props.movies.map(movie => {
              return (
                <MovieCard
                  title={movie.original_title}
                  overview={movie.overview}
                  backdrop={movie.backdrop_path}
                  poster={movie.poster_path}
                  language={movie.original_language}
                  popularity={movie.vote_average}
                  id={movie.id}
                  key={movie.id}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
