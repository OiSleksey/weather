import React from 'react';
import { connect } from 'react-redux';
import RelativeHumadity from './RelativeHumadity/RelativeHumadity';
import WindSpeed from './WindSpeed/WindSpeed';
import WindDirection from './WindDirection/WindDirection';
import Pressure from './Pressure/Pressure';
import '../DetailsWeather.sass';
import './OtherIndicators.sass';

const OtherIndicators = props => {
  return (
    <div className="detail__other-indicators other-indicators">
      <RelativeHumadity />
      <WindSpeed />
      <WindDirection />
      <Pressure />
    </div>
  );
};

export default OtherIndicators;
