import React from 'react';
import { connect } from 'react-redux';
import { weatherPressureSelector } from '../../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import '../OtherIndicators.sass';
import './Pressure.sass';
import PropTypes from 'prop-types';

// details-weather.selector
const Pressure = ({ pressure }) => {
  if (!pressure) return null;

  return (
    <div className="other-indicators__pressure">
      <div className="other-indicators__pressure">
        <div className="pressure__box">
          <div className="pressure__img-box">
            <img
              src="./img/pressure.png"
              alt="pressure"
              className="pressure__img"
            />
          </div>
          <div className="pressure__data-box">
            <h5 className="pressure__data-text">{pressure}mm</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

Pressure.propTypes = {
  pressure: PropTypes.string,
};

const mapState = state => {
  return {
    pressure: weatherPressureSelector(state),
  };
};

export default connect(mapState, null)(Pressure);
