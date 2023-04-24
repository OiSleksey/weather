import { TOGGLE_TIMES_OF_DAY } from '../actions/toggleTimesOfDay.action';

const initialState = {
  stateToggle: false,
};

export const toggleTimesOfDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TIMES_OF_DAY: {
      return {
        ...state,
        stateToggle: !state.stateToggle,
      };
    }
    default:
      return state;
  }
};
