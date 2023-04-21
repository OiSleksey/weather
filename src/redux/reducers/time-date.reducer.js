import { TIME_DATE_NOW } from '../actions/time-date.actions';

const initialState = {};

export const timeDateNowReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_DATE_NOW: {
      return {
        ...state,
        ...action.payload.data,
      };
    }
    default:
      return state;
  }
};
