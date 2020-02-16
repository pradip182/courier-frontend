import React from 'react';
import { connect } from 'react-redux';

import {
  showSpecificUserProfileDialog,
  hideSpecificUserProfileDialog,
  showSendMailDialog,
} from '../../actions/dialogs';
import ProfilePic from '../../Images/DefaultProfileImage.png';
import '../../CSS/Userprofile.css';

const onProfileClick = props => {
  props.displayDialog
    ? props.hideSpecificUserProfileDialog()
    : props.showSpecificUserProfileDialog();
};

const onSendMail = props => {
  props.showSendMailDialog()
};

const SpecificUserProfileDialog = props => (
  <div id='profile-container'>
    <div id='inner'>
      <img
        src={ProfilePic}
        alt='Profile'
        className='profile'
        id='profile'
        title='Click to View Profile'
        onClick={() => onProfileClick(props)}
      />
      <div
        id='profile-dialog'
        className='profile-dialog'
        style={{ display: props.displayDialog ? 'block' : 'none' }}
      >
        <h3>Profile</h3>
        <span className='dlg-inner'>
          Name: <span id='dlg-name'>pradip, acharya</span>
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          Email: <span id='dlg-email'>hellocourier@gmail.com</span>
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          address: <span id='dlg-address'>lalitpur, godawari</span>
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          Phone: <span id='dlg-phone'>9841152634</span>
        </span>{' '}
        <br />
        <span>
          <span id='dlg-edit' onClick={() => onSendMail(props)}>Send Mail</span>
        </span>
        <hr />
        <span className='dlg-inner'>
          Delivered: <span id='dlg-deli' />
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          In Transit: <span id='dlg-intran' />
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          Not Delivered: <span id='dlg-notdeli' />
        </span>{' '}
        <br />
        <span className='dlg-inner'>
          Cancelled: <span id='dlg-canc' />
        </span>{' '}
        <br />
      </div>
    </div>
    <div id='other'>
      <span id='profile-name'>
        Name: <span />
      </span>
      <br />
      <span id='profile-orders'>
        Orders: <span />
      </span>
      <br />
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    displayDialog: state.dialogs.specificUserProfileDialog,
  };
}

export default connect(
  mapStateToProps,
  {
    showSpecificUserProfileDialog,
    hideSpecificUserProfileDialog,
    showSendMailDialog,
  }
)(SpecificUserProfileDialog);
