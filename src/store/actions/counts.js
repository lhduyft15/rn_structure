import {COUNTER_CHANGE} from './actionTypes';

export const changeCount = count => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
};
