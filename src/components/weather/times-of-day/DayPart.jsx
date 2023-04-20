import { connect } from 'react-redux';
import React from 'react';
import PartOne from './PartOne';
import { dayPartDaySelector } from '../../../redux/part-weather/part-times-weather.selector';
import { dayTemperatureWeatherCodeSelector } from '../../../redux/part-weather/part-weatherdata.selector';

const mapState = state => {
  return {
    partDay: dayPartDaySelector(state),
    partWeather: dayTemperatureWeatherCodeSelector(state),
    // weatherCode: state,
    // temperature: state,
  };
};

export default connect(mapState, null)(PartOne);
