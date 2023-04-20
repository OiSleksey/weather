import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { seventhDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { seventhDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: seventhDayDateSelector(state),
    weatherData: seventhDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
