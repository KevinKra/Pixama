import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";

export default class Carousel extends Component {
  state = {
    translate: 0,
    currentPage: 1,
    totalPages: 1,
    loaded: false
  };

  componentDidUpdate() {
    if (this.props.movies.length > 0 && this.state.loaded === false)
      this.determineSlides();
  }

  determineSlides = () => {
    const windowWidth = this.getWidth();
    const moviesPerPage = Math.ceil(windowWidth / 185);
    const totalPages = Math.floor(20 / moviesPerPage);
    this.setState({ totalPages, loaded: true });
  };

  getWidth = () => {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  };

  translateXForward = () => {
    if (this.state.currentPage > 1) {
      const currentPage = this.state.currentPage;
      const previousPosition = this.state.translate;
      this.setState({
        translate: previousPosition + 100,
        currentPage: currentPage - 1
      });
    }
  };

  translateXBackward = () => {
    if (this.state.currentPage <= this.state.totalPages) {
      const currentPage = this.state.currentPage;
      const previousPosition = this.state.translate;
      this.setState({
        translate: previousPosition - 100,
        currentPage: currentPage + 1
      });
    }
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
            transform: `translateX(${this.state.translate}vw)`
          }}
        >
          {moviesRendered}
        </div>
      </div>
    );
  }
}
