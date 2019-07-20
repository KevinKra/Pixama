import React, { Component } from "react";
import "./LoginCard.scss";
import { fetchUser, fetchFavorites } from "../../api/apiCalls";
import { connect } from "react-redux";
import { loginUser, getFavorites } from "../../actions";
import { NavLink } from "react-router-dom";

class LoginCard extends Component {
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
      this.props.getFavorites(favorites.data)
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
          <button type="button" onClick={this.onSubmit}>
            Login
          </button>
        </NavLink>
        <NavLink to="/register">Don't have an account? Register here.</NavLink>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  getFavorites: favorites => dispatch(getFavorites(favorites))
});

export default connect(
  null,
  mapDispatchToProps
)(LoginCard);
