import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './Weather.sass';
import DetailsWeather from './DetailsWeather/DetailsWeather';
import PartsOfWeek from './PartsOfWeek/PartsOfWeek';
import PartsOfDay from './PartsOfDay/PartsOfDay';
import HoursOfDay from './HoursOfDay/HoursOfDay-test';
import { getLocationWeatherDispatch } from '../../redux/middleware/weatherThunk';
import { getTimeDateNow } from '../../redux/actions/timeData.actions';
import { loadPage } from '../../redux/actions/stateUI.action';
import LoaderBars from './UI/LoaderBars/LoaderBars';
import {
  Routes,
  Route,
  Navigate,
  Router,
  BrowserRouter,
} from 'react-router-dom';

// import store from '../redux/store';
import { animated, useSpring } from '@react-spring/web';

const Weather = ({
  stateUI,
  getLocationWeather,
  weatherData,
  getTime,
  startLoadPage,
}) => {
  window.addEventListener('load', () => {
    startLoadPage();
  });

  useEffect(() => {
    getLocationWeather();
    getTime();
    if (document.readyState === 'complete') startLoadPage();
  }, []);

  const isRefHour = useRef(false);
  const isRefPart = useRef(false);

  const visibleTimesOfday = stateUI.stateToggle ? (
    <HoursOfDay sendRefHour={isRefHour} />
  ) : (
    <PartsOfDay sendRefPart={isRefPart} />
  );
  let loader = <LoaderBars />;
  if (weatherData && weatherData.temperature && stateUI.isLoadPage)
    loader = null;
  // if (weatherData && weatherData.temperature) loader = null;

  // if (document.readyState === 'complete') {
  //   console.log('readySate');
  // } else {
  //   window.addEventListener('load', () => console.log('event here'));
  // }
  return (
    <>
      {loader}
      <div className="weather">
        <DetailsWeather />
        <PartsOfWeek />
        {visibleTimesOfday}
        {/* <PartsOfDay sendRefPart={isRefPart} /> */}
        {/* <HoursOfDay /> */}
      </div>
    </>
  );
};

const mapState = state => {
  return {
    stateUI: state.isUI,
    weatherData: state.weatherData,
  };
};
const mapDispatch = {
  getLocationWeather: getLocationWeatherDispatch,
  getTime: getTimeDateNow,
  startLoadPage: loadPage,
};
export default connect(mapState, mapDispatch)(Weather);
