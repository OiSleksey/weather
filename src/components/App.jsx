// import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import { Provider, connect } from 'react-redux';

import {
  Routes,
  Route,
  Navigate,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import store from '../redux/store';
import DetailsWeather from './Weather/DetailsWeather/DetailsWeather';
import PartsOfWeek from './Weather/PartsOfWeek/PartsOfWeek';
import PartsOfDay from './Weather/PartsOfDay/PartsOfDay';
import HoursOfDay from './Weather/HoursOfDay/HoursOfDay';
import './App.sass';
// import '../sass/style';

function App({ stateToggle }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);
  const isRefHour = useRef(false);
  const isRefPart = useRef(false);
  const visibleTimesOfday = stateToggle ? (
    <HoursOfDay sendRefHour={isRefHour} />
  ) : (
    <PartsOfDay sendRefPart={isRefPart} />
  );
  return (
    <div className="container">
      <div className="row">
        <div className="container__main">
          <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <h1>Вы кликнули {count} раз</h1>
            <button onClick={() => setCount(count + 1)}>Кликните здесь</button>
          </div>
          <div className="weather">
            <DetailsWeather test={count} />
            <PartsOfWeek />
            {visibleTimesOfday}
            {/* <PartsOfDay /> */}
            {/* <HoursOfDay /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapState = state => {
  return {
    stateToggle: state.toggleTimes.stateToggle,
  };
};
export default connect(mapState)(App);

{
  /* <Routes>
                <Route path="/">
                  <PartsOfDay />
                </Route>
                <Route>
                  <HoursOfDay path="/hour" />
                </Route>
              </Routes> */
}

// function ParentComponent() {
//   const [state, setState] = useState(false);

//   useEffect(() => {
//     if (state) {
//       console.log('Функция из дочернего компонента была запущена');
//     }
//   }, [state]);

//   const handleChildButtonClick = () => {
//     setState(true);
//   };

//   return <ChildComponent onChildButtonClick={handleChildButtonClick} />;
// }

// function ChildComponent({ onChildButtonClick }) {
//   return <button onClick={onChildButtonClick}>Нажми меня</button>;
// }

// В этом примере мы передаем функцию handleChildButtonClick из родительского компонента в компонент ChildComponent в качестве пропса onChildButtonClick. Затем внутри компонента ChildComponent мы вызываем эту функцию при нажатии на кнопку.

// Функция handleChildButtonClick изменяет значение state, которое передается в зависимости массива useEffect в родительском компоненте. Когда значение state изменяется на true, useEffect запускается и вызывает функцию, которая выводит сообщение в консоль.

// Обратите внимание, что если вы используете функциональные компоненты в React, то вам не нужно использовать useCallback, чтобы оптимизировать производительность. Это связано с тем, что React автоматически оптимизирует передачу функций через пропсы и перерендер компонента.
