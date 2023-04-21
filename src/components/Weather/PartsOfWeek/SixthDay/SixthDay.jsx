import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { sixthDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { sixthDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { sixthDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekSixthSelected } from '../../../../redux/actions/week-weather.actions';
//
const mapState = state => {
  return {
    dayNameAndData: sixthDayDateSelector(state),
    weatherData: sixthDayDataWeatherSelector(state),
    selectedWeekday: sixthDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekSixthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
