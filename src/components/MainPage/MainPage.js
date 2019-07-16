import React from "react";
import "./MainPage.scss";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";

export default function MainPage() {
  return (
    <section className="MainPage">
      <HeroImage />
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
