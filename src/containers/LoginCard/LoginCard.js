import React, { Component } from "react";
import "./LoginCard.scss";
import { fetchUser, fetchFavorites } from "../../api/apiCalls";
import { connect } from "react-redux";
import { loginUser, updateRomanceFavorites, updatePopularFavorites} from "../../actions";
import { NavLink } from "react-router-dom";

export class LoginCard extends Component {
  state = {
    email: "",
    password: "",
    error: ""
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
      console.log('LOGINCARD', favorites)
      const favoriteIDs = favorites.data.map(favorite => favorite.movie_id)
      console.log(favoriteIDs)
      favoriteIDs.forEach(id => {
        const popularFavorites = this.props.popularMovies.map(movie => {
          
          if(movie.id === id) {
            return{...movie, isFavorite: true}
          } else {
            return movie
          }
        })   
        const romanceFavorites = this.props.romanceMovies.map(movie => {
          if(movie.id === id) {
            return {...movie, isFavorite: true}
          } else {
            return movie
          }
        }) 
        this.props.updatePopularFavorites(popularFavorites)
        this.props.updateRomanceFavorites(romanceFavorites)  
      })
      
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

  render() {
    return (
      <form className="login-card">
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
        {/* {this.state.error && <p>{this.state.error}. Please try again.</p>} */}
        <NavLink to="/">
          <button className="submit-button" type="button" onClick={this.onSubmit}>
            Login
          </button>
        </NavLink>
        <NavLink to="/register">Don't have an account? Register here.</NavLink>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  popularMovies: state.popularMovies,
  romanceMovies: state.romanceMovies
})

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  updatePopularFavorites: popularFavorites => dispatch(updatePopularFavorites(popularFavorites )),
  updateRomanceFavorites: romanceFavorites => dispatch(updateRomanceFavorites(romanceFavorites))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCard);
