import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../PartsOfDay.sass';
import './Part.sass';
import { getIndexSelectedPartDay } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';
import { weatherPartSelected } from '../../../../redux/actions/partsOfDayWeather.actions';

// const Part = ({ partDay, partWeather, partSelected, setSelectedPartDay }) => {

const Part = ({
  dataWeather,
  partNow,
  setSelectedPart,
  selectedPart,
  hourNow,
  isRefPart,
}) => {
  // if (!partDay || !partWeather)

  useEffect(() => {
    if (!isRefPart.current) {
      setSelectedPart(partNow);
      isRefPart.current = true;
    }
  }, []);

  const currentPart = dataWeather[0];
  const arrPartDayName = ['Night', 'Morning', 'Day', 'Evening'];
  const arrPartDayTimes = [3, 9, 15, 21];
  // const hour = dataWeather[0];
  const hourPart = arrPartDayTimes[currentPart].toString().padStart(2, 0);
  const namePart = arrPartDayName[currentPart];
  const temperature = dataWeather[1];
  const weatherCode = dataWeather[2];
  const styleActive = selectedPart[currentPart]
    ? 'parts-of-day__part-one night part-one part-one_active'
    : 'parts-of-day__part-one night part-one';
  // const styleActive = 'parts-of-day__part-one night part-one';

  return (
    <div
      className={styleActive}
      onClick={() => {
        setSelectedPart(currentPart);
      }}
    >
      <div className="night__gap part-one__gap-box">
        <h3 className="part-one__gap">{namePart}</h3>
      </div>
      <div className="night__times part-one__times-box">
        <h5 className="part-one__times">{hourPart}:00</h5>
      </div>
      <div className="night__img  part-one__img-box">
        <img
          src={`./img/weather-code/weathercode-${weatherCode}.png`}
          alt="weathercode"
          className="part-one__img"
        />
      </div>
      <div className="night__temperature  part-one__temperature-box">
        <h4 className="part-one__temperature">{temperature}</h4>
      </div>
    </div>
  );
  // const namePart = partDay.partName;
  // const timesPart = partDay.partTimes.toString().padStart(2, 0);
  // const weatherCode = partWeather.weatherCode;
  // const temperature = partWeather.temperature;
  // // console.log(partSelected);
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
  setSelectedPart: weatherPartSelected,
};
const mapState = state => {
  return {
    partNow: getIndexSelectedPartDay(state),
    hourNow: state.timeDateNow.hour,
    selectedPart: state.partWeather.selectedPart,
  };
};
export default connect(mapState, mapDispatch)(Part);
