import React from 'react';
import { connect } from 'react-redux';
import '../OtherIndicators.sass';
import './WindSpeed.sass';
import { weatherWindSpeedSelector } from '../../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import PropTypes from 'prop-types';

const WindSpeed = ({ windSpeed }) => {
  if (!(windSpeed + '')) {
    return (
      <div className="other-indicators__wind-speed wind-speed">
        <div className="wind-speed__box">
          <div className="wind-speed__img-box">
            <img
              src="./img/wind-speed.png"
              alt="wind-speed"
              className="wind-speed__img"
            />
          </div>
          <div className="wind-speed__data-box">
            <h5 className="wind-speed__data-text">Loading...</h5>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="other-indicators__wind-speed wind-speed">
      <div className="wind-speed__box">
        <div className="wind-speed__img-box">
          <img
            src="./img/wind-speed.png"
            alt="wind-speed"
            className="wind-speed__img"
          />
        </div>
        <div className="wind-speed__data-box">
          <h5 className="wind-speed__data-text">{windSpeed}m/s</h5>
        </div>
      </div>
    </div>
  );
};

WindSpeed.propTypes = {
  windSpeed: PropTypes.string,
};

const mapState = state => {
  return {
    windSpeed: weatherWindSpeedSelector(state),
  };
};

export default connect(mapState, null)(WindSpeed);
