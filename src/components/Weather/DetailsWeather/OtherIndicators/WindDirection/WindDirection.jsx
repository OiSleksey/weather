import React from 'react';
import '../OtherIndicators.sass';
import './WindDirection.sass';
import { weatherWindDirectionSelector } from '../../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const WindDirection = ({ windDirection }) => {
  if (!windDirection) return null;
  return (
    <div className="other-indicators__wind-direction wind-direction">
      <div className="wind-direction__box">
        <div className="wind-direction__img-box">
          <img
            src={`./img/wind-direction/direction-${windDirection.number}.png`}
            alt="wind-direction"
            className="wind-direction__img"
          />
        </div>
        <div className="wind-direction__data-box">
          <h5 className="wind-direction__data-text">{windDirection.name}</h5>
        </div>
      </div>
    </div>
  );
};

WindDirection.propTypes = {
  windDirection: PropTypes.object,
};

const mapState = state => {
  return {
    windDirection: weatherWindDirectionSelector(state),
  };
};

export default connect(mapState, null)(WindDirection);
