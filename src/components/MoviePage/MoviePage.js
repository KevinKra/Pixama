import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";
import API_KEY from "../../api/apikey";
import "./MoviePage.scss";

export default class MoviePage extends Component {
  state = {
    movie: {}
  };

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

  divStyle = (image, position) => {
    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
  };
  render() {
    const {
      poster_path,
      overview,
      original_title,
      original_language,
      release_date,
      runtime,
      status,
      revenue,
      homepage,
      tagline,
      vote_average,
      production_companies
    } = this.state.movie;
    return (
      <section className="MoviePage">
        <section className="mp-primary-content">
          <div
            className="poster-image"
            style={this.divStyle(
              `https://image.tmdb.org/t/p/original${poster_path}`,
              "center top"
            )}
          />
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
              <a href={homepage} />
            </section>
            <section className="production-companies">
              {production_companies &&
                production_companies.map(
                  company =>
                    company.logo_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${
                          company.logo_path
                        }`}
                        alt={company.name}
                      />
                    )
                )}
            </section>
          </aside>
        </section>
      </section>
    );
  }
}
