import React, { useEffect, useState } from 'react';
import './PartsOfDay.sass';
import { connect } from 'react-redux';
import Part from './Part/Part';
import { getWeatherDataSelector } from '../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { pastePartsSelector } from '../../../redux/selectors/partsOfDay.selectors/datePartsOfDay.selector';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const PartsOfDay = ({ dataWeather, sendRefPart, partData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const activePart = Number(partData.partNow);
    setCurrentIndex(activePart);
  }, [partData.partNow]);

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
    <Part
      onDragStart={handleDragStart}
      role="presentation"
      isRefPart={sendRefPart}
      dataWeather={element}
      key={item}

      // slideToIndex={currentIndex}
    />
  ));
  console.log(partData.partNow);

  return (
    <div className="main__parts-of-day parts-of-day scrollbar-hide">
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

const mapState = state => {
  return {
    dataWeather: getWeatherDataSelector(state),
    partData: pastePartsSelector(state),
  };
};

export default connect(mapState)(PartsOfDay);
