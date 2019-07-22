import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  postFavorite,
  fetchFavorites,
  deleteFavorite
} from "../../api/apiCalls";
import { connect } from "react-redux";
import { updatePopularFavorites, updateRomanceFavorites } from "../../actions";
import "./MovieCard.scss";

export class MovieCard extends Component {
  state = {
    displayBackdrop: false,
    userActive: false,
    bookmarked: this.props.isFavorite 
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
    // const toggle = this.state.bookmarked;
    // this.setState({ bookmarked: !toggle });
    if (!this.props.isFavorite) {
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
      await postFavorite("http://localhost:3000/api/users/favorites/new", data);
      const favorites = await fetchFavorites(
        `http://localhost:3000/api/users/${this.props.currentUser.id}/favorites`
      );
      const favoriteIDs = favorites.data.map(favorite => favorite.movie_id)
      const popularFavorites = this.props.popularMovies.map(movie => {
        return favoriteIDs.includes(movie.id) ? { ...movie, isFavorite: true } : movie;
      });

      this.props.updatePopularFavorites(popularFavorites);

      const romanceFavorites = this.props.romanceMovies.map(movie => {
        return favoriteIDs.includes(movie.id) ? { ...movie, isFavorite: true } : movie;
      });
      this.props.updateRomanceFavorites(romanceFavorites); 
    } else {
      await deleteFavorite(
        `http://localhost:3000/api/users/${
          this.props.currentUser.id
        }/favorites/${this.id}`
      );
      
      const favorites = await fetchFavorites(
        `http://localhost:3000/api/users/${
          this.props.currentUser.id
        }/favorites`
      );
      const favoriteIDs = favorites.data.map(
        favorite => favorite.movie_id
      );
      const popularFavorites = this.props.popularMovies.map(movie => {
        return favoriteIDs.includes(movie.id) ? { ...movie, isFavorite: true } : movie;
      });

      this.props.updatePopularFavorites(popularFavorites);

      const romanceFavorites = this.props.romanceMovies.map(movie => {
        return favoriteIDs.includes(movie.id) ? { ...movie, isFavorite: true } : movie;
      });
      this.props.updateRomanceFavorites(romanceFavorites); 
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
        onClick={() => console.log("play btn clicked")}
        className="play-icon"
      />
    );
    const backdrop = (
      <Fragment>
        <div className="overlay-content">
          <h3 className="movie-title">{this.props.title}</h3>
          <p className="movie-overview">{this.props.overview}</p>
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
        className="poster-image"
        src={`https://image.tmdb.org/t/p/w185/${this.props.poster}`}
        alt={this.props.title}
      />
    );

    return (
      <article
        className="MovieCard"
        style={
          !this.state.displayBackdrop
            ? { maxWidth: "185px" }
            : {
                maxWidth: "320px",
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
  romanceMovies: state.romanceMovies
});

export const mapDispatchToProps = dispatch => ({
  updatePopularFavorites: popularFavorites => dispatch(updatePopularFavorites(popularFavorites )),
  updateRomanceFavorites: romanceFavorites => dispatch(updateRomanceFavorites(romanceFavorites))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(MovieCard);
