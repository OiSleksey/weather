import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { sixthDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { sixthDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: sixthDayDateSelector(state),
    weatherData: sixthDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
