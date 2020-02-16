import React from 'react';
import { connect } from 'react-redux';

import { hideEditOrderDialog } from '../../../actions/dialogs';
import '../../../CSS/dialog_admin.css';

const EditOrderDialog = props => (
  <div className='dlg-wrapper-edit'>
    <div className='dlg-box-edit'>
      <div className='dlg-header'>
        Order: <span>0182</span>
        <span style={{ float: 'right' }}>Date:</span>
      </div>
      <div className='dlg-body-edit'>
        <div>
          <span>From:</span>
          <select disabled id='from-edit'>
            <option>godawari,lalitpur</option>
          </select>
          <span> To:</span>
          <select id='to-edit'>
            <option value='lalitpur,godawari'>lalitpur,godawari</option>
            <option value='kathmandu,dillibazar'>kathmandu,dillibazar</option>
            <option value='pokhara,nepal'>pokhara,nepal</option>
          
            <option value='kathmandu,nepal'>
              kathmandu,nepal
            </option>
            <option value='lalitpur,nepal'>lalitpur,nepal</option>
          </select>
        </div>
        <div>
          <span>Weight (in Kg): </span>
          <input value='1.2' size='5' disabled id='weight-edit' />
          <span>Price (in USD):</span>
          <input value='32' size='5' disabled id='price-edit' />
        </div>
        <div>
          <span>Status: </span>
          <select id='status-edit'>
            <option>Not Delivered</option>
          </select>
        </div>
        <div>
          <span>Current location: </span>
          <input value='' disabled id='location-edit' />
        </div>
      </div>
      <div className='dlg-footer'>
        <button className='btn_n' onClick={() => props.hideEditOrderDialog()}>
          Cancel
        </button>
        <button className='btn_n' onClick={() => props.hideEditOrderDialog()}>
          Save
        </button>
        <button className='btn_n' onClick={() => props.hideEditOrderDialog()}>
          Cancel Order
        </button>
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { hideEditOrderDialog }
)(EditOrderDialog);
