import React from "react";
import { curatedData } from "../../_assets/curatedHeroData";
import "./HeroImage.scss";

export default function HeroImage() { 
  const divStyle = (image, position) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
  };

  const selectFromPool = () => {
    const index = Math.floor(Math.random() * (curatedData.length - 1));
    const movie = curatedData[index];
    return (
      <section className="HeroContent">
        <div
          className="hero-image"
          style={divStyle(
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            "center top"
          )}
        />
        <div className="opacity-filter" />
        <div className="hero-movie-details">
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <button>Watch</button>
        </div>
        <div className="hero-movie-support">
          <p className="rating" disabled>
            {movie.rating}
          </p>
        </div>
      </section>
    );
  };

  return <React.Fragment>{selectFromPool()}</React.Fragment>;
}
