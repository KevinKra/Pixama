import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";

export default class Carousel extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    apiCalls.fetchPopularMovies();
  }

  render() {
    return (
      <div>
        <p>Carousel</p>
      </div>
    );
  }
}
