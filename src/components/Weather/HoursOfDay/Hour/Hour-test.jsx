import React, { useEffect, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import '../HoursOfDay-test.sass';
import './Hour-test.sass';
import { pasteTimesSelector } from '../../../../redux/selectors/hoursOfDay.selectors/dateHoursOfDay.selector';

import {
  weatherHourSelected,
  startAction,
} from '../../../../redux/actions/hoursOfDayWeather.actions';
// import { getStartPartDay } from '../../../../redux/actions/part-weather.actions';

const Hour = ({
  dataWeather,
  timeDateNow,
  setSelectedHour,
  selectedHour,
  isRefHour,
  hourData,
}) => {
  useEffect(() => {
    if (!isRefHour.current) {
      setSelectedHour(hourData.hourNow);
      isRefHour.current = true;
    }
  }, []);

  // if (!partDay || !partWeather)

  const currentHour = dataWeather[0];
  const temperature =
    dataWeather[1] > 0 ? '+' + dataWeather[1] : dataWeather[1];
  const weatherCode = dataWeather[2];
  let styleActive = selectedHour[currentHour] ? ' hour hour_active' : ' hour';
  if (hourData.isFirstDay && hourData.hourNow >= currentHour + 1)
    styleActive = styleActive + ' hour_passed';
  const displayHour = currentHour.toString().padStart(2, 0);
  // const stylePast = hourNow
  return (
    <div className="hours-of-day__hour-box hour-box">
      <div className={styleActive} onClick={() => setSelectedHour(currentHour)}>
        <div className="hour__times-box">
          <h5 className="hour__times">{displayHour}:00</h5>
        </div>
        {/* <div className="hour__times-box">
        <h5 className="hour__times">Loading...</h5>
      </div> */}
        <div className="hour__img-box" style={{ pointeeEvents: 'none' }}>
          <img
            src={`./img/weather-code/weathercode-${weatherCode}.png`}
            alt="weathercode"
            className="hour__img"
            style={{ pointerEvents: 'none' }}
          />
        </div>
        <div className="hour__temperature-box">
          <h5 className="hour__temperature">{temperature} С&deg;</h5>
        </div>
      </div>
    </div>
  );
  // const namePart = partDay.partName;
  // const timesPart = partDay.partTimes.toString().padStart(2, 0);
  // const weatherCode = partWeather.weatherCode;
  // const temperature = partWeather.temperature;
  // console.log(partSelected);
  // return (
  //   <div className={styleActive} onClick={setSelectedPartDay}>
  //     <div className="night__gap part-one__gap-box">
  //       <h3 className="part-one__gap">{namePart}</h3>
  //     </div>
  //     <div className="night__times part-one__times-box">
  //       <h5 className="part-one__times">{`${timesPart}:00`}</h5>
  //     </div>
  //     <div className="night__img  part-one__img-box">
  //       <img
  //         src={`./img/weather-code/weathercode-${weatherCode}.png`}
  //         alt="weathercode"
  //         className="part-one__img"
  //       />
  //     </div>
  //     <div className="night__temperature  part-one__temperature-box">
  //       <h4 className="part-one__temperature">{temperature} &deg;С</h4>
  //     </div>
  //   </div>
  // );
};
const mapDispatch = {
  setSelectedHour: weatherHourSelected,
};
const mapState = state => {
  return {
    timeDateNow: state.timeDateNow,
    selectedHour: state.hourWeather.selectedHour,
    hourData: pasteTimesSelector(state),
  };
};
export default connect(mapState, mapDispatch)(Hour);
