import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { fourthDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { fourthDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { fourthDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekFourthSelected } from '../../../../redux/actions/week-weather.actions';

const mapState = state => {
  return {
    dayNameAndData: fourthDayDateSelector(state),
    weatherData: fourthDayDataWeatherSelector(state),
    selectedWeekday: fourthDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekFourthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
