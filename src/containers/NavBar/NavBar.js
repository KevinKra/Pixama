import React from "react";
import "./NavBar.scss";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../actions';

export function NavBar(props) {
  const { currentUser } = props.currentUser;
  
  return (
    <nav className="NavBar">
      <div>
        <h3>PIXAMA</h3>
        {currentUser && <p onClick={props.logoutUser}>Logout</p>}
        {!currentUser && <NavLink to="/login">Login</NavLink>}
      </div>
    </nav>
  );
};

export const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch( logoutUser() )
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
