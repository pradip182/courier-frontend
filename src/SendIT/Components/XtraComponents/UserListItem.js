import React from 'react';
import { connect } from 'react-redux';
import { FaEye, FaUserTimes, FaUserCheck } from 'react-icons/fa';

import { showUserActivationDialog } from '../../actions/dialogs';

const onActivate = props => {
  props.showUserActivationDialog();
};

const viewSpecificUserOrders = props => {
  props.historyObj.push('/admin/manage-specific-user-orders');
};

const UserListItem = props => {
  if (props.status === 'Active') {
    return (
      <div className='list-item item-active'>
        <div className='list-col'>{props.userid}</div>
        <div className='list-col'>{props.name}</div>
        <div className='list-col'>{props.address}</div>
        <div className='list-col'>{props.email}</div>
        <div className='list-col'>{props.sent}</div>
        <div className='list-col yeah'>{props.status}</div>
        <div className='list-col-icon'>
          <span className='icon-style trash'>
            <FaUserTimes
              className='fa-user-times'
              style={iconStyle}
              onClick={() => onActivate(props)}
            />
          </span>
          <span className='icon-style trash'>
            <FaEye
              className='fa-eye'
              style={iconStyle}
              onClick={() => viewSpecificUserOrders(props)}
            />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='list-item item-not-active'>
        <div className='list-col'>{props.userid}</div>
        <div className='list-col'>{props.name}</div>
        <div className='list-col'>{props.address}</div>
        <div className='list-col'>{props.email}</div>
        <div className='list-col'>{props.sent}</div>
        <div className='list-col not'>{props.status}</div>
        <div className='list-col-icon'>
          <span className='icon-style trash'>
            <FaUserCheck
              className='fa-user-check'
              style={iconStyle}
              onClick={() => onActivate(props)}
            />
          </span>
          <span className='icon-style trash'>
            <FaEye
              className='fa-eye'
              style={iconStyle}
              onClick={() => viewSpecificUserOrders(props)}
            />
          </span>
        </div>
      </div>
    );
  }
};

const iconStyle = {
  fontSize: 15,
  cursor: 'pointer',
};

function mapStateToProps(state) {
  return {
    historyObj: state.history.history,
  };
}

export default connect(
  mapStateToProps,
  { showUserActivationDialog }
)(UserListItem);
