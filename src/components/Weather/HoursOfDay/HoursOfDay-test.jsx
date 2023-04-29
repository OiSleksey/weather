import React, { useEffect, useState, useRef } from 'react';
import '../../App.sass';
import './HoursOfDay-test.sass';
import { connect } from 'react-redux';
import Hour from './Hour/Hour-test';
import { getWeatherDataSelector } from '../../../redux/selectors/hoursOfDay.selectors/weatherHoursOfDay.selector';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HoursOfDay = ({ dataWeather, sendRefHour, hourNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const activeHour = Number(hourNow);
    setCurrentIndex(activeHour);
  }, [hourNow]);

  if (!dataWeather) return null;
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
    } else if (arrTemperatureWeatherCode.length - 3 < currentIndex) {
      setCurrentIndex(arrTemperatureWeatherCode.length - 3);
      return;
    } else if (event.deltaY < 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (event.deltaY > 0) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // const handleMouseWheel = (event) => {
  //   if (event.deltaY < 0) {
  //     setCurrentIndex(currentIndex - 1);
  //   } else if (event.deltaY > 0) {
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  // const handleScroll = e => {
  //   const x = e.currentTarget.scrollLeft;
  //   if (x !== positionRef.current) {
  //     positionRef.current = x;
  //     console.log('Horizontal scroll event occurred' + x);
  //   }
  // };
  // //
  // if (document.getElementById('statistic-table')) scrolling();
  // function scrolling() {
  //   function scrollHorizontally(e) {
  //     e = window.event || e;
  //     var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  //     document.getElementById('statistic-table').scrollLeft -= delta * 10; // Multiplied by 10
  //     e.preventDefault();
  //   }
  //   if (document.getElementById('statistic-table').addEventListener) {
  //     // IE9, Chrome, Safari, Opera
  //     document
  //       .getElementById('statistic-table')
  //       .addEventListener('mousewheel', scrollHorizontally, false);
  //     // Firefox
  //     document
  //       .getElementById('statistic-table')
  //       .addEventListener('DOMMouseScroll', scrollHorizontally, false);
  //   } else {
  //     // IE 6/7/8
  //     document
  //       .getElementById('statistic-table')
  //       .attachEvent('onmousewheel', scrollHorizontally);
  //   }
  // }
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
    paddingLeft: 120,
    paddingRight: 120,
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

      // slideToIndex={currentIndex}
    />
  ));
  // const Gallery = () => {
  //   return (
  //     <AliceCarousel mouseTracking items={items} />
  //   );
  // }

  return (
    <div
      className="weather__hours-of-day hours-of-day scrollbar-hide"
      // id="statistic-table"
      onWheel={handleMouseWheel}
      // onScroll={handleScroll}

      // style={{ userSelect: 'none' }}
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
//
//

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

//   {/* <App /> */}
//   {arrTemperatureWeatherCode.map((element, item) => (
//     <Hour
//     onDragStart={handleDragStart}
//     role="presentation"
//       isRefHour={sendRefHour}
//       hourTest={hourTest}
//       dataWeather={element}
//       key={item}
//     />
//   ))}
