import React, { useCallback, useEffect, useState } from 'react';
import LocationTown from './LocationTown/LocationTown';
import DayStatus from './DayStatus/DayStatus';
import WeatherCode from './WeatherCode/WeatherCode';
import TemperatureNow from './TemperatureNow/TemperatureNow';
import OtherIndicators from './OtherIndicators/OtherIndicators';
import ToggleWeather from './ToggleWeather/ToggleWeather';
import NameApp from './NameApp/NameApp';
// import Hamburger from './Hamburger/Hamburger';
import { Sling as Hamburger } from 'hamburger-react';
import '../../../components/App.sass';
import './DetailsWeather.sass';

const DeatailsWeather = props => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    myFunction();
  }, [isOpen]);

  function myFunction() {
    // Ваша функция здесь
    console.log(`count has changed to ${isOpen}`);
  }
  // console.log('DeatailsWeather ' + props.test);

  return (
    <div className="weather__detail detail">
      {/* <!--return--> */}
      <div className="detail__return return">
        <div className="return__img-box">
          <img src="./img/return.png" alt="return" className="return__img" />
        </div>
      </div>
      <LocationTown />
      <NameApp />
      <WeatherCode />
      <TemperatureNow />
      <DayStatus />
      <OtherIndicators />
      <ToggleWeather />
      <div class="detail__hamburger hamburger" style={{ color: 'black' }}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          direction="right"
          distance="sm"
          rounded
          // label="Show menu"
          // hideOutline={false}
        />
      </div>
    </div>
  );
};

export default DeatailsWeather;
