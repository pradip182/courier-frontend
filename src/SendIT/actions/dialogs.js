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
} from './types';

export const showMakeOrderDialog = () => {
  return {
    type: SHOW_MAKE_ORDER_DIALOG,
  };
};

export const hideMakeOrderDialog = () => {
  return {
    type: HIDE_MAKE_ORDER_DIALOG,
  };
};

export const showEditOrderDialog = () => {
  return {
    type: SHOW_EDIT_ORDER_DIALOG,
  };
};

export const hideEditOrderDialog = () => {
  return {
    type: HIDE_EDIT_ORDER_DIALOG,
  };
};

export const showChangeLocationDialog = () => {
  return {
    type: SHOW_CHANGE_LOCATION_DIALOG
  }
}

export const hideChangeLocationDialog = () => {
  return {
    type: HIDE_CHANGE_LOCATION_DIALOG
  }
}

export const showDeleteOrderDialog = () => {
  return {
    type: SHOW_DELETE_ORDER_DIALOG
  }
}

export const hideDeleteOrderDialog = () => {
  return {
    type: HIDE_DELETE_ORDER_DIALOG
  }
}

export const showUserActivationDialog = () => {
  return {
    type: SHOW_USER_ACTIVATION_DIALOG
  }
}

export const hideUserActivationDialog = () => {
  return {
    type: HIDE_USER_ACTIVATION_DIALOG
  }
}

export const showUserProfileDialog = () => {
  return {
    type: SHOW_USER_PROFILE_DIALOG
  }
}

export const hideUserProfileDialog = () => {
  return {
    type: HIDE_USER_PROFILE_DIALOG
  }
}

export const showEditUserProfileDialog = () => {
  return {
    type: SHOW_EDIT_USER_PROFILE_DIALOG
  }
}

export const hideEditUserProfileDialog = () => {
  return {
    type: HIDE_EDIT_USER_PROFILE_DIALOG
  }
}

export const showSpecificUserProfileDialog = () => {
  return {
    type: SHOW_SPECIFIC_USER_PROFILE_DIALOG
  }
}

export const hideSpecificUserProfileDialog = () => {
  return {
    type: HIDE_SPECIFIC_USER_PROFILE_DIALOG
  }
}

export const showSendMailDialog = () => {
  return {
    type: SHOW_SEND_MAIL_DIALOG
  }
}

export const hideSendMailDialog = () => {
  return {
    type: HIDE_SEND_MAIL_DIALOG
  }
}