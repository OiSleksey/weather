import { WEATHER_PART_DAY_SELECTED } from '../actions/partsOfDayWeather.actions';

const arrayFalse = new Array(4).fill(false);
const initialState = {
  selectedPart: arrayFalse.slice(),
};

export const selectedPartOfDayReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_PART_DAY_SELECTED: {
      const newArray = arrayFalse.slice();
      newArray[action.payload.selected] = true;
      return {
        ...state,
        selectedPart: newArray,
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
