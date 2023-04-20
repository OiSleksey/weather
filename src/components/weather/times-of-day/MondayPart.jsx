import { connect } from 'react-redux';
import React from 'react';
import PartOne from './PartOne';
import { morningPartDaySelector } from '../../../redux/part-weather/part-times-weather.selector';
import { morningTemperatureWeatherCodeSelector } from '../../../redux/part-weather/part-weatherdata.selector';

const mapState = state => {
  return {
    partDay: morningPartDaySelector(state),
    partWeather: morningTemperatureWeatherCodeSelector(state),
    // weatherCode: state,
    // temperature: state,
  };
};

export default connect(mapState, null)(PartOne);
