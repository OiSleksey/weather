import { TOGGLE_TIMES_OF_DAY, LOAD_PAGE } from '../actions/stateUI.action';

const initialState = {
  stateToggle: true,
  isLoadPage: false,
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
    default:
      return state;
  }
};
