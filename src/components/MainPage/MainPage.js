import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";

export default class MainPage extends Component {
  //movies state will be updated by the fetched result from the API call,
  //the content will be mapped through with the carousels
  // --- Once redux is introduced we will extract the local state and use Rprop
  state = {
    movies: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const films = await apiCalls.fetchPopularMovies();
    console.log(films);
    this.setState({ movies: films });
  };

  render() {
    return (
      <section className="MainPage">
        <HeroImage />
        <section className="main-body">
          <Carousel title="Popular Movies" movies={this.state.movies} />
          {/* <Carousel title="Popular Shows" movies={this.state.movies} />
          <Carousel title="Popular Action" movies={this.state.movies} /> */}
        </section>
      </section>
    );
  }
}
