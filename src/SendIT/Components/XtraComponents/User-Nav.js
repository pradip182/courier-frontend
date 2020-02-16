import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../../Images/nav_logo.png';

const UserNav = ({ match, hist }) => (
  <nav>
    <NavLink to={`${match.url}/make-order`}>
      <img src={Logo} className='logo' alt='Logo' />
    </NavLink>
    <ul>
      <li>
        <NavLink activeClassName='active-link' to={`${match.url}/make-order`}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active-link' to={`${match.url}/orders`}>
          My Orders
        </NavLink>
      </li>
      <li>
        <NavLink to='/home/login' activeClassName='active-link' id='signout'>
          Signout
        </NavLink>
      </li>
    </ul>
  </nav>
);

function mapStateToProps(state) {
  return {
    hist: state.history,
  };
}

export default connect(
  mapStateToProps,
  null
)(UserNav);
