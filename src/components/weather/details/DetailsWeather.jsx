import React, { useCallback, useEffect } from 'react';
import LocationTown from './LocationTown';
import DayStatus from './DayStatus';
import WeatherCode from './WeatherCode';
import TemperatureNow from './TemperatureNow';
import OtherIndicators from './OtherIndicators';
import '../../../components/App.sass';
import './DetailsWeather.sass';

const DeatailsWeather = props => {
  // console.log('DeatailsWeather ' + props.test);
  return (
    <div className="weather__detail detail">
      {/* <!--return--> */}
      <div className="detail__return return">
        <div className="return__img-box">
          <img src="./img/return.png" alt="return" className="return__img" />
        </div>
      </div>
      <LocationTown test={props.test} />
      <div className="detail__title-name-weather title-name-weather">
        <h2 className="title-name-weather__text">WEATHER</h2>
      </div>
      <WeatherCode />
      <TemperatureNow />
      <DayStatus />
      <OtherIndicators />
    </div>
  );
};

export default DeatailsWeather;
