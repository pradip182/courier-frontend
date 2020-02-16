import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FaHandPointLeft } from 'react-icons/fa';

import LoginAdmin from './Login-admin';
import Register from './Register';
import Login from './Login';

import '../../CSS/Login.css';
import Logo from '../../Images/nav_logo.png';

class App extends Component {
  chooseLink = (pathname) => {
    if (pathname === '/home/login') {
      return (
        <div>
          <p className='message'>
            Not Registered?{' '}
            <Link to='/home/register' className='link'>
              Register
            </Link>
          </p>
          <p className='message-admin'>
            Switch To{' '}
            <Link to='/home/admin-login' className='link'>
              Admin
            </Link>
          </p>
        </div>
      );
    } else if (pathname === '/home/register') {
      return (
        <p className='message'>
          Already Registered?{' '}
          <Link to='/home/login' className='link'>
            Login
          </Link>
        </p>
      );
    } else if (pathname === '/home/admin-login') {
      return (
        <p className='message'>
          <Link to='/home/login' className='link'>
            <FaHandPointLeft /> Go Back
          </Link>
        </p>
      );
    }
  };

  render() {
    const { match } = this.props;
    const { pathname } = this.props.location
    return (
      <div className='contain'>
        <div className='login-page'>
          <div className='form'>
            <Link to={`${match.url}/login`}>
              <img src={Logo} className='logo' alt='Logo' />
            </Link>

            <div>
              <Route path={`${match.path}/login`} component={Login} />
              <Route path={`${match.path}/register`} component={Register} />
              <Route
                path={`${match.path}/admin-login`}
                component={LoginAdmin}
              />
            </div>
            {this.chooseLink(pathname)} 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
