import React, { Component } from "react";
import './LoginCard.scss'
import { fetchUser } from "../../api/apiCalls";


 class LoginCard extends Component {
  state = {
    email: '',
    password: '',
    userInfo: {},
    error: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


onSubmit = async() => {
let userData = {email: this.state.email, password: this.state.password}

try {
  const userInfo = await fetchUser('http://localhost:3000/api/users', userData)
  this.setState(userInfo)
  console.log(this.state.data)
}catch (error) {
 this.setState({ error })
}

this.clearForm()
}


clearForm = () => {
  this.setState({
    email: '',
    password: ''
  })
}

  render() {
    return (
      <form className="login-card">
        <input onChange={this.handleChange} name="email" value={this.state.email} type="text" placeholder="Email"/>
        <input onChange={this.handleChange}name="password" value ={this.state.password} type="text" placeholder="Password"/>
        <button type="button" onClick={this.onSubmit}>Login</button>
      </form>
    );
  }

}




export default LoginCard;
