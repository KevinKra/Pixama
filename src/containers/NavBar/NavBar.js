import React, { Component } from "react";
import "./NavBar.scss";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../actions";

class NavBar extends Component {
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

  render() {
    const { currentUser, logoutUser, loggedIn } = this.props;
    return (
      <nav className={`NavBar ${this.state.opacity ? "solid" : "transparent"}`}>
        <div>
          <h3>PIXAMA</h3>
          {loggedIn ? (
            <p onClick={logoutUser}>Logout</p>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          {/* {!currentUser && <NavLink to="/login">Login</NavLink>} */}
        </div>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({
  loggedIn: state.currentUser.loggedIn
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
