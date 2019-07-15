import React from "react";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";

export default function MainPage() {
  return (
    <section className="MainPage">
      <section className="HeroImage">
        <div className="hero-image" />
        <div className="screen" />
        <article className="hero-text">Text</article>
      </section>
      <section className="main-body">
        <Carousel />
        <article className="Carousel">
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
          <article className="MovieCard">MovieCard</article>
        </article>
        <article className="Carousel">carousel</article>
        <article className="Carousel">carousel</article>
      </section>
    </section>
  );
}
