import React from "react";
import "./MovieCard.scss";

export default function MovieCard(props) {
  return (
    <article className="MovieCard">
      <h4 className="poster-name">{props.title}</h4>
      <img
        src={`https://image.tmdb.org/t/p/w185/${props.poster}`}
        alt={props.title}
        className="poster-image"
      />
    </article>
  );
}
