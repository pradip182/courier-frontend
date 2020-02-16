import { SAVE_HISTORY } from '../actions/types';

const intialState = {
  history: ''
}

export default (state=intialState, action) => {
  switch (action.type) {
    case SAVE_HISTORY:
      return { ...state, history: action.payload }
  
    default:
      return state;
  }
}