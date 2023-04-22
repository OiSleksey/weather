import {
  WEATHER_PART_DAY_NIGHT_SELECTED,
  WEATHER_PART_DAY_MORNING_SELECTED,
  WEATHER_PART_DAY_DAY_SELECTED,
  WEATHER_PART_DAY_EVENING_SELECTED,
} from '../actions/partsDayWeather.actions';

const initialState = {
  selectedPartDay: [false, false, false, false],
};

export const selectedPartDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_PART_DAY_NIGHT_SELECTED: {
      return {
        ...state,
        selectedPartDay: [true, false, false, false],
      };
    }
    case WEATHER_PART_DAY_MORNING_SELECTED: {
      return {
        ...state,
        selectedPartDay: [false, true, false, false],
      };
    }
    case WEATHER_PART_DAY_DAY_SELECTED: {
      return {
        ...state,
        selectedPartDay: [false, false, true, false],
      };
    }
    case WEATHER_PART_DAY_EVENING_SELECTED: {
      return {
        ...state,
        selectedPartDay: [false, false, false, true],
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
