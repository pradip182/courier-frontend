import React from 'react';
import { connect } from 'react-redux';
import {
  showEditOrderDialog,
  hideUserProfileDialog,
} from '../../actions/dialogs';

const onSelectOrder = props => {
  props.dialog.displayUserProfileDialog
    ? props.hideUserProfileDialog()
    : props.showEditOrderDialog();
};

const UserOrderListItem = props => {
  if (props.status === 'Not Delivered') {
    return (
      <div
        className='list-item item-not-delivered'
        onClick={() => onSelectOrder(props)}
      >
        <div className='list-col'>{props.orderid}</div>
        <div className='list-col'>{props.from}</div>
        <div className='list-col'>{props.to}</div>
        <div className='list-col'>{props.weight}</div>
        <div className='list-col'>{props.price}</div>
        <div className='list-col not'>{props.status}</div>
      </div>
    );
  } else if (props.status === 'Delivered') {
    return (
      <div
        className='list-item item-delivered'
        onClick={() => onSelectOrder(props)}
      >
        <div className='list-col'>{props.orderid}</div>
        <div className='list-col'>{props.from}</div>
        <div className='list-col'>{props.to}</div>
        <div className='list-col'>{props.weight}</div>
        <div className='list-col'>{props.price}</div>
        <div className='list-col yeah'>{props.status}</div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    dialog: state.dialogs,
  };
}

export default connect(
  mapStateToProps,
  { showEditOrderDialog, hideUserProfileDialog }
)(UserOrderListItem);
