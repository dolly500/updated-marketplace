import React, { Component } from 'react';
import styles from './Signup.module.css'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phonenumber: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., send a request to your backend
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 style={{textAlign: 'center'}}>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Full Name "
          />
          <input
            type="text"
            name="phonenumber"
            value={this.state.phonenumber}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button type="submit" style={{padding: '10px'}}>Sign Up</button><br></br> <br></br>
          <a href='/forgot-password'>Forgot Password</a>
        </form>
      </div>
    );
  }
}

export default SignUp;
