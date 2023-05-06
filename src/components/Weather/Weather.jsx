import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import './Weather.sass';
import DetailsWeather from './DetailsWeather/DetailsWeather';
import DaysOfWeek from './DaysOfWeek/DaysOfWeek';
import PartsOfDay from './PartsOfDay/PartsOfDay';
import HoursOfDay from './HoursOfDay/HoursOfDay';
import { getLocationWeatherDispatch } from '../../redux/middleware/weatherThunk';
import { getTimeDateNow } from '../../redux/actions/timeData.actions';
import { loadPage, mobileSize } from '../../redux/actions/stateUI.action';
import LoaderBars from './UI/LoaderBars/LoaderBars';
import PropTypes from 'prop-types';
import {
  Routes,
  Route,
  Navigate,
  Router,
  BrowserRouter,
} from 'react-router-dom';

// import store from '../redux/store';
// import {
//   useTransition,
//   useSpring,
//   useChain,
//   config,
//   animated,
//   useSpringRef,
// } from '@react-spring/web';
const mediaQuery = window.matchMedia('(max-width: 951px)');

const Weather = ({
  stateUI,
  getLocationWeather,
  weatherData,
  getTime,
  startLoadPage,
  setMediaSize,
}) => {
  // console.log(stateUI);
  // console.log(getLocationWeather);
  // console.log(weatherData);
  // console.log(getTime);
  // console.log(startLoadPage);
  // console.log(setMediaSize);
  window.addEventListener('load', () => {
    startLoadPage();
  });

  useEffect(() => {
    getLocationWeather();
    getTime();
    if (document.readyState === 'complete') startLoadPage();
  }, []);

  //Media request
  const [stateMedia, setStateMedia] = useState(mediaQuery.matches);

  useEffect(() => {
    setMediaSize(stateMedia);
  }, [stateMedia]);

  mediaQuery.addEventListener('change', mediaEvent => {
    setStateMedia(mediaEvent.matches);
  });

  //Get weatherData in components  HoursOfDay or PartsOfDay
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

  const activeSidebar = stateUI.isMobileSize
    ? 'weather__sidebar sidebar sidebar_active col-2'
    : 'weather__sidebar sidebar col-2';

  return (
    <>
      {loader}
      <div className="weather row">
        <div className="weather__main main col-10">
          <DetailsWeather />
          {visibleTimesOfday}
        </div>
        <div className={activeSidebar}>
          <DaysOfWeek />
        </div>
      </div>
    </>
  );
};

Weather.propTypes = {
  stateUI: PropTypes.object.isRequired,
  getLocationWeather: PropTypes.func.isRequired,
  weatherData: PropTypes.object.isRequired,
  getTime: PropTypes.func.isRequired,
  startLoadPage: PropTypes.func.isRequired,
  setMediaSize: PropTypes.func.isRequired,
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
  setMediaSize: mobileSize,
};
export default connect(mapState, mapDispatch)(Weather);
