import React from 'react';
import { connect } from 'react-redux';
import { hideDeleteOrderDialog } from '../../../actions/dialogs';

import '../../../CSS/dialog_admin.css';

const onDelete = props => {
  props.hideDeleteOrderDialog()
}

const DeleteOrderDialog = props => (
  <div className='dlg-wrapper'>
    <div className='dlg-box'>
      <div className='dlg-header'>Confirm Deletion of Order</div>
      <div className='dlg-body'>
        Are you sure, you want to delete this order?
      </div>
      <div className='dlg-footer'>
        <button className='btn_n' onClick={()=>onDelete(props)}>No</button>
        <button className='btn_n a' onClick={()=>onDelete(props)}>Yes</button>
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { hideDeleteOrderDialog }
)(DeleteOrderDialog);
