import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../XtraComponents/SearchBox';
import SpecificUserProfile from '../XtraComponents/Specific-User-Profile';
import SendMailDialog from '../XtraComponents/Dialogs/SendMailDialog';

class ManageSpecificUserOrders extends Component {
  render() {
    return (
      <div>
        {this.props.dialog ? <SendMailDialog /> : <div />}
        <div className='order-list'>
          <SpecificUserProfile />
          <SearchBox placeholder='Search by OrderId' />
          <ListHeader />
          <div id='loader' />
          <div id='none'>No orders currently available</div>
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
    dialog: state.dialogs.sendMailDialog,
  };
}

export default connect(
  mapStateToProps,
  null
)(ManageSpecificUserOrders);
