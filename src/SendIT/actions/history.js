import { SAVE_HISTORY } from './types';

export const saveHistoryObject = (history) => {
  return {
    type: SAVE_HISTORY,
    payload: history
  }
}