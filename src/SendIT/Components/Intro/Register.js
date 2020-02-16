import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  registerFnameChanged,
  registerLnameChanged,
  registerEmailChanged,
  registerPhoneChanged,
  registerPasswordChanged,
  registerConfPasswordChanged,
} from '../../actions/loginRegisterActions';

class Register extends Component {
  firstnameChanged = e => {
    const fname = e.target.value;
    this.props.registerFnameChanged(fname)
  };

  lastnameChanged = e => {
    const lname = e.target.value;
    this.props.registerLnameChanged(lname)
  };

  emailChanged = e => {
    const email = e.target.value;
    this.props.registerEmailChanged(email)
  };

  phoneChanged = e => {
    const phone = e.target.value;
    this.props.registerPhoneChanged(phone)
  };

  passwordChanged = e => {
    const password = e.target.value;
    this.props.registerPasswordChanged(password)
  };

  confirmPasswordChanged = e => {
    const confirm_password = e.target.value;
    this.props.registerConfPasswordChanged(confirm_password)
  };

  render() {
    const { firstname, lastname, email, phone, password, confirm_password } = this.props.register

    return (
      <form className='register-form'>
        <input
          placeholder='Firstname'
          value={firstname}
          onChange={this.firstnameChanged.bind(this)}
        />
        <input
          placeholder='Lastname'
          value={lastname}
          onChange={this.lastnameChanged.bind(this)}
        />
        <input placeholder='Email' value={email} onChange={this.emailChanged.bind(this)} />
        <input placeholder='Phone' value={phone} onChange={this.phoneChanged.bind(this)} />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={this.passwordChanged.bind(this)}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          value={confirm_password}
          onChange={this.confirmPasswordChanged.bind(this)}
        />
        <Link to='./login' className='btn'>
          Register
        </Link>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    register: state.loginRegister.register,
  };
}

export default connect(
  mapStateToProps,
  {
    registerFnameChanged,
    registerLnameChanged,
    registerEmailChanged,
    registerPhoneChanged,
    registerPasswordChanged,
    registerConfPasswordChanged,
  }
)(Register);
