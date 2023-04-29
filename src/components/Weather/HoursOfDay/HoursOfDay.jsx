import React, { useEffect, useState, useRef } from 'react';
import '../../App.sass';
import './HoursOfDay.sass';
import { connect } from 'react-redux';
import Hour from './Hour/Hour';
import { getWeatherDataSelector } from '../../../redux/selectors/hoursOfDay.selectors/weatherHoursOfDay.selector';

import { useScroll, animated } from '@react-spring/web';
//
import App from './TestAnimated/App';

const HoursOfDay = ({ dataWeather, sendRefHour }) => {
  const positionRef = useRef(0);
  if (!dataWeather) return null;
  const arrTemperature = dataWeather.temperature;
  const arrWeatherCode = dataWeather.weatherCode;
  const arrTemperatureWeatherCode = arrTemperature.map((element, index) => [
    index,
    element,
    arrWeatherCode[index],
  ]);
  const hourTest = 0;

  const appStyle = {
    whiteSpace: 'nowrap', // used only to display text as not wrapped lines
    // overflow: 'scroll',
  };

  const handleScroll = e => {
    const x = e.currentTarget.scrollLeft;
    if (x !== positionRef.current) {
      positionRef.current = x;
      console.log('Horizontal scroll event occurred' + x);
    }
  };
  //
  return (
    <div
      className="weather__hours-of-day hours-of-day"
      onScroll={handleScroll}
      style={appStyle}
    >
      {/* <App /> */}
      {arrTemperatureWeatherCode.map((element, item) => (
        <Hour
          isRefHour={sendRefHour}
          hourTest={hourTest}
          dataWeather={element}
          key={item}
        />
      ))}
    </div>
  );
};

const mapState = state => {
  return {
    dataWeather: getWeatherDataSelector(state),
    selectedHour: state.hourWeather.selectedHour,
  };
};
export default connect(mapState, null)(HoursOfDay);
