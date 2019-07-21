import React, { Component } from "react";
import * as apiCalls from "../../api/apiCalls";
import "./MoviePage.scss";

export default class MoviePage extends Component {
  state = {
    movie: {}
  };
  async componentDidMount() {
    const movie = await apiCalls.fetchFightClub();
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
          <aside>
            <div>
              <h1>{original_title}</h1>
              <h3>{tagline}</h3>
              <p>favorited</p>
              <p>{overview}</p>
              <p>{status}</p>
              <p>length {runtime}</p>
              <p>Released: {release_date}</p>
              <p>{revenue}</p>
              <p>{vote_average}</p>
              <p>{original_language}</p>
              <a href={homepage} />
            </div>
            <section className="production-companies">
              {production_companies &&
                production_companies.map(
                  company =>
                    company.logo_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w45${
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
