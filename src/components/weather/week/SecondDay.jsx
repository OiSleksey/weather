import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { secondDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { secondDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: secondDayDateSelector(state),
    weatherData: secondDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
