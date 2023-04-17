import { getLocation } from '../../api-requests/get.location';
import { getWeatherCodeToday } from '../../api-requests/get.wether';
export const WEATHER_CODE = 'WEATHER_CODE';

export const weatherCode = data => {
  return {
    type: WEATHER_CODE,
    payload: {
      data,
    },
  };
};

export const getWeatherCode = () => {
  return function (dispatch, getState) {
    // const stateWeatherCode = getState().location;
    // console.log(stateWeatherCode);
    // dispatch(weatherCode(getWeatherCode()));
    getLocation()
      .then(data => getWeatherCodeToday(data.lat, data.lon))
      .then(data => dispatch(weatherCode(data)));
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
