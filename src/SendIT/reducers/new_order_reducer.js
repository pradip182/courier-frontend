import { CHANGE_WEIGHT, CHANGE_FROM, CHANGE_TO } from '../actions/types';

const initialState = {
  from: 'godawari,lalitpur',
  to: 'pulchowk, lalitpur',
  weight: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WEIGHT:
      return { ...state, weight: action.payload };

    case CHANGE_TO:
      return { ...state, to: action.payload };

    case CHANGE_FROM:
      return { ...state, from: action.payload };

    default:
      return state;
  }
};
