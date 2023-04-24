import { WEATHER_HOUR_SELECTED } from '../actions/hoursOfDayWeather.actions';

const arrayFalse = new Array(24).fill(false);
const initialState = {
  selectedHour: arrayFalse.slice(),
};

export const selectedHourOfDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_HOUR_SELECTED: {
      const newArray = arrayFalse.slice();
      newArray[action.payload.selected] = true;
      return {
        ...state,
        selectedHour: newArray,
      };
    }
    default:
      return state;
  }
};
