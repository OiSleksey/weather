import { WEATHER_HOUR_SELECTED } from '../actions/hoursDayWeather.actions';

const arrayFalse = new Array(24).fill(false);
const initialState = {
  selectedHour: arrayFalse.slice(),
};

export const selectedHourOfDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_HOUR_SELECTED: {
      console.log(action.type);
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
