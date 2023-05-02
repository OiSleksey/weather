import {
  TOGGLE_TIMES_OF_DAY,
  LOAD_PAGE,
  TOGGLE_WEEK,
} from '../actions/stateUI.action';

const initialState = {
  stateToggle: true,
  isLoadPage: false,
  isWeek: false,
};

export const stateUIReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TIMES_OF_DAY: {
      return {
        ...state,
        stateToggle: !state.stateToggle,
      };
    }
    case LOAD_PAGE: {
      return {
        ...state,
        isLoadPage: true,
      };
    }
    case TOGGLE_WEEK: {
      return {
        ...state,
        isWeek: !state.isWeek,
      };
    }
    default:
      return state;
  }
};
