import { CHANGE_WEIGHT, CHANGE_TO, CHANGE_FROM } from './types';

export const changeWeight = weight => {
  return {
    type: CHANGE_WEIGHT,
    payload: weight,
  };
};

export const changeLoc = (place, loc) => {
  if (loc === 'to') {
    return {
      type: CHANGE_TO,
      payload: place,
    };
  } else if(loc === 'from') {
    return {
      type: CHANGE_FROM,
      payload: place,
    }
  }
};
