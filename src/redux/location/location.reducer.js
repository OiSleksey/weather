import { WEATHER_LOCATION, WEATHER_POSITION_NAME } from './location.actions';

const initialState = {};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_LOCATION: {
      return {
        ...state,
        ...action.payload.coords,
      };
    }
    case WEATHER_POSITION_NAME: {
      return {
        ...state,
        namePosition: action.payload.namePosition,
      };
    }
    default:
      return state;
  }
};

// export const locationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TODO_LIST_GET: {
//       return {
//         ...state,
//         tasksList: action.payload.taskList,
//       };
//     }
//     default:
//       return state;
//   }
// };
