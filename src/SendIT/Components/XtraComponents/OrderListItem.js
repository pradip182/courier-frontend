import React from 'react';
import { connect } from 'react-redux';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

import {
  showChangeLocationDialog,
  showDeleteOrderDialog,
} from '../../actions/dialogs';

const onEdit = props => {
  props.showChangeLocationDialog();
};

const onDelete = props => {
  props.showDeleteOrderDialog();
}

const OrderListItem = props => {
  if (props.status === 'Not Delivered') {
    return (
      <div className='list-item item-not-delivered'>
        <div className='list-col'>{props.orderid}</div>
        <div className='list-col'>{props.from}</div>
        <div className='list-col'>{props.to}</div>
        <div className='list-col'>{props.weight}</div>
        <div className='list-col'>{props.price}</div>
        <div className='list-col not'>{props.status}</div>
        <div className='list-col-icon'>
          <span className='icon-style trash' onClick={() => onEdit(props)}>
            <FaEdit className='fa-edit' style={iconStyle} />
          </span>
          <span className='icon-style trash' onClick={() => onDelete(props)}>
            <FaRegTrashAlt className='fa-trash' style={iconStyle} />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className='list-item item-delivered'>
        <div className='list-col'>{props.orderid}</div>
        <div className='list-col'>{props.from}</div>
        <div className='list-col'>{props.to}</div>
        <div className='list-col'>{props.weight}</div>
        <div className='list-col'>{props.price}</div>
        <div className='list-col yeah'>{props.status}</div>
        <div className='list-col-icon'>
          <span className='icon-style trash' onClick={() => onEdit(props)}>
            <FaEdit className='fa-edit' style={iconStyle} />
          </span>
          <span className='icon-style trash' onClick={() => onDelete(props)}>
            <FaRegTrashAlt className='fa-trash' style={iconStyle} />
          </span>
        </div>
      </div>
    );
  }
};

const iconStyle = {
  fontSize: 14,
  cursor: 'pointer',
};

export default connect(
  null,
  { showChangeLocationDialog, showDeleteOrderDialog }
)(OrderListItem);
