import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { thirdDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { thirdDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: thirdDayDateSelector(state),
    weatherData: thirdDayDataWeatherSelector(state),
  };
};

export default connect(mapState, null)(OneDay);
