import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getWeatherCode } from '../../redux/weather-code/weather-code.actions';

const WeatherCode = props => {
  useEffect(() => {
    props.getWeatherCode();
    console.log('WeatherCode Effect');
  }, []);
  if (!props.weatherCode.hourly) {
    console.log('Hyanyua');
    return <div>BAD</div>;
  }
  return (
    <>
      <div className="detail__state-weather state-weather">
        <div className="state-weather__img-box">
          <img
            // onClick={() =>
            //   console.log(props.weatherCode.hourly.weathercode[20])
            // }
            src={`./img/weather-code/weathercode-82.png`}
            alt="weather-code"
            className="state-weather__img"
          />
        </div>
      </div>
    </>
  );
};

const mapState = state => {
  return {
    weatherCode: state.weatherCode,
  };
};
const mapDispath = {
  getWeatherCode: getWeatherCode,
};
export default connect(mapState, mapDispath)(WeatherCode);
