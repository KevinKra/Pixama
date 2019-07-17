import React, { Component } from "react";
import "./LoginCard.scss";
import { fetchUser } from "../../api/apiCalls";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { NavLink } from 'react-router-dom';

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

    try {
      const user = await fetchUser(url, userData);
      this.props.loginUser(user.data);
    } catch (error) {
      this.setState({ error });
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
        <NavLink to="/">
          <button type="button" onClick={this.onSubmit}>
            Login
          </button>
        </NavLink>
      </form>
    );
  }
};

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch( loginUser(user) )
});

export default connect(null, mapDispatchToProps)(LoginCard);
