import React, { Component } from "react";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";

export default class MainPage extends Component {
  render() {
    return (
      <section className="MainPage">
        <HeroImage />
        <section className="main-body">
          <Carousel title="Popular Movies" movies={this.props.movies} />
        </section>
      </section>
    );
  }
}
