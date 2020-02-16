import React from 'react';
import { connect } from 'react-redux';
import { hideUserActivationDialog } from '../../../actions/dialogs';

import '../../../CSS/dialog_admin.css';

const onCancel = props => {
  props.hideUserActivationDialog()
}

const onAgree = props => {
  props.hideUserActivationDialog()
}

const UserActivationDialog = props => (
  <div className='dlg-wrapper'>
    <div className='dlg-box'>
      <div className='dlg-header'>
        Confirm Deactivation <span />
      </div>
      <div className='dlg-body'>
        Are you sure you want to deactivate this account?
      </div>
      <div className='dlg-footer'>
        <button className='btn_n' onClick={() => onCancel(props)}>No</button>
        <button className='btn_n a' onClick={() => onAgree(props)}>Yes</button>
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { hideUserActivationDialog }
)(UserActivationDialog);
