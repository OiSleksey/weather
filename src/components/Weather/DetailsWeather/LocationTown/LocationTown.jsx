import React, { useEffect, memo } from 'react';
import '../DetailsWeather.sass';
import './LocationTown.sass';
import { connect } from 'react-redux';
// import { getLocationDispatchWeather } from '../../../../redux/middleware/weatherThunk';
import { namePositionSelector } from '../../../../redux/selectors/locationName.selectors/locationName.selector';
import PropTypes from 'prop-types';

const LocationTown = ({ namePosition }) => {
  ///

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

LocationTown.propTypes = {
  namePosition: PropTypes.string,
};

const mapState = state => {
  return {
    // location: locationSelector(state),
    namePosition: namePositionSelector(state),
  };
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue = prevProps.namePosition === nextProps.namePosition;
  return boolValue;
}

export default connect(mapState)(memo(LocationTown, propsAreEqual));
