import React, { Component } from "react";
import "./LoginCard.scss";
import { fetchUser, fetchFavorites } from "../../api/apiCalls";
import { connect } from "react-redux";
import { loginUser, updateRomanceFavorites, updatePopularFavorites, updateFavorites } from "../../actions";
import { NavLink, Redirect } from "react-router-dom";


export class LoginCard extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    redirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async () => {
    let userData = { email: this.state.email, password: this.state.password };
    const url = "http://localhost:3000/api/users";
    let id;

    try {
      const user = await fetchUser(url, userData);
      id = user.data.id;
      this.props.loginUser(user.data);
    } catch (error) {
      console.log(error.message);
      this.setState({ error: error.message });
    }
    
    try {     
      const favorites = await fetchFavorites(`http://localhost:3000/api/users/${id}/favorites`);
      const favoriteIDs = favorites.data.map(favorite => favorite.movie_id);
      
      const popularFavorites = this.props.popularMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });
      this.props.updatePopularFavorites(popularFavorites);

      const romanceFavorites = this.props.romanceMovies.map(movie => {
        return favoriteIDs.includes(movie.id)
          ? { ...movie, isFavorite: true }
          : { ...movie, isFavorite: false };
      });
      this.props.updateRomanceFavorites(romanceFavorites);

      const allFavorites = [...popularFavorites, ...romanceFavorites].filter(movie => {
        return movie.isFavorite == true;
      });
      this.props.updateFavorites(allFavorites);
      this.setState({ redirect: true })
    } catch (error) {
      console.log(error.message)
      this.setState({ error: error.message });
    }
    this.clearForm();
    
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: ""
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {

    return (
      <form className="login-card">
        {this.renderRedirect()}
        <input
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          type="text"
          placeholder="Password"
        />
      {this.state.error && <p>{this.state.error}. Please try again.</p>}
          <button className="submit-button" type="button" onClick={this.onSubmit}>
            Login
          </button>
        <NavLink className="register-text" to="/register">Don't have an account? Register here.</NavLink>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies,
  favorites: state.favorites
})

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  updatePopularFavorites: popularFavorites => dispatch(updatePopularFavorites(popularFavorites )),
  updateRomanceFavorites: romanceFavorites => dispatch(updateRomanceFavorites(romanceFavorites)),
  updateFavorites: favorites => dispatch(updateFavorites(favorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCard);
