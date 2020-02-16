import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  userEmailChanged,
  userPasswordChanged,
} from '../../actions/loginRegisterActions';

class Login extends Component {
  onChangeEmail = e => {
    const email = e.target.value;
    this.props.userEmailChanged(email);
  };

  onChangePassword = e => {
    const password = e.target.value;
    this.props.userPasswordChanged(password);
  };

  render() {
    const { email, password } = this.props.user_login;
    return (
      <form>
        <input
          placeholder='Email'
          value={email}
          onChange={this.onChangeEmail.bind(this)}
        />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={this.onChangePassword.bind(this)}
        />
        <Link to='/user/make-order' className='btn'>
          Login
        </Link>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_login: state.loginRegister.user_login,
  };
}

export default connect(
  mapStateToProps,
  { userEmailChanged, userPasswordChanged }
)(Login);
