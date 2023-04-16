import React, { useEffect } from 'react';
import { getLocation } from '../../api-requests/get.location';
import { connect } from 'react-redux';
import {
  weatherLocation,
  getLocationBrowser,
} from '../../redux/location/location.actions';

let count = 0;

const LocationTown = props => {
  ///

  useEffect(() => {
    props.getLocation();
    console.log('useEffet');
  }, [count]);
  ///
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
        <h3 className="location__text">{props.location.namePosition}</h3>
      </div>
    </div>
  );
};
const mapState = state => {
  return {
    location: state.location,
  };
};

const mapDispatch = {
  getLocation: getLocationBrowser,
};

export default connect(mapState, mapDispatch)(LocationTown);
