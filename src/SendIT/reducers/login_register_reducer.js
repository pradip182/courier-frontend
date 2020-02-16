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
} from '../actions/types';

const initialState = {
  user_login: {
    email: '',
    password: '',
  },
  admin_login: {
    email: '',
    password: '',
  },
  register: {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_EMAIL_CHANGED:
      return {
        ...state,
        user_login: {
          ...state.user_login,
          email: action.payload,
        },
      };

    case USER_PASSWORD_CHANGED:
      return {
        ...state,
        user_login: {
          ...state.user_login,
          password: action.payload,
        },
      };

    case ADMIN_EMAIL_CHANGED:
      return {
        ...state,
        admin_login: {
          ...state.admin_login,
          email: action.payload,
        },
      };

    case ADMIN_PASSWORD_CHANGED:
      return {
        ...state,
        admin_login: {
          ...state.admin_login,
          password: action.payload,
        },
      };

    case REGISTER_FIRSTNAME_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          firstname: action.payload,
        },
      };

    case REGISTER_LASTNAME_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          lastname: action.payload,
        },
      };

    case REGISTER_EMAIL_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          email: action.payload,
        },
      };

    case REGISTER_PHONE_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          phone: action.payload,
        },
      };

    case REGISTER_PASSWORD_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          password: action.payload,
        },
      };

      case REGISTER_CONFIRM_PASSWORD_CHANGED:
      return {
        ...state,
        register: {
          ...state.register,
          confirm_password: action.payload,
        },
      };

    default:
      return state;
  }
};
