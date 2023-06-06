import React, { useCallback, useEffect, useState } from 'react';
import LocationTown from './LocationTown/LocationTown';
import DayStatus from './DayStatus/DayStatus';
import WeatherCode from './WeatherCode/WeatherCode';
import TemperatureNow from './TemperatureNow/TemperatureNow';
import OtherIndicators from './OtherIndicators/OtherIndicators';
import ToggleWeather from './ToggleWeather/ToggleWeather';
import NameApp from './NameApp/NameApp';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import LoaderBars from '../../Weather/UI/LoaderBars/LoaderBars';
import { connect } from 'react-redux';

import '../../../components/App.sass';
import './DetailsWeather.sass';

const DeatailsWeather = ({ isUI }) => {
  let load = isUI.isError ? <LoaderBars /> : null;

  return (
    <div className="main__detail detail">
      {load}
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

const mapState = state => {
  return {
    isUI: state.isUI,
  };
};

export default connect(mapState)(DeatailsWeather);
