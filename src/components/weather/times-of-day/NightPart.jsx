import { connect } from 'react-redux';
import React from 'react';
import PartOne from './PartOne';
import { nightTemperatureWeatherCodeSelector } from '../../../redux/part-weather/part-weatherdata.selector';
import { nightPartDaySelector } from '../../../redux/part-weather/part-times-weather.selector';
const mapState = state => {
  return {
    partDay: nightPartDaySelector(state),
    partWeather: nightTemperatureWeatherCodeSelector(state),
    // weatherCode: state,
    // temperature: state,
  };
};

export default connect(mapState, null)(PartOne);
