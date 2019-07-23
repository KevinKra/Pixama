import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Carousel.scss";
import { connect } from "react-redux";

export class Carousel extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const movies = this.props[this.props.genre];
    this.setState({ movies });
  }

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
    this.setState({ movies });
  };

  render() {
    const genre = this.props[this.props.genre];
    const moviesRendered =
      genre.length > 0 &&
      genre.map(movie => {
        this.state.movies = genre;
        return (
          <MovieCard
            title={movie.original_title}
            overview={movie.overview}
            backdrop={movie.backdrop_path}
            poster={movie.poster_path}
            language={movie.original_language}
            popularity={movie.vote_average}
            releaseDate={movie.release_date}
            id={movie.id}
            key={movie.id}
            isFavorite={movie.isFavorite}
          />
        );
      });
    return (
      <div className="Carousel">
        <h2>{this.props.title}</h2>
        <button className="forwards-btn" onClick={this.translateXForward}>
          <i className="fas fa-chevron-left fa-5x" />
        </button>
        <button className="backwards-btn" onClick={this.translateXBackward}>
          <i className="fas fa-chevron-right fa-5x" />
        </button>
        <div className="movies-container">{moviesRendered}</div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies,
  favorites: state.favorites
});

export default connect(mapStateToProps)(Carousel);
