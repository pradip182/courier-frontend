import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../XtraComponents/UserList';
import SearchBox from '../XtraComponents/SearchBox';
import UserActivationDialog from '../XtraComponents/Dialogs/UserActivationDialog';

import '../../CSS/ManageUsers.css';

class ManageUsers extends Component {
  render() {
    return (
      <div>
        {this.props.dialog.userActivationDialog ? <UserActivationDialog /> : <div />}
        <div className='order-list'>
          <SearchBox placeholder='Search by Name' />
          <ListHeader />
          <UserList />
          <div id='loader' />
        </div>
      </div>
    );
  }
}

//................List Header Component...............//

const ListHeader = () => (
  <div className='header'>
    <div className='hdr-item'>UserId</div>
    <div className='hdr-item'>Name</div>
    <div className='hdr-item'>Address</div>
    <div className='hdr-item'>Email</div>
    <div className='hdr-item'>Sent</div>
    <div className='hdr-item'>
      <div className='status'>
        <button>
          Status
          <i className='fa fa-caret-down' />
        </button>
        <ul className='dropdown'>
          <li className='all'>All Users</li>
          <li className='active'>Active</li>
          <li className='not-active'>Not Active</li>
        </ul>
      </div>
    </div>
  </div>
);

//......................................................//

function mapStateToprops(state) {
  return {
    dialog: state.dialogs,
  };
}

export default connect(
  mapStateToprops,
  null
)(ManageUsers);
