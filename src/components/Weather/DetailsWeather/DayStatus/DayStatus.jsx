import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './DayStatus.sass';
import { dayStatusSelector } from './../../../../redux/selectors/detailsWeather.selectors/dayStatus.selector';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: {
    opacity: 0,
    x: '-120%',
    transition: {
      duration: 0,
    },
  },
  visible: {
    opacity: 1,
    x: '0',
    transition: {
      duration: 0.3,
      delay: 0.4,
      type: 'spring',
    },
  },
};

const DayStatus = ({ dayStatus }) => {
  if (!dayStatus) return null;

  const hourOrPart = dayStatus.hourOrPart;
  const weekday = dayStatus.weekdayName;
  const day = dayStatus.day;
  const month = dayStatus.month;
  const displayDayTime = `${weekday} ${day}.${month} ${hourOrPart}`;
  return (
    <>
      <div className="detail__day-status day-status">
        <div className="day-status__box">
          <motion.h3
            className="day-status__text"
            key={displayDayTime}
            variants={textVariants}
            initial={'hidden'}
            animate={'visible'}
          >
            {displayDayTime}
          </motion.h3>
        </div>
      </div>
    </>
  );
};

DayStatus.propTypes = {
  dayStatus: PropTypes.object,
  // timeDateNow: PropTypes.string,
};

const mapState = state => {
  return {
    // timeDateNow: state.timeDateNow,
    dayStatus: dayStatusSelector(state),
  };
};

// function propsAreEqual(prevProps, nextProps) {
//   const boolValue =
//     prevProps.location.namePosition === nextProps.location.namePosition;
//   return boolValue;
// }
export default connect(mapState)(DayStatus);
// export default connect(mapState, mapDispatch)(memo(DayStatus, propsAreEqual));
