import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './DayStatus.sass';
// import { getTimeDateNow } from '../../../../redux/actions/timeData.actions';
import { dayStatusSelector } from './../../../../redux/selectors/detailsWeather.selectors/dayStatus.selector';
import PropTypes from 'prop-types';

const DayStatus = ({ dayStatus }) => {
  if (!dayStatus) {
    return <h3>Loading...</h3>;
  }
  const hourOrPart = dayStatus.hourOrPart;
  const weekday = dayStatus.weekdayName;
  const day = dayStatus.day;
  const month = dayStatus.month;
  const displayDayTime = `${weekday} ${day}.${month} ${hourOrPart}`;
  // console.log(props);
  return (
    <>
      <div className="detail__day-status day-status">
        <div className="day-status__box">
          <h3 className="day-status__text">{displayDayTime}</h3>
          {/* <button onClick={() => console.log(props.timeDateNow)}>CLICk</button> */}
        </div>
      </div>
    </>
  );
};

DayStatus.propTypes = {
  dayStatus: PropTypes.object,
};

const mapState = state => {
  return {
    timeDateNow: state.timeDateNow,
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
