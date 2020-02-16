import React from 'react';
import { connect } from 'react-redux';
import { hideSendMailDialog } from '../../../actions/dialogs';

import '../../../CSS/dialog_admin.css';

const onCancelEmail = props => {
  props.hideSendMailDialog();
};

const onSendEmail = props => {
  props.hideSendMailDialog();
};

const SendMailDialog = props => (
  <div className='dlg-wrapper-email'>
    <div className='dlg-box-email'>
      <div className='dlg-header'>Send Email</div>
      <div className='dlg-body'>
        <input type='text' name='subject' id='subject' placeholder='Subject' />{' '}
        <br />
        <span id='Error-msg' />
        <textarea name='body' id='body' cols='30' rows='6' placeholder='Body' />
      </div>
      <div className='dlg-footer'>
        <button
          className='btn_n'
          id='cancel-email-btn'
          onClick={() => onCancelEmail(props)}
        >
          Cancel
        </button>
        <button
          className='btn_n a'
          id='send-email-btn'
          onClick={() => onSendEmail(props)}
        >
          Send
        </button>
      </div>
    </div>
  </div>
);

export default connect(
  null,
  { hideSendMailDialog }
)(SendMailDialog);
