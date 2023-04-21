import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './DayStatus.sass';
import { getTimeDateNow } from '../../../../redux/actions/time-date.actions';

const DayStatus = props => {
  useEffect(() => {
    // console.log('DayStatus Effect');
    props.getTimeDateNow();
  }, []);
  if (!props.timeDateNow.hour) {
    return <h3>Loading...</h3>;
  }
  const displayDayTime = `Today ${props.timeDateNow.hour}:00`;
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

const mapState = state => {
  return {
    timeDateNow: state.timeDateNow,
  };
};

const mapDispatch = {
  getTimeDateNow: getTimeDateNow,
};

// function propsAreEqual(prevProps, nextProps) {
//   const boolValue =
//     prevProps.location.namePosition === nextProps.location.namePosition;
//   return boolValue;
// }
export default connect(mapState, mapDispatch)(DayStatus);
// export default connect(mapState, mapDispatch)(memo(DayStatus, propsAreEqual));
