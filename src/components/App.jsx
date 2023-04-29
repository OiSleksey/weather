// import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import { Provider } from 'react-redux';
import Weather from './Weather/Weather';
import './App.sass';
// import '../sass/style';
import TestToastContainer from './ToastConatainer';

// console.log(stateUI.isLoadPage);

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);
  return (
    // if (!weatherData || !weatherData.temperature || !stateUI.isLoadPage)
    //   return <LoaderBars />;

    <div className="container">
      <div className="row " id="bg-25">
        <div className="container__main">
          <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <h1>Вы кликнули {count} раз</h1>
            <button onClick={() => setCount(count + 1)}>Кликните здесь</button>
          </div>
          <Weather />
          <TestToastContainer />
        </div>
      </div>
    </div>
  );
}

export default App;

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
