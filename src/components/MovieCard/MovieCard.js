import React, { Component } from "react";
import "./MovieCard.scss";

export default class MovieCard extends Component {
  state = {
    displayBackdrop: false
  };

  toggleImage = () => {
    const toggle = this.state.displayBackdrop;
    this.setState({ displayBackdrop: !toggle });
  };

  render() {
    const backdrop = (
      <div
        className="backdrop-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w780/${
            this.props.backdrop
          })`
        }}
      />
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
            : { minWidth: "540px", transform: "scale(1.05)", zIndex: "5" }
        }
        onMouseEnter={this.toggleImage}
        onMouseLeave={this.toggleImage}
      >
        {/* <h4 className="poster-name">{this.props.title}</h4> */}
        {!this.state.displayBackdrop ? poster : backdrop}
      </article>
    );
  }
}
