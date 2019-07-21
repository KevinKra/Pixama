import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";

export default class MoviePage extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    const movie = await apiCalls.fetchFightClub();
    this.setState({ movie });
  }
  render() {
    return <div>MoviePage</div>;
  }
}
