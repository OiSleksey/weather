import React, { useEffect } from 'react';
import '../../App.sass';
import './PartsOfDay.sass';
import { connect } from 'react-redux';
import Part from './Part/Part';
import { getWeatherDataSelector } from '../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { weatherPartSelected } from '../../../redux/actions/partsOfDayWeather.actions';

const PartsOfDay = ({ dataWeather, sendRefPart }) => {
  if (!dataWeather) return null;
  const arrTemperature = dataWeather.temperature;
  const arrWeatherCode = dataWeather.weatherCode;
  const arrTemperatureWeatherCode = arrTemperature.map((element, index) => [
    index,
    element,
    arrWeatherCode[index],
  ]);

  return (
    <div className="weather__parts-of-day parts-of-day">
      {arrTemperatureWeatherCode.map((element, item) => (
        <Part isRefPart={sendRefPart} dataWeather={element} key={item} />
      ))}
    </div>
  );
};

const mapState = state => {
  return {
    dataWeather: getWeatherDataSelector(state),
  };
};

export default connect(mapState)(PartsOfDay);
