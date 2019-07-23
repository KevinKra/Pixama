import React, { Component } from "react";
import PropTypes from "prop-types"; 
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { fetchUser, fetchNewUser } from "../../api/apiCalls";
import { Redirect } from "react-router-dom";
import { curatedData } from "../../_assets/curatedHeroData";

export class RegisterCard extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    error: "",
    redirect: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async () => {
    let newUserData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    let userData = { email: this.state.email, password: this.state.password };
    const newUserUrl = "http://localhost:3000/api/users/new";
    const userUrl = "http://localhost:3000/api/users";

    try {
      await fetchNewUser(newUserUrl, newUserData);
      const user = await fetchUser(userUrl, userData);
      this.props.loginUser(user.data);
      this.setState({ redirect: true });
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      email: "",
      password: "",
      name: ""
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const divStyle = (image, position) => {
      return {
        backgroundImage: `url(${image})`,
        backgroundPosition: position,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
    };
    const movie = curatedData[4];
    return (
      <section className="LoginContent">
        <div
          className="hero-image"
          style={divStyle(
            `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            "center top"
          )}
        />
        <div className="opacity-filter" />
        <form className="login-card">
          <h2 className="login-card-title">Register an Account</h2>
          {this.renderRedirect()}
          <input
            className="register-name-input"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            type="text"
            placeholder="Name"
            autoComplete="off"
            required="true"
          />
          <input
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Email"
            autoComplete="off"
            required="true"
          />
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Password"
            autoComplete="off"
            required="true"
          />
          {this.state.error && (
            <p className="login-error-text">
              {this.state.error}. Please try again.
            </p>
          )}

          <button className="register-submit-btn" type="button" onClick={this.onSubmit}>

            Register
          </button>
        </form>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

RegisterCard.propTypes = {
  loginUser: PropTypes.func 
}

export default connect(
  null,
  mapDispatchToProps
)(RegisterCard);
