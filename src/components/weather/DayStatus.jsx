import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTimeDateNow } from '../../redux/time-date/time-date.actions';

const DayStatus = props => {
  useEffect(() => {
    console.log('DayStatus Effect');
    props.getTimeDateNow();
  }, []);
  const displayDayTime = `Today ${props.timeDateNow.hour}:00`;
  if (!displayDayTime) {
    return <h1>Bad</h1>;
  }
  console.log(props);
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

export default connect(mapState, mapDispatch)(DayStatus);
