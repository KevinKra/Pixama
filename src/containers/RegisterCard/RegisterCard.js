import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../../actions"
import { fetchUser, fetchNewUser } from '../../api/apiCalls';
import { NavLink } from "react-router-dom";

class RegisterCard extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    error: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async () => {
    let newUserData = { name: this.state.name, email: this.state.email, password: this.state.password };
    let userData = { email: this.state.email, password: this.state.password };
    const newUserUrl = "http://localhost:3000/api/users/new";
    const userUrl ="http://localhost:3000/api/users";
    
    try {
      await fetchNewUser(newUserUrl, newUserData);
      const user = await fetchUser(userUrl, userData);
      this.props.loginUser(user.data);
    } catch (error) {
      this.setState({ error });
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

  render() {
    return (
      <form className="login-card register-card">
      <input
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
          type="text"
          placeholder="Name"
        />
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
            Register
          </button>
        </NavLink>
      </form>
    );
  }
};

export const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch( loginUser(user) )
});

export default connect(null, mapDispatchToProps)(RegisterCard);
