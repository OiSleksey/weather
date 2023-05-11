import React, { useCallback, useEffect, useState } from 'react';
import LocationTown from './LocationTown/LocationTown';
import DayStatus from './DayStatus/DayStatus';
import WeatherCode from './WeatherCode/WeatherCode';
import TemperatureNow from './TemperatureNow/TemperatureNow';
import OtherIndicators from './OtherIndicators/OtherIndicators';
import ToggleWeather from './ToggleWeather/ToggleWeather';
import NameApp from './NameApp/NameApp';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import LoaderBars from '../UI/LoaderBars/LoaderBars';

import '../../../components/App.sass';
import './DetailsWeather.sass';

const DeatailsWeather = () => {
  return (
    <div className="main__detail detail">
      {/* <!--return--> */}
      <div className="detail__return return">
        <div className="return__img-box">
          <img src="./img/return.png" alt="return" className="return__img" />
        </div>
      </div>
      <LocationTown />
      <NameApp />
      <WeatherCode />
      <TemperatureNow />
      <DayStatus />
      <OtherIndicators />
      <ToggleWeather />
      <HamburgerMenu />
    </div>
  );
};

export default DeatailsWeather;
