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
          a
        </button>
        <button className="backwards-btn" onClick={this.translateXForward}>
          b
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
