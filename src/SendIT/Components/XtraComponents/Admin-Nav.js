import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../Images/nav_logo.png';

export default ({ navStyle, match }) => (
  <nav style={navStyle}>
    <NavLink to={match.url}>
      <img src={Logo} className='logo' alt='Logo' />
    </NavLink>
    <button className='menu'>
      <i className='fa fa-bars' />
    </button>
    <div className='dropdown-two'>
      <span>
        <NavLink to={`${match.url}/make-order`} activeClassName='active-link'>
          Home
        </NavLink>
      </span>
      <span>
        <NavLink to={`${match.url}/manage-users`} activeClassName='active-link'>
          Manage Users
        </NavLink>
      </span>
      <span>
        <NavLink to={`${match.url}/manage-orders`} activeClassName='active-link'>
          Manage Orders
        </NavLink>
      </span>
      <span>
        <NavLink to='/home/admin-login' className='signout'>
          Signout
        </NavLink>
      </span>
    </div>
    <ul>
      <li>
        <NavLink to={`${match.url}/make-order`} activeClassName='active-link'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/manage-users`} activeClassName='active-link'>
          Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink to={`${match.url}/manage-orders`} activeClassName='active-link'>
          Manage Orders
        </NavLink>
      </li>
      <li>
        <NavLink to='/home/admin-login' className='signout'>
          Signout
        </NavLink>
      </li>
    </ul>
  </nav>
);
