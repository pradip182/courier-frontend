import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showEditOrderDialog } from '../../actions/dialogs';

import UserOrderList from '../XtraComponents/UserOrderList';
import SearchBox from '../../Components/XtraComponents/SearchBox';
import EditOrderDialog from '../../Components/XtraComponents/Dialogs/EditOrderDialog';
import UserProfile from '../../Components/XtraComponents/User-Profile';
import EditUserProfile from '../XtraComponents/Dialogs/EditUserProfile';

import '../../CSS/Orders.css';

class Orders extends Component {
  render() {
    const { editUserProfileDialog, editOrderDialog } = this.props.dialog;
    return (
      <div>
        {editUserProfileDialog ? <EditUserProfile /> : <div />}
        {editOrderDialog ? <EditOrderDialog /> : <div />}
        <div className='order-list'>
          <UserProfile />
          <SearchBox placeholder='Search by Order Id' />
          <ListHeader />
          <UserOrderList />
        </div>
      </div>
    );
  }
}

//............ List Header Component ..........//

const ListHeader = () => (
  <div className='header'>
    <div className='hdr-item'>OrderId</div>
    <div className='hdr-item'>From</div>
    <div className='hdr-item'>
      <span className='to'>To</span>
      <span className='dest'>Destination</span>
    </div>
    <div className='hdr-item'>
      Weight <span className='kg'>(in kg)</span>
    </div>
    <div className='hdr-item'>Price (USD)</div>
    <div className='hdr-item'>
      <div className='status'>
        <button>
          Status
          <i className='fa fa-caret-down' />
        </button>
        <ul className='dropdown'>
          <li className='all'>All Orders</li>
          <li className='delivered'>Delivered</li>
          <li className='not-delivered'>Not Delivered</li>
        </ul>
      </div>
    </div>
  </div>
);
//.........................................................//

function mapStateToProps(state) {
  return {
    dialog: state.dialogs,
  };
}

export default connect(
  mapStateToProps,
  { showEditOrderDialog }
)(Orders);
