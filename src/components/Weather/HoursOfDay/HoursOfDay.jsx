import React, { useEffect, useState, useRef } from 'react';
import '../../App.sass';
import './HoursOfDay.sass';
import { connect } from 'react-redux';
import Hour from './Hour/Hour';
import { getWeatherDataSelector } from '../../../redux/selectors/hoursOfDay.selectors/weatherHoursOfDay.selector';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HoursOfDay = ({ dataWeather, sendRefHour, hourNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const activeHour = Number(hourNow);
    setCurrentIndex(activeHour);
  }, [hourNow]);

  if (!dataWeather || !hourNow) return null;
  const arrTemperature = dataWeather.temperature;
  const arrWeatherCode = dataWeather.weatherCode;
  const arrTemperatureWeatherCode = arrTemperature.map((element, index) => [
    index,
    element,
    arrWeatherCode[index],
  ]);

  const handleMouseWheel = event => {
    if (currentIndex < 0) {
      return setCurrentIndex(0);
    } else if (arrTemperatureWeatherCode.length - 2 < currentIndex) {
      setCurrentIndex(arrTemperatureWeatherCode.length - 2);
      return;
    } else if (event.deltaY < 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (event.deltaY > 0) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSlideChanged = ({ item }) => {
    setCurrentIndex(item);
  };
  const handleDragStart = e => e.preventDefault();
  const propsCarousel = {
    // activeIndex: currentIndex - 4,
    // controlsStrategy: 'default,alternate',
    animationDuration: 100,
    autoWidth: true,
    disableDotsControls: true,
    keyboardNavigation: true,
    mouseTracking: true,
    // responsive: {
    //   0: {
    //     items: 3,
    //     itemsFit: 'undefined',
    //   },
    //   1024: {
    //     items: 3,
    //     itemsFit: 'contain',
    //   },
    // },
    swipeDelta: 5,
    paddingLeft: 90,
    paddingRight: 90,
    // autoPlayControls: true,
    // autoHeight: true,
    // animationType: 'fadeout'
  };
  const items = arrTemperatureWeatherCode.map((element, item) => (
    <Hour
      onDragStart={handleDragStart}
      role="presentation"
      isRefHour={sendRefHour}
      dataWeather={element}
      key={item}
    />
  ));

  return (
    <div
      className="main__hours-of-day hours-of-day scrollbar-hide"
      onWheel={handleMouseWheel}
    >
      <AliceCarousel
        mouseTracking
        items={items}
        {...propsCarousel}
        activeIndex={currentIndex - 1}
        onSlideChanged={handleSlideChanged}
      />
    </div>
  );
};

HoursOfDay.propTypes = {
  dataWeather: PropTypes.object,
  sendRefHour: PropTypes.object.isRequired,
  hourNow: PropTypes.string,
};

const mapState = state => {
  return {
    dataWeather: getWeatherDataSelector(state),
    hourNow: state.timeDateNow.hour,
  };
};
export default connect(mapState, null)(HoursOfDay);

// 1//091Ro4dhUhOHKCgYIARAAGAkSNwF-L9IrjcsgZRxcKPG7u1gEPpbSa-_g9bQVaJfa1Ebvjgap48InXq_z5dS3rBUxuRA5ggQoO3s

// Authenticating with a `login:ci` token is deprecated and will be removed in a future major version of `firebase-tools`. Instead, use a service

// accoaJfa1Ebvjgap48InXq_z5dS3rBUxuRA5ggQoO3s

// accoaJfa1Ebvjgap48InXq_z5dS3rBUxuRA5ggQoO3s
