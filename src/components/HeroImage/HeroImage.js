import React, { Component } from "react";
import "./HeroImage.scss";

export default class HeroImage extends Component {
  state = {
    content: [
      {
        img:
          "https://images.unsplash.com/photo-1547191516-45e9e58822db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        header: "A Wonderous Voyage",
        body: "Across the Sea."
      }
    ]
  };
  render() {
    return (
      <section className="HeroImage">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${this.state.content[0].img})` }}
        />
        <div className="screen" />
        <article className="hero-text">
          <h2>{this.state.content[0].header}</h2>
          <p>{this.state.content[0].body}</p>
        </article>
      </section>
    );
  }
}
