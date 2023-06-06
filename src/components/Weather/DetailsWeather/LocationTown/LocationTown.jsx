import React, { useEffect, memo } from 'react';
import '../DetailsWeather.sass';
import './LocationTown.sass';
import { connect } from 'react-redux';
// import { getLocationDispatchWeather } from '../../../../redux/middleware/weatherThunk';
import { namePositionSelector } from '../../../../redux/selectors/locationName.selectors/locationName.selector';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: custom => ({
    opacity: 0,
    transform: 'translateX(-120%)',
    transition: {
      duration: 0,
    },
  }),
  visible: custom => ({
    opacity: 1,
    transform: 'translateX(0)',
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  }),
};

const LocationTown = ({ namePosition }) => {
  if (!namePosition) return null;

  return (
    <div className="detail__location location">
      <div className="location__img-box">
        <img
          src="./img/location.png"
          alt="location"
          className="location__img"
        />
      </div>
      {/* <AnimatePresence mode="out-in">
        <motion.div className="toggle__content">
          <motion.h4 */}
      <div className="location__text-box">
        <motion.h3
          className="location__text"
          key={namePosition}
          variants={textVariants}
          initial={'hidden'}
          animate={'visible'}
        >
          {namePosition}
        </motion.h3>
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
