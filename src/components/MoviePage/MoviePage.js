import React, { Component } from "react";
import API_KEY from "../../api/apikey";
import * as helpers from "../../_utils/helpers/";
import "./MoviePage.scss";

export default class MoviePage extends Component {
  state = {
    movie: {},
    displayPoster: true
  };

  //dummy fetch -- delete this on redux implementation
  fetchFightClub = async () => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/12?api_key=${API_KEY}`
    );
    const movies = await response.json();
    return movies;
  };

  async componentDidMount() {
    const movie = await this.fetchFightClub();
    this.setState({ movie });
  }

  togglePoster = () => {
    const toggle = this.state.displayPoster;
    this.setState({ displayPoster: !toggle });
  };

  render() {
    const {
      poster_path,
      backdrop_path,
      overview,
      original_title,
      original_language,
      release_date,
      runtime,
      status,
      revenue,
      tagline,
      vote_average,
      production_companies,
      id
    } = this.state.movie;

    const posterToggle = () => {
      return this.state.displayPoster ? (
        <div
          className="poster-image"
          onClick={this.togglePoster}
          style={helpers.divStyle(
            `https://image.tmdb.org/t/p/original${poster_path}`,
            "center top"
          )}
          key={id}
          id={id}
        />
      ) : (
        <div
          className="backdrop-image"
          style={helpers.divStyle(
            `https://image.tmdb.org/t/p/original${backdrop_path}`,
            "center top"
          )}
          onClick={this.togglePoster}
          key={id}
          id={id}
        />
      );
    };

    const productionCompanies = () =>
      production_companies &&
      production_companies.map(
        (company, i) =>
          company.logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
              alt={company.name}
              key={i}
            />
          )
      );

    return (
      <section className="MoviePage">
        <section className="mp-primary-content">
          {posterToggle()}
          <div className="backdrop" />
          <aside>
            <section className="mp-movie-info">
              <h1>{original_title}</h1>
              <h3>{tagline}</h3>
              <div className="movie-support">
                <p>favorited</p>
                <p>Rating: {vote_average}</p>
                <p>Length: {runtime}</p>
              </div>
              <p>{overview}</p>
              <p>{status}</p>
              <p>Released: {release_date}</p>
              <p>Revenue: {revenue}</p>
              <p>Language: {original_language}</p>
            </section>
            <section className="production-companies">
              {productionCompanies()}
            </section>
          </aside>
        </section>
      </section>
    );
  }
}
