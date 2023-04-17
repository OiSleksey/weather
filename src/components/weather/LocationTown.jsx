import React, { useEffect } from 'react';
import { getLocation } from '../../api-requests/get.location';
import { connect } from 'react-redux';
import {
  weatherLocation,
  getLocationBrowser,
} from '../../redux/location/location.actions';

const LocationTown = props => {
  ///
  useEffect(() => {
    props.getLocation();
  }, []);
  //
  let placeName;

  if (!props.location.namePosition || !props.location.namePosition.address) {
    console.log('LocationTown Dont ' + props.test);
    return (
      <h3
        onClick={() => {
          console.log(props.location.namePosition);
        }}
      >
        Dont namePosition
      </h3>
    );
  }
  if (
    props.location.namePosition.address &&
    props.location.namePosition.address.city
  ) {
    console.log('LocationTown city ' + props.test);
    console.log('city');
    placeName = props.location.namePosition.address.city;
  } else {
    console.log('LocationTown Village city' + props.test);
    console.log('city');
    placeName = props.location.namePosition.address.village;
  }

  // if (props.location.address?.city) {
  //   placeName = props.location.address?.city;
  //   console.log('village');
  //   placeName = props.location.address?.city;
  // }
  ///.address.city
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
        <h3 className="location__text">{placeName}</h3>
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

function propsAreEqual(prevProps, nextProps) {
  const boolValue =
    prevProps.location.namePosition === nextProps.location.namePosition;
  return boolValue;
}

export default connect(
  mapState,
  mapDispatch
)(React.memo(LocationTown, propsAreEqual));
