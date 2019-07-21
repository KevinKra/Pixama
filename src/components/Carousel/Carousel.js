import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";
// import { throwStatement } from "@babel/types";

export default class Carousel extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.setState({ movies: this.props.movies });
  };

  determineSlides = () => {
    const windowWidth = this.getWidth();
    const moviesPerPage = Math.ceil(windowWidth / 185);
    const totalPages = Math.floor(20 / moviesPerPage);
    this.setState({ totalPages, loaded: true });
  };

  // getWidth = () => {
  //   return Math.max(
  //     document.body.scrollWidth,
  //     document.documentElement.scrollWidth,
  //     document.body.offsetWidth,
  //     document.documentElement.offsetWidth,
  //     document.documentElement.clientWidth
  //   );
  // };

  translateXForward = () => {
    const movies = this.state.movies;
    const spliceEnd = movies.splice(movies.length - 3, 3);
    movies.unshift(...spliceEnd);
    this.setState({ movies });
  };

  translateXBackward = () => {
    const movies = this.state.movies;
    const spliceFront = movies.splice(0, 3);
    movies.push(...spliceFront);
    console.log(movies);
    this.setState({ movies });
  };

  render() {
    const moviesRendered =
      this.props.movies &&
      this.props.movies.map(movie => {
        return (
          <MovieCard
            title={movie.original_title}
            overview={movie.overview}
            backdrop={movie.backdrop_path}
            poster={movie.poster_path}
            language={movie.original_language}
            popularity={movie.vote_average}
            releaseDate={movie.release_date}
            // voteAverage={movie.vote_average}
            id={movie.id}
            key={movie.id}
          />
        );
      });
    return (
      <div className="Carousel">
        <h2>{this.props.title}</h2>
        <button className="forwards-btn" onClick={this.translateXForward}>
          ⏪
        </button>
        <button className="backwards-btn" onClick={this.translateXBackward}>
          ⏩
        </button>
        <div
          className="movies-container"
          style={{
            transform: `translateX(-25%)`
          }}
        >
          {moviesRendered}
        </div>
      </div>
    );
  }
};