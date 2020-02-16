import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  adminEmailChanged,
  adminPasswordChanged,
} from '../../actions/loginRegisterActions';

class LoginAdmin extends Component {
  emailChanged = e => {
    const email = e.target.value;
    this.props.adminEmailChanged(email);
  };

  passwordChanged = e => {
    const password = e.target.value;
    this.props.adminPasswordChanged(password);
  };

  render() {
    const { email, password } = this.props.admin_login;
    return (
      <form>
        <h2 style={{ fontWeight: 100, margin: 0, fontSize: 16 }}>Admin</h2>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={this.emailChanged.bind(this)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={this.passwordChanged.bind(this)}
        />
        <Link to='/admin/make-order' className='btn'>
          Login
        </Link>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin_login: state.loginRegister.admin_login,
  };
}

export default connect(
  mapStateToProps,
  { adminEmailChanged, adminPasswordChanged }
)(LoginAdmin);
