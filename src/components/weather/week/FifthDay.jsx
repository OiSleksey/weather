import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { fifthDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { fifthDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: fifthDayDateSelector(state),
    weatherData: fifthDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
