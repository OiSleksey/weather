import React from 'react';
import { connect } from 'react-redux';
import { weatherRelativeHumiditySelector } from '../../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import '../OtherIndicators.sass';
import './RelativeHumadity.sass';
import PropTypes from 'prop-types';

const RelativeHumadity = ({ relativeHumadity }) => {
  if (!relativeHumadity) {
    return (
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
            <h5 className="relative-humadity__data-text">Loading...</h5>
          </div>
        </div>
      </div>
    );
  }
  return (
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
          <h5 className="relative-humadity__data-text">{relativeHumadity}%</h5>
        </div>
      </div>
    </div>
  );
};

RelativeHumadity.propTypes = {
  relativeHumadity: PropTypes.string,
};

const mapState = state => {
  return {
    relativeHumadity: weatherRelativeHumiditySelector(state),
  };
};

export default connect(mapState, null)(RelativeHumadity);
