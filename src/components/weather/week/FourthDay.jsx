import React from 'react';
import OneDay from './OneDay';
import { connect } from 'react-redux';
import { fourthDayDateSelector } from '../../../redux/week-weather/days-weather.selector';
import { fourthDayDataWeatherSelector } from '../../../redux/week-weather/temperature-weather.selector';

//
// import { firstPartDaySelector } from '../../../redux/part-weather/times-weather.selector';
//
const mapState = state => {
  return {
    dayNameAndData: fourthDayDateSelector(state),
    weatherData: fourthDayDataWeatherSelector(state),
    //
    // other: firstPartDaySelector(state),
  };
};

export default connect(mapState, null)(OneDay);
