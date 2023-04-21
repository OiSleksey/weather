import {
  WEATHER_LOCATION,
  WEATHER_POSITION_NAME,
  WEATHER_CODE,
  WEATHER_TEMPERATURE,
  WEATHER_RELATIVE_HUMADITY,
  WEATHER_PRESSURE,
  WEATHER_WIND_SPEED,
  WEATHER_WIND_DIRECTION,
} from '../actions/location-weather.actions';

const initialState = {};

export const locationWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_LOCATION: {
      return {
        ...state,
        location: action.payload.coords,
      };
    }
    case WEATHER_POSITION_NAME: {
      return {
        ...state,
        namePosition: action.payload.namePosition,
      };
    }
    case WEATHER_CODE: {
      return {
        ...state,
        weatherCode: action.payload.weatherType,
      };
    }
    case WEATHER_TEMPERATURE: {
      return {
        ...state,
        temperature: action.payload.temperature,
      };
    }
    case WEATHER_RELATIVE_HUMADITY: {
      return {
        ...state,
        relativeHumadity: action.payload.relativeHumadity,
      };
    }
    case WEATHER_PRESSURE: {
      return {
        ...state,
        pressure: action.payload.pressure,
      };
    }
    case WEATHER_WIND_SPEED: {
      return {
        ...state,
        windSpeed: action.payload.windSpeed,
      };
    }
    case WEATHER_WIND_DIRECTION: {
      return {
        ...state,
        windDirection: action.payload.windDirection,
      };
    }
    default:
      return state;
  }
};
