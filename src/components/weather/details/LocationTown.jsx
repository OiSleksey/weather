import React, { useEffect, memo } from 'react';
import './DetailsWeather.sass';
import './LocationTown.sass';
import { connect } from 'react-redux';
import { getLocationBrowser } from '../../../redux/location-weather/location-weather.actions';
import {
  locationSelector,
  namePositionSelector,
} from '../../../redux/location-weather/location-weather.selector';

const LocationTown = ({ location, namePosition, getLocation }) => {
  ///
  useEffect(() => {
    getLocation();
  }, []);
  if (!namePosition) {
    return (
      <div className="detail__location location">
        <div className="location__img-box">
          <img
            src="./img/location.png"
            alt="location"
            className="location__img"
          />
        </div>
        <div className="location__text-box">
          <h3 className="location__text">Loading...</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="detail__location location">
      <div className="location__img-box">
        <img
          src="./img/location.png"
          alt="location"
          className="location__img"
        />
      </div>
      <div className="location__text-box">
        <h3 className="location__text">{namePosition}</h3>
      </div>
    </div>
  );
};
const mapState = state => {
  return {
    location: locationSelector(state),
    namePosition: namePositionSelector(state),
  };
};

const mapDispatch = {
  getLocation: getLocationBrowser,
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue =
    prevProps.location.namePosition === nextProps.location.namePosition;
  return boolValue;
}

export default connect(
  mapState,
  mapDispatch
)(memo(LocationTown, propsAreEqual));
