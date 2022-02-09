import {COUNTER_CHANGE} from '../actions/actionTypes';
const initialState = {
  count: 0,
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
