import { connect } from 'react-redux';
import React from 'react';
import PartOne from './PartOne';
import { eveningPartDaySelector } from '../../../redux/part-weather/part-times-weather.selector';
import { eveningTemperatureWeatherCodeSelector } from '../../../redux/part-weather/part-weatherdata.selector';

const mapState = state => {
  return {
    partDay: eveningPartDaySelector(state),
    partWeather: eveningTemperatureWeatherCodeSelector(state),
    // weatherCode: state,
    // temperature: state,
  };
};

export default connect(mapState, null)(PartOne);
