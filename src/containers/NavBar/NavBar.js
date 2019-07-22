import React, { Component } from "react";
import "./NavBar.scss";
import * as apiCalls from "../../api/apiCalls";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logoutUser, addPopularMovies, addRomanceMovies } from "../../actions";

export class NavBar extends Component {
  state = {
    opacity: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      let scroll = {
        y: supportPageOffset
          ? window.pageYOffset
          : isCSS1Compat
          ? document.documentElement.scrollTop
          : document.body.scrollTop
      };
      scroll.y > 5
        ? this.setState({ opacity: true })
        : this.setState({ opacity: false });
    });
  }

  handleClick = async () => {
    this.props.logoutUser();
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
  };

  render() {
    const { loggedIn } = this.props;
    const returnToMain = () => {
      console.log(this.props.location.pathname);
      if (this.props.location.pathname === "/moviepage")
        return <NavLink to="/mainpage">Main</NavLink>;
    };
    return (
      <nav className={`NavBar ${this.state.opacity ? "solid" : "transparent"}`}>
        <div>
          <h3>PIXAMA</h3>
          {this.props.location.pathname === "/moviepage" && (
            <NavLink to="/">Main</NavLink>
          )}
          {loggedIn ? (
            <p onClick={this.handleClick}>Logout</p>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.currentUser.loggedIn
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addPopularMovies, addRomanceMovies, logoutUser },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
