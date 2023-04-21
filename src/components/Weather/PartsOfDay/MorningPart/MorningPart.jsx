import { connect } from 'react-redux';
import React from 'react';
import PartOne from '../PartOne/PartOne';
import { morningPartDaySelector } from '../../../../redux/selectors/part-times-weather.selector';
import { morningTemperatureWeatherCodeSelector } from '../../../../redux/selectors/part-weatherdata.selector';
import { weatherPartMorningSelected } from '../../../../redux/actions/part-weather.actions';
import { getPartDayYouNeed } from '../../../../redux/selectors/selected-part-day.selector';
import { morningPartSelected } from '../../../../redux/selectors/part-selected-weather.selector';
const mapState = state => {
  return {
    partDay: morningPartDaySelector(state),
    partWeather: morningTemperatureWeatherCodeSelector(state),
    partSelected: morningPartSelected(state),
    // weatherCode: state,
    // temperature: state,
  };
};

const mapDispath = {
  setSelectedPartDay: weatherPartMorningSelected,
};

export default connect(mapState, mapDispath)(PartOne);
