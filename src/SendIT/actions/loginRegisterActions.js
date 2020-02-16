import {
  USER_EMAIL_CHANGED,
  USER_PASSWORD_CHANGED,
  ADMIN_EMAIL_CHANGED,
  ADMIN_PASSWORD_CHANGED,
  REGISTER_FIRSTNAME_CHANGED,
  REGISTER_LASTNAME_CHANGED,
  REGISTER_EMAIL_CHANGED,
  REGISTER_PHONE_CHANGED,
  REGISTER_PASSWORD_CHANGED,
  REGISTER_CONFIRM_PASSWORD_CHANGED,
} from './types';

export const userEmailChanged = email => {
  return {
    type: USER_EMAIL_CHANGED,
    payload: email,
  };
};

export const userPasswordChanged = password => {
  return {
    type: USER_PASSWORD_CHANGED,
    payload: password,
  };
};

export const adminEmailChanged = email => {
  return {
    type: ADMIN_EMAIL_CHANGED,
    payload: email,
  };
};

export const adminPasswordChanged = password => {
  return {
    type: ADMIN_PASSWORD_CHANGED,
    payload: password,
  };
};

export const registerFnameChanged = fname => {
  return {
    type: REGISTER_FIRSTNAME_CHANGED,
    payload: fname,
  };
};

export const registerLnameChanged = lname => {
  return {
    type: REGISTER_LASTNAME_CHANGED,
    payload: lname,
  };
};

export const registerEmailChanged = email => {
  return {
    type: REGISTER_EMAIL_CHANGED,
    payload: email,
  };
};

export const registerPhoneChanged = phone => {
  return {
    type: REGISTER_PHONE_CHANGED,
    payload: phone,
  };
};

export const registerPasswordChanged = password => {
  return {
    type: REGISTER_PASSWORD_CHANGED,
    payload: password,
  };
};

export const registerConfPasswordChanged = conf_Password => {
  return {
    type: REGISTER_CONFIRM_PASSWORD_CHANGED,
    payload: conf_Password,
  };
};
