import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
// import { applyMiddleware, compose } from 'react-redux';
import thunk from 'redux-thunk';
// import { tasksReducer } from '../tasks/tasks.reducer';
import { locationWeatherReducer } from './reducers/locationWeather.reducer';
import { timeDateNowReducer } from './reducers/timeData.reducer';
import { selectedWeekdayReducer } from './reducers/partsWeekWeather.reducer';
import { selectedPartDayReducer } from './reducers/partsDayWeather.reducer';
// import { weatherCodeReducer } from './weather-code/weather-code.reducer';

const allReducers = combineReducers({
  weatherData: locationWeatherReducer,
  timeDateNow: timeDateNowReducer,
  weekWeather: selectedWeekdayReducer,
  partWeather: selectedPartDayReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
