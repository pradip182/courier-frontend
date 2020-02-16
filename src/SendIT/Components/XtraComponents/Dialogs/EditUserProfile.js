import React from 'react';
import { connect } from 'react-redux';

import { hideEditUserProfileDialog } from '../../../actions/dialogs';
import '../../../CSS/dialog_admin.css';

class EditUserProfile extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showPassField: false
    };
  };
  
  render() {
    const { props } = this
    return (
      <div className='dlg-wrapper-prof'>
        <div className='dlg-box-prof'>
          <div className='dlg-header'>
            <span>Edit Profile</span>
          </div>
          <div className='dlg-body'>
            <div>
              <span>Username:</span>
              <br />
              <input type='text' name='username' id='username' />
              <br />
              <span>Email:</span>
              <br />
              <input type='text' name='email' id='email' />
              <br />
            </div>
            <div>
              <span>Address: </span>
              <br />
              <input type='text' name='address' id='address' />
              <br />
              <span>Phone:</span>
              <br />
              <input type='text' name='phone' id='phone' />
              <br />
            </div>
            <span id='error-one' />

            <span>
              <span id='change-pass-text' onClick={()=>this.setState({ showPassField: true })}>Change Password</span>
            </span>
            <div id='change-passord' style={{ display: this.state.showPassField ? 'block' : 'none' }}>
              <span>Old Password: </span>
              <input type='password' name='old-password' id='old-password' />
              <br />
              <span>New Password: </span>
              <input type='password' name='new-password' id='new-password' />
              <br />
              <span>Confirm Password: </span>
              <input
                type='password'
                name='confirm-password'
                id='confirm-password'
              />
              <br />
            </div>
          </div>
          <div className='dlg-footer'>
            <button className='btn_n save' onClick={() => onSave(props)}>
              Save
            </button>
            <button className='btn_n cancel' onClick={() => onCancel(props)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const onSave = props => {
  props.hideEditUserProfileDialog();
};

const onCancel = props => {
  props.hideEditUserProfileDialog();
};

export default connect(
  null,
  { hideEditUserProfileDialog }
)(EditUserProfile);
