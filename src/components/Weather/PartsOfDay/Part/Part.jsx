import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../PartsOfDay.sass';
import './Part.sass';
import { weatherPartSelected } from '../../../../redux/actions/partsOfDayWeather.actions';
import { pastePartsSelector } from '../../../../redux/selectors/partsOfDay.selectors/datePartsOfDay.selector';
import PropTypes from 'prop-types';

const Part = ({
  dataWeather,
  partData,
  setSelectedPart,
  selectedPart,
  isRefPart,
}) => {
  // if (!partDay || !partWeather)
  useEffect(() => {
    if (!isRefPart.current) {
      setSelectedPart(partData.partNow);
      isRefPart.current = true;
    }
  }, []);
  const currentPart = dataWeather[0];
  const arrPartDayName = ['Night', 'Morning', 'Day', 'Evening'];
  const arrPartDayTimes = [3, 9, 15, 21];
  // const hour = dataWeather[0];
  const hourPart = arrPartDayTimes[currentPart].toString().padStart(2, 0);
  const namePart = arrPartDayName[currentPart];
  const temperature =
    dataWeather[1] > 0 ? '+' + dataWeather[1] : dataWeather[1];
  const weatherCode = dataWeather[2];
  let styleActive = selectedPart[currentPart] ? 'part part_active' : 'part';
  if (partData.isFirstDay && partData.partNow >= currentPart + 1)
    styleActive = styleActive + ' hour_passed';
  return (
    <div className="parts-of-day__part-box part-box">
      <div
        className={styleActive}
        onClick={() => {
          setSelectedPart(currentPart);
        }}
      >
        <div className=" part__gap-box">
          <h3 className="part__gap">{namePart}</h3>
        </div>
        <div className=" part__times-box">
          <h5 className="part__times">{hourPart}:00</h5>
        </div>
        <div className=" part__img-box">
          <img
            src={`./img/weather-code/weathercode-${weatherCode}.png`}
            alt="weathercode"
            className="part__img"
          />
        </div>
        <div className=" part__temperature-box">
          <h4 className="part__temperature">{temperature} С&deg;</h4>
        </div>
      </div>
    </div>
  );
};

Part.propTypes = {
  dataWeather: PropTypes.array.isRequired,
  setSelectedPart: PropTypes.func.isRequired,
  selectedPart: PropTypes.array.isRequired,
  isRefHour: PropTypes.object,
  partData: PropTypes.object.isRequired,
};

const mapDispatch = {
  setSelectedPart: weatherPartSelected,
};
const mapState = state => {
  return {
    partData: pastePartsSelector(state),
    // partNow: getIndexSelectedPartDay(state),
    hourNow: state.timeDateNow.hour,
    selectedPart: state.partWeather.selectedPart,
  };
};
export default connect(mapState, mapDispatch)(Part);
