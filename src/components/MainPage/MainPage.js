import React, { Component } from "react";

import "./MainPage.scss";
import * as apiCalls from "../../api/apiCalls";
import Carousel from "../Carousel/Carousel";
import HeroImage from "../HeroImage/HeroImage";
import { addPopularMovies, addRomanceMovies } from '../../actions';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 


export class MainPage extends Component {

  async componentDidMount() {
    const popularMovies = await apiCalls.fetchMovies('');
    const romanceMovies = await apiCalls.fetchMovies(
      '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749'
    );
    Promise.all([popularMovies, romanceMovies])
    .then(allMovies => {
      allMovies.forEach((genre, index) => {
        const cleanedGenre = genre.map(movie => {
          return {...movie, isFavorite: false};
        });
        switch(index) {
          case 0:
            this.props.addPopularMovies(cleanedGenre);
            break;
          case 1:
            this.props.addRomanceMovies(cleanedGenre);
            break;
          default:
            return null;
        };
      });
    });
  };

  render() {
    return (
      <section className="MainPage">
        <HeroImage />
        <section className="main-body">
          <Carousel title="Popular Movies" movies={this.props.popularMovies} />
          <Carousel title="Romance Movies" movies={this.props.romanceMovies} />
        </section>
      </section>
    );
  }
};

export const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ addPopularMovies, addRomanceMovies }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
