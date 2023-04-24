import React, { useEffect } from 'react';
import '../../App.sass';
import './HoursOfDay.sass';
import { connect } from 'react-redux';
// import NightPart from './NightPart/NightPart';
// import MorningPart from './MorningPart/MorningPart';
// import DayPart from './DayPart/DayPart';
// import EveningPart from './EveningPart/EveningPart';
import Hour from './Hour/Hour';
// import { getStartPartsDay } from '../../../redux/middleware/partsDayThunk';
import { getWeatherDataSelector } from '../../../redux/selectors/hoursOfDay.selectors/weatherHoursOfDay.selector';

const HoursOfDay = ({ dataWeather }) => {
  if (!dataWeather) return null;
  const arrTemperature = dataWeather.temperature;
  const arrWeatherCode = dataWeather.weatherCode;
  const arrTemperatureWeatherCode = arrTemperature.map((element, index) => [
    index,
    element,
    arrWeatherCode[index],
  ]);
  // useEffect(() => {
  //   props.getStartPartDays();
  // });
  return (
    <div className="weather__hours-of-day hours-of-day">
      {arrTemperatureWeatherCode.map((element, item) => (
        <Hour dataWeather={element} key={item} />
      ))}
    </div>
  );
};
// const mapDispatch = {
//   getStartPartDays: getStartPartsDay,
// };
const mapState = state => {
  return {
    dataWeather: getWeatherDataSelector(state),
  };
};
export default connect(mapState, null)(HoursOfDay);
///

// const hours = Array.from({ length: 24 }, (_, i) => i + 1); // создаем массив с часами

// function App() {
//   return (
//     <div>
//       {hours.map(hour => (
//         <OneHour key={hour} />
//       ))}
//     </div>
//   );
// }

// (2) [Array(24), Array(24)]
//  Array(0: (24) [8.9, 8.7, 8.3, 7.8, 7.8, 9.3, 11.1, 13, 14.6, 16.9, 17.7, 17.6, 17.8, 17, 17, 16.6, 15.6, 14, 13.1, 12.2, 11.3, 10.5, 9.6, 8.8]
// Array(1): (24) ['2-3', '2-3', '2-3', '1', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '2-3', '1', '0', '0', '0', '0', '0', '0', '0', '0']

// Как мне их обьеденить в один массив,? Что бы длина массива была 24. И массив состоял из массивов. [[Array(0)[0],Array(1)[0]], [Array(0)[1],Array(1)[1]], [Array(0)[2],Array(1)[2]], [Array(0)[3],Array(1)[3]], [Array(0)[4],Array(1)[4]], [Array(0)[5],Array(1)[5]], и так далее.......]
