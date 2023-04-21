import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
// import { applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// import { tasksReducer } from '../tasks/tasks.reducer';
import { locationWeatherReducer } from './reducers/location-weather.reducer';
import { timeDateNowReducer } from './reducers/time-date.reducer';
import { selectedWeekdayReducer } from './reducers/week-weather.reducer';
import { selectedPartDayReducer } from './reducers/part-weather.reducer';
// import { weatherCodeReducer } from './weather-code/weather-code.reducer';

const allReducers = combineReducers({
  location: locationWeatherReducer,
  weatherData: locationWeatherReducer,
  timeDateNow: timeDateNowReducer,
  weekWeather: selectedWeekdayReducer,
  partWeather: selectedPartDayReducer,
  // weatherCode: weatherCodeReducer,
  // tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
