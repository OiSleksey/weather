import { TIME_DATE_NOW } from './time-date.actions';

const initialState = {};

export const timeDateNowReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIME_DATE_NOW: {
      return {
        ...state,
        ...action.payload.data,
      };
    }
    // case WEATHER_POSITION_NAME: {
    //   return {
    //     ...state,
    //     namePosition: action.payload.namePosition,
    //   };
    // }
    default:
      return state;
  }
};

// export const locationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case WEATHER_LOCATION: {
//       return {
//         ...state,
//         ...action.payload.coords,
//       };
//     }
//     case WEATHER_POSITION_NAME: {
//       return {
//         ...state,
//         namePosition: action.payload.namePosition,
//       };
//     }
//     default:
//       return state;
//   }
// };
