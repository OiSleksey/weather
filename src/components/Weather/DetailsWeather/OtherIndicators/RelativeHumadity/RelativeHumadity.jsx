import React from 'react';
import { connect } from 'react-redux';
import { weatherRelativeHumaditySelector } from '../../../../../redux/selectors/details-weather.selector';
import '../OtherIndicators.sass';
import './RelativeHumadity.sass';

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

const mapState = state => {
  return {
    relativeHumadity: weatherRelativeHumaditySelector(state),
  };
};

export default connect(mapState, null)(RelativeHumadity);
