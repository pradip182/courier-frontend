import {
  SHOW_MAKE_ORDER_DIALOG,
  HIDE_MAKE_ORDER_DIALOG,
  SHOW_EDIT_ORDER_DIALOG,
  HIDE_EDIT_ORDER_DIALOG,
  SHOW_CHANGE_LOCATION_DIALOG,
  HIDE_CHANGE_LOCATION_DIALOG,
  SHOW_DELETE_ORDER_DIALOG,
  HIDE_DELETE_ORDER_DIALOG,
  SHOW_USER_ACTIVATION_DIALOG,
  HIDE_USER_ACTIVATION_DIALOG,
  SHOW_USER_PROFILE_DIALOG,
  HIDE_USER_PROFILE_DIALOG,
  SHOW_EDIT_USER_PROFILE_DIALOG,
  HIDE_EDIT_USER_PROFILE_DIALOG,
  SHOW_SPECIFIC_USER_PROFILE_DIALOG,
  HIDE_SPECIFIC_USER_PROFILE_DIALOG,
  SHOW_SEND_MAIL_DIALOG,
  HIDE_SEND_MAIL_DIALOG
} from '../actions/types';

const initialState = {
  makeOrderDialog: false,
  editOrderDialog: false,
  changeLocationDialog: false,
  deleteOrderDialog: false,
  userActivationDialog: false,
  displayUserProfileDialog: false,
  editUserProfileDialog: false,
  specificUserProfileDialog: false,
  sendMailDialog: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MAKE_ORDER_DIALOG:
      return { ...state, makeOrderDialog: true };

    case HIDE_MAKE_ORDER_DIALOG:
      return { ...state, makeOrderDialog: false };

    case SHOW_EDIT_ORDER_DIALOG:
      return { ...state, editOrderDialog: true };

    case HIDE_EDIT_ORDER_DIALOG:
      return { ...state, editOrderDialog: false };

    case SHOW_CHANGE_LOCATION_DIALOG:
      return { ...state, changeLocationDialog: true };

    case HIDE_CHANGE_LOCATION_DIALOG:
      return { ...state, changeLocationDialog: false };

    case SHOW_DELETE_ORDER_DIALOG:
      return { ...state, deleteOrderDialog: true };
    
    case HIDE_DELETE_ORDER_DIALOG:
      return { ...state, deleteOrderDialog: false }

    case SHOW_USER_ACTIVATION_DIALOG:
      return { ...state, userActivationDialog: true }

    case HIDE_USER_ACTIVATION_DIALOG:
      return { ...state, userActivationDialog: false }

    case SHOW_USER_PROFILE_DIALOG:
      return { ...state, displayUserProfileDialog: true }

    case HIDE_USER_PROFILE_DIALOG:
      return { ...state, displayUserProfileDialog: false }

    case SHOW_SPECIFIC_USER_PROFILE_DIALOG:
      return { ...state, specificUserProfileDialog: true }    
    
    case HIDE_SPECIFIC_USER_PROFILE_DIALOG:
      return { ...state, specificUserProfileDialog: false }

    case SHOW_EDIT_USER_PROFILE_DIALOG:
      return { ...state, editUserProfileDialog: true }

    case HIDE_EDIT_USER_PROFILE_DIALOG:
      return { ...state, editUserProfileDialog: false }

    case SHOW_SEND_MAIL_DIALOG:
      return { ...state, sendMailDialog: true }

    case HIDE_SEND_MAIL_DIALOG:
      return { ...state, sendMailDialog: false }
      
    default:
      return state;
  }
};
