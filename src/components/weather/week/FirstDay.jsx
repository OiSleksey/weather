import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { firstDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { firstDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: firstDayDateSelector(state),
    weatherData: firstDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
