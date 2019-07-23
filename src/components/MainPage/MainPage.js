import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MainPage.scss";
import * as apiCalls from "../../api/apiCalls";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";
import { addPopularMovies, addRomanceMovies, updateFavorites } from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export class MainPage extends Component {
  async componentDidMount() {
    const popularMovies = await apiCalls.fetchMovies("");
    const romanceMovies = await apiCalls.fetchMovies(
      "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749"
    );
    Promise.all([popularMovies, romanceMovies]).then(allMovies => {
      allMovies.forEach((genre, index) => {
        const cleanedGenre = genre.map(movie => {
          return { ...movie, isFavorite: false };
        });
        switch (index) {
          case 0:
            this.props.addPopularMovies(cleanedGenre);
            break;
          case 1:
            this.props.addRomanceMovies(cleanedGenre);
            break;
          default:
            return null;
        }
      });
    });
  }

  render() {
    return (
      <section className="MainPage">
        <HeroImage />
        <section className="main-body">
          {this.props.favorites.length > 0 && (
            <Carousel title="Favorites" genre="favorites" />
          )}
          <Carousel title="Popular Movies" genre="popularMovies" />
          <Carousel title="Romance Movies" genre="romanceMovies" />
        </section>
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ addPopularMovies, addRomanceMovies, updateFavorites }, dispatch);

MainPage.proptyes = {
  popularMovies: PropTypes.array,
  romanceMovies: PropTypes.array,
  favorites: PropTypes.array,
  addPopularMovies: PropTypes.func,
  addRomanceMovies: PropTypes.func,
  updateFavorites: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
