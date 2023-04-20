import React from 'react';
import './TimesOfDay.sass';
import './PartOne.sass';

const PartOne = ({ partDay, partWeather }) => {
  if (!partDay || !partWeather)
    return (
      <div className="times-of-day__part-one night part-one">
        <div className="night__gap part-one__gap-box">
          <h3 className="part-one__gap">Loading...</h3>
        </div>
        <div className="night__times part-one__times-box">
          <h5 className="part-one__times">Loading...</h5>
        </div>
        <div className="night__img  part-one__img-box">
          <img
            src={`./img/weather-code/weathercode-82.png`}
            alt="weathercode"
            className="part-one__img"
          />
        </div>
        <div className="night__temperature  part-one__temperature-box">
          <h4 className="part-one__temperature">-12/-12</h4>
        </div>
      </div>
    );
  const namePart = partDay.partName;
  const timesPart = partDay.partTimes.toString().padStart(2, 0);
  const weatherCode = partWeather.weatherCode;
  const temperature = partWeather.temperature;
  return (
    <div className="times-of-day__part-one night part-one">
      <div className="night__gap part-one__gap-box">
        <h3 className="part-one__gap">{namePart}</h3>
      </div>
      <div className="night__times part-one__times-box">
        <h5 className="part-one__times">{`${timesPart}:00`}</h5>
      </div>
      <div className="night__img  part-one__img-box">
        <img
          src={`./img/weather-code/weathercode-${weatherCode}.png`}
          alt="weathercode"
          className="part-one__img"
        />
      </div>
      <div className="night__temperature  part-one__temperature-box">
        <h4 className="part-one__temperature">{temperature} &deg;С</h4>
      </div>
    </div>
  );
};

export default PartOne;
