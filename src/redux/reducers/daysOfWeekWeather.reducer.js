import {
  WEATHER_WEEK_FIRST_SELECTED,
  WEATHER_WEEK_SECOND_SELECTED,
  WEATHER_WEEK_THIRD_SELECTED,
  WEATHER_WEEK_FOURTH_SELECTED,
  WEATHER_WEEK_FIFTH_SELECTED,
  WEATHER_WEEK_SIXTH_SELECTED,
  WEATHER_WEEK_SEVENTH_SELECTED,
} from '../actions/daysOfWeekWeather.actions';

const initialState = {
  selectedWeekday: [true, false, false, false, false, false, false],
};

export const selectedWeekdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_WEEK_FIRST_SELECTED: {
      return {
        ...state,
        selectedWeekday: [true, false, false, false, false, false, false],
      };
    }
    case WEATHER_WEEK_SECOND_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, true, false, false, false, false, false],
      };
    }
    case WEATHER_WEEK_THIRD_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, false, true, false, false, false, false],
      };
    }
    case WEATHER_WEEK_FOURTH_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, false, false, true, false, false, false],
      };
    }
    case WEATHER_WEEK_FIFTH_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, false, false, false, true, false, false],
      };
    }
    case WEATHER_WEEK_SIXTH_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, false, false, false, false, true, false],
      };
    }
    case WEATHER_WEEK_SEVENTH_SELECTED: {
      return {
        ...state,
        selectedWeekday: [false, false, false, false, false, false, true],
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
