import { WEATHER_CODE } from './weather-code.actions';

const initialState = {};

export const weatherCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_CODE: {
      console.log(action.type);
      console.log(action.payload);
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
      console.log(action.type);
      console.log(action.payload);
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
