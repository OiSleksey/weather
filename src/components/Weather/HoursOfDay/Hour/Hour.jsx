import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../HoursOfDay.sass';
import './Hour.sass';

import { weatherHourSelected } from '../../../../redux/actions/hoursDayWeather.actions';
// import { getStartPartDay } from '../../../../redux/actions/part-weather.actions';

const Hour = ({ dataWeather, setSelectedHour, selectedHour, timeDateNow }) => {
  useEffect(() => {
    setSelectedHour(timeDateNow.hour);
  }, []);
  // useEffect(() => {
  //   // console.log('DayStatus Effect');
  //   props.getTimeDateNow();
  // }, []);
  // const styleActive = partSelected
  //   ? 'hours-of-day__part-one hour hour_active'
  //   : 'hours-of-day__part-one hour';
  // if (!partDay || !partWeather)

  // if (!partDay || !partWeather)
  const hour = dataWeather[0];
  const temperature = dataWeather[1];
  const weatherCode = dataWeather[2];
  const styleActive = selectedHour[hour]
    ? 'hours-of-day__part-one hour hour_active'
    : 'hours-of-day__part-one hour';
  return (
    <div className={styleActive} onClick={() => setSelectedHour(hour)}>
      <div className="hour__times-box">
        <h5 className="hour__times">{hour}:00</h5>
      </div>
      {/* <div className="hour__times-box">
        <h5 className="hour__times">Loading...</h5>
      </div> */}
      <div className="hour__img-box">
        <img
          src={`./img/weather-code/weathercode-${weatherCode}.png`}
          alt="weathercode"
          className="hour__img"
        />
      </div>
      <div className="hour__temperature-box">
        <h5 className="hour__temperature">{temperature}</h5>
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
  };
};
export default connect(mapState, mapDispatch)(Hour);
