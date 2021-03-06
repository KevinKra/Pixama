import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import * as apiCalls from "../../api/apiCalls";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    displayBackdrop: false,
    userActive: false,
    bookmarked: this.props.isFavorite
  };

  toMoviePage = () => {
    this.fetchThisMovie(this.props.id);
    this.props.history.push("/moviepage");
  };

  fetchThisMovie = async id => {
    const result = await apiCalls.fetchSpecificMovie(id);
    this.props.updateMoviePage(result);
    console.log("result", result);
  };

  displayBackdrop = () => {
    setTimeout(this.determineActive, 550);
    this.setState({ userActive: true });
  };

  displayPoster = () => {
    this.setState({ displayBackdrop: false, userActive: false });
  };

  determineActive = () => {
    this.state.userActive
      ? this.setState({ displayBackdrop: true })
      : this.setState({ displayBackdrop: false });
  };

  bookmarkCard = async () => {
    if (!this.props.isFavorite && this.props.currentUser.loggedIn) {
      const {
        id,
        title,
        poster,
        releaseDate,
        popularity,
        overview,
        currentUser
      } = this.props;
      const data = {
        movie_id: id,
        user_id: currentUser.id,
        title,
        poster_path: poster,
        release_date: releaseDate,
        vote_average: popularity,
        overview
      };
      await apiCalls.postFavorite(
        "http://localhost:3000/api/users/favorites/new",
        data
      );
      const favorites = await apiCalls.fetchFavorites(
        `http://localhost:3000/api/users/${this.props.currentUser.id}/favorites`
      );
      const favoriteIDs = favorites.data.map(favorite => favorite.movie_id);
      const popularFavorites = this.props.popularMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });

      this.props.updatePopularFavorites(popularFavorites);

      const romanceFavorites = this.props.romanceMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });
      this.props.updateRomanceFavorites(romanceFavorites);

      const allFavorites = [...popularFavorites, ...romanceFavorites].filter(
        movie => {
          return movie.isFavorite === true;
        }
      );
      this.props.updateFavorites(allFavorites);
    } else if (!this.props.currentUser.loggedIn) {
      alert("You must be logged in to add a favorite");
    } else {
      await apiCalls.deleteFavorite(
        `http://localhost:3000/api/users/${
          this.props.currentUser.id
        }/favorites/${this.props.id}`,
        this.props.currentUser.id,
        this.props.id
      );

      const favorites = await apiCalls.fetchFavorites(
        `http://localhost:3000/api/users/${this.props.currentUser.id}/favorites`
      );
      const favoriteIDs = favorites.data.map(favorite => favorite.movie_id);
      const popularFavorites = this.props.popularMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });

      this.props.updatePopularFavorites(popularFavorites);

      const romanceFavorites = this.props.romanceMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });
      this.props.updateRomanceFavorites(romanceFavorites);

      const allFavorites = [...popularFavorites, ...romanceFavorites].filter(
        movie => {
          return movie.isFavorite === true;
        }
      );
      this.props.updateFavorites(allFavorites);
    }
  };

  render() {
    const bookmark = (
      <FontAwesomeIcon
        icon={faBookmark}
        size="lg"
        onClick={this.bookmarkCard}
        className={`bookmark-icon ${this.props.isFavorite && "bookmarked"}`}
      />
    );

    const play = (
      <FontAwesomeIcon
        icon={faPlay}
        size="lg"
        className="play-icon"
        onClick={this.toMoviePage}
      />
    );

    const backdrop = (
      <Fragment>
        <div className="overlay-content">
          <div className="primary-content">
            <h3 className="movie-title">{this.props.title}</h3>
            <p className="movie-overview">{this.props.overview}</p>
          </div>
          {bookmark}
          {play}
          <p className="movie-language">{`Language: ${this.props.language.toUpperCase()}`}</p>
          <p className="movie-popularity">{`Popularity: ${
            this.props.popularity
          }`}</p>
        </div>
        <div className="screen-solid" />
        <div
          className="backdrop-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780/${
              this.props.backdrop
            })`
          }}
        />
      </Fragment>
    );

    const poster = (
      <img
        className={`poster-image ${
          this.props.isFavorite ? "bookmarkedCard" : "notBookmarked"
        }`}
        src={`https://image.tmdb.org/t/p/w185/${this.props.poster}`}
        alt={this.props.title}
        onClick={this.toMoviePage}
      />
    );

    return (
      <article
        className="MovieCard"
        style={
          !this.state.displayBackdrop
            ? { minWidth: "185px" }
            : {
                backgroundColor: "black",
                minWidth: "320px",
                transform: "scale(1.03)",
                zIndex: "5"
              }
        }
        onMouseEnter={this.displayBackdrop}
        onMouseLeave={this.displayPoster}
      >
        {!this.state.displayBackdrop ? poster : backdrop}
      </article>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies,
  favorites: state.favorites,
});

export const mapDispatchToProps = dispatch => ({
  updatePopularFavorites: popularFavorites =>
    dispatch(actions.updatePopularFavorites(popularFavorites)),
  updateRomanceFavorites: romanceFavorites =>
    dispatch(actions.updateRomanceFavorites(romanceFavorites)),
  updateMoviePage: movie => dispatch(actions.updateMoviePage(movie)),
  updateFavorites: favorites => dispatch(actions.updateFavorites(favorites))
});

MovieCard.propTypes = {
  updatePopularFavorites: PropTypes.func,
  updateRomanceFavorites: PropTypes.func,
  updateMoviePage: PropTypes.func,
  updateFavorites: PropTypes.func,
  currentUser: PropTypes.object,
  popularMovies: PropTypes.array,
  romanceMovies: PropTypes.array,
  favorites: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieCard));
