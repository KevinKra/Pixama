import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";

export default class MainPage extends Component {
  //movies state will be updated by the fetched result from the API call,
  //the content will be mapped through with the carousels
  // --- Once redux is introduced we will extract the local state and use Rprops
  state = {
    movies: [
      {
        carouselName: "Action",
        movies: [{ title: "StarWars", body: "Swish-Swoosh" }]
      },
      {
        carouselName: "Comedy",
        movies: [{ title: "FunnyFun", body: "Good-Laugh" }]
      }
    ]
  };
  componentDidMount() {
    apiCalls.fetchPopularMovies();
  }
  render() {
    return (
      <section className="MainPage">
        <HeroImage />
        <section className="main-body">
          <Carousel />
          <Carousel />
          <Carousel />
        </section>
      </section>
    );
  }
}
