import React, { Component, Fragment } from "react";
import Favorite from "../buttons/Favorite/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.scss";

export default class MovieCard extends Component {
  state = {
    displayBackdrop: true,
    userActive: true,
    bookmarked: false
  };

  displayBackdrop = () => {
    setTimeout(this.determineActive, 450);
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

  bookmarkCard = () => {
    const toggle = this.state.bookmarked;
    this.setState({ bookmarked: !toggle });
  };

  render() {
    const bookmark = (
      <FontAwesomeIcon
        icon={faBookmark}
        size="lg"
        onClick={this.bookmarkCard}
        className={`bookmark ${this.state.bookmarked && "bookmarked"}`}
      />
    );
    const backdrop = (
      <Fragment>
        <div className="overlay-content">
          <h3 className="movie-title">{this.props.title}</h3>
          <p className="movie-overview">{this.props.overview}</p>
          {bookmark}
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
            ? { minWidth: "185px" }
            : { minWidth: "540px", transform: "scale(1.03)", zIndex: "5" }
        }
        onMouseEnter={this.displayBackdrop}
        onMouseLeave={this.displayPoster}
      >
        {!this.state.displayBackdrop ? poster : backdrop}
      </article>
    );
  }
}
