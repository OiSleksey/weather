import React, { useCallback, useEffect } from 'react';
import './DetailsWeather.sass';
import * as getApiWeather from '../../api-requests/get.wether';
import LocationTown from './LocationTown';
import DayStatus from './DayStatus';
import WeatherCode from './WeatherCode';

const DeatailsWeather = props => {
  console.log('DeatailsWeather ' + props.test);
  return (
    <>
      {/* <!--return--> */}
      <div className="detail__return return">
        <div className="return__img-box">
          <img
            onClick={() => {
              console.log(props);
            }}
            src="./img/return.png"
            alt="return"
            className="return__img"
          />
        </div>
      </div>
      {/* <!--/return-->
              <!--location--> */}
      <LocationTown test={props.test} />
      {/* <!--/location-->
              <!--title-name-weather--> */}
      <div className="detail__title-name-weather title-name-weather">
        <h2 className="title-name-weather__text">WEATHER</h2>
      </div>
      {/* <!--/title-name-weather-->
              <!--state-weather--> */}
      <WeatherCode />
      {/* <!--/state-weather-->
              <!--temperature-main--> */}
      <div className="detail__temperature-main temperature-main">
        <div className="temperature-main__quantity">
          <h1 className="temperature-main__text">12</h1>
        </div>
        <div className="temperature-main__img-box">
          <img
            src="./img/temperature.png"
            alt="temperature-main"
            className="temperature-main__img"
          />
        </div>
      </div>
      {/* <!--/temperature-main-->
              <!--day-status--> */}
      <DayStatus />
      {/* <!--/day-status-->
              <!--other-indicators--> */}
      <div className="detail__other-indicators other-indicators">
        <div className="other-indicators__relative-humadity relative-humadity">
          <div className="relative-humadity__box">
            <div className="relative-humadity__img-box">
              <img
                src="./img/relative-humadity.png"
                alt="relative-humadity"
                className="relative-humadity__img"
              />
            </div>
            <div className="relative-humadity__data-box">
              <h5 className="relative-humadity__data-text">60%</h5>
            </div>
          </div>
        </div>
        <div className="other-indicators__wind-speed">
          <div className="wind-speed__box">
            <div className="wind-speed__img-box">
              <img
                src="./img/wind-speed.png"
                alt="wind-speed"
                className="wind-speed__img"
              />
            </div>
            <div className="wind-speed__data-box">
              <h5 className="wind-speed__data-text">2.2m/s</h5>
            </div>
          </div>
        </div>
        <div className="other-indicators__wind-direction">
          <div className="wind-direction__box">
            <div className="wind-direction__img-box">
              <img
                src="./img/wind-direction.png"
                alt="wind-direction"
                className="wind-direction__img"
              />
            </div>
            <div className="wind-direction__data-box">
              <h5 className="wind-direction__data-text">South-North</h5>
            </div>
          </div>
        </div>
        <div className="other-indicators__pressure">
          <div className="other-indicators__pressure">
            <div className="pressure__box">
              <div className="pressure__img-box">
                <img
                  src="./img/presure.png"
                  alt="pressure"
                  className="pressure__img"
                />
              </div>
              <div className="pressure__data-box">
                <h5 className="pressure__data-text">700mm</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeatailsWeather;
