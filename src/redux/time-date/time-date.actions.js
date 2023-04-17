import { getDateCurrency } from '../../api-requests/get.time';
export const TIME_DATE_NOW = 'TIME_DATE_NOW';

export const timeDateNow = data => {
  return {
    type: TIME_DATE_NOW,
    payload: {
      data,
    },
  };
};

export const getTimeDateNow = () => {
  return function (dispatch) {
    dispatch(timeDateNow(getDateCurrency()));
  };
};

//   export const getPositionName = (lat, lon) => {
//     return function (dispatch, getState) {
//       getPosition(lat, lon).then(data => {
//         console.log(data);
//         dispatch(weatherPositionName(data));
//       });
//     };
//   };
// import { getLocation, getPosition } from '../../api-requests/get.location';

// export const WEATHER_LOCATION = 'WEATHER_LOCATION';

// export const weatherLocation = coords => {
//   return {
//     type: WEATHER_LOCATION,
//     payload: {
//       coords,
//     },
//   };
// };

// export const WEATHER_POSITION_NAME = 'WEATHER_POSITION_NAME';

// export const weatherPositionName = namePosition => {
//   return {
//     type: WEATHER_POSITION_NAME,
//     payload: {
//       namePosition,
//     },
//   };
// };
