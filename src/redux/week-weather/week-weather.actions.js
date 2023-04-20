// import * as dataFetch from '../scripts/dataBaseRequsts';
// import { taskListSelector } from './tasks.selector';
import { getLocation, getPosition } from '../../api-requests/get.location';
import * as fetchWeather from '../../api-requests/get.wether';

// getWeatherCodeToday,
// getTemperature,
export const WEATHER_WEEK_FIRST_SELECTED = 'WEATHER_WEEK_FIRST_SELECTED';

export const weatherWeeekSelected = () => {
  return {
    type: WEATHER_LOCATION,
    payload: {
      coords,
    },
  };
};

export const weatherPositionName = namePosition => {
  return {
    type: WEATHER_POSITION_NAME,
    payload: {
      namePosition,
    },
  };
};

export const weatherCode = weatherType => {
  return {
    type: WEATHER_CODE,
    payload: {
      weatherType,
    },
  };
};

export const weatherTemperature = temperature => {
  return {
    type: WEATHER_TEMPERATURE,
    payload: {
      temperature,
    },
  };
};

export const weatherRelativeHumadity = relativeHumadity => {
  return {
    type: WEATHER_RELATIVE_HUMADITY,
    payload: {
      relativeHumadity,
    },
  };
};

export const weatherPressure = pressure => {
  return {
    type: WEATHER_PRESSURE,
    payload: {
      pressure,
    },
  };
};

export const weatherWindSpeed = windSpeed => {
  return {
    type: WEATHER_WIND_SPEED,
    payload: {
      windSpeed,
    },
  };
};

export const weatherWindDirection = windDirection => {
  return {
    type: WEATHER_WIND_DIRECTION,
    payload: {
      windDirection,
    },
  };
};

export const getLocationBrowser = () => {
  return function (dispatch) {
    getLocation().then(data => {
      dispatch(weatherLocation(data));
      dispatch(getPositionName(data.lat, data.lon));
      dispatch(getWeatherCode(data.lat, data.lon));
      dispatch(getWeatherTemperature(data.lat, data.lon));
      dispatch(getWeatherRelativeHumadity(data.lat, data.lon));
      dispatch(getWeatherPressure(data.lat, data.lon));
      dispatch(getWeatherWindSpeed(data.lat, data.lon));
      dispatch(getWeatherWindDirection(data.lat, data.lon));
    });
  };
};

export const getPositionName = (lat, lon) => {
  return function (dispatch, getState) {
    getPosition(lat, lon).then(data => {
      dispatch(weatherPositionName(data));
    });
  };
};

export const getWeatherCode = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getWeatherCode(lat, lon)
      .then(data => dispatch(weatherCode(data)));
  };
};

export const getWeatherTemperature = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getTemperature(lat, lon)
      .then(data => dispatch(weatherTemperature(data)));
  };
};

export const getWeatherRelativeHumadity = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getRelativeHumidity(lat, lon)
      .then(data => dispatch(weatherRelativeHumadity(data)));
  };
};

export const getWeatherPressure = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getPressure(lat, lon)
      .then(data => dispatch(weatherPressure(data)));
  };
};

export const getWeatherWindSpeed = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getWindSpeed(lat, lon)
      .then(data => dispatch(weatherWindSpeed(data)));
  };
};

export const getWeatherWindDirection = (lat, lon) => {
  return function (dispatch) {
    fetchWeather
      .getWindDirection(lat, lon)
      .then(data => dispatch(weatherWindDirection(data)));
  };
};

// export const getTodoTasks = () => {
//   return function (dispatch) {
//     dataFetch.getRequest().then(data => {
//       dispatch(displayTodoList(data));
//     });
//   };
// };

// export const createTodoTask = inputData => {
//   return function (dispatch) {
//     if (inputData.value.trim() === '') {
//       return;
//     }
//     const newTask = {
//       text: inputData.value.trim(),
//       done: false,
//     };
//     dataFetch.postRequest(newTask).then(() => dispatch(getTodoTasks()));
//   };
// };

// export const updateTodoTask = id => {
//   return function (dispatch, getState) {
//     const state = getState();
//     const taskList = taskListSelector(state);
//     const { done, text } = taskList.find(task => task.id === id);
//     const updateTask = {
//       done: !done,
//       text,
//     };
//     dataFetch.putRequest(updateTask, id).then(() => dispatch(getTodoTasks()));
//   };
// };

// export const deleteTodoTask = id => {
//   return function (dispatch) {
//     dataFetch.deleteRequest(id).then(() => dispatch(getTodoTasks()));
//   };
// };
