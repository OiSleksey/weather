import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
// import { applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// import { tasksReducer } from '../tasks/tasks.reducer';
import { locationWeatherReducer } from './location-weather/location-weather.reducer';
import { timeDateNowReducer } from './time-date/time-date.reducer';
// import { weatherCodeReducer } from './weather-code/weather-code.reducer';

const allReducers = combineReducers({
  location: locationWeatherReducer,
  weatherData: locationWeatherReducer,
  timeDateNow: timeDateNowReducer,
  // weatherCode: weatherCodeReducer,
  // tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
