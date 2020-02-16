import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../XtraComponents/SearchBox';
import '../../CSS/ManageUsers.css';
import OrderList from '../XtraComponents/OrderList';
import ChangeLocationDialog from '../XtraComponents/Dialogs/ChangeLocationDialog';
import DeleteOrderDialog from '../XtraComponents/Dialogs/DeleteOrderDialog';

class ManageOrders extends Component {
  render() {
    return (
      <div>
        {this.props.dialog.changeLocationDialog ? <ChangeLocationDialog /> : <div />}
        {this.props.dialog.deleteOrderDialog ? <DeleteOrderDialog /> : <div />}
        <div className='order-list'>
          <SearchBox placeholder='Search by OrderId' />
          <ListHeader />
          <OrderList />
          <div id='loader' />
        </div>
      </div>
    );
  }
}

//................List Header Component...............//

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
          <li className='in-transit'>In Transit</li>
          <li className='not-delivered'>Not Delivered</li>
        </ul>
      </div>
    </div>
  </div>
);

//......................................................//

function mapStateToProps(state) {
  return {
    dialog: state.dialogs,
  };
}

export default connect(mapStateToProps, null)(ManageOrders);
