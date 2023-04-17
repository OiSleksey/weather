'use strict';

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputTemp = document.querySelector('.form__input--temp');
// const inputClimb = document.querySelector('.form__input--climb');

const newsWeather = document.querySelector('.section-first__news-weather');
const temperatureWeatherNow = document.querySelector(
  '.news-weather__temperature-now'
);
const temperatureWeatherAllDay = document.querySelector(
  '.news-weather__temperature-all-day'
);
const timeWeather = document.querySelector('.news-weather__time');
const weekdayWeather = document.querySelector('.news-weather__weekday');
const weathercodeNow = document.querySelector('.news-weather__weathercode-now');
const nameWeatherLocation = document.querySelector(
  '.news-weather__name-lacation'
);

//Date Today
const secondsInterval = setInterval(function () {
  getDateCurrency();
}, 1000);
const getDateCurrency = function () {
  const dateToday = new Date();
  const dayToday = dateToday.getDate().toString().padStart(2, 0);
  const monthToday = (dateToday.getMonth() + 1).toString().padStart(2, 0);
  const yearToday = dateToday.getFullYear();
  const locale = navigator.language;
  const weekdayToday = new Intl.DateTimeFormat(locale, {
    weekday: 'short',
  }).format(dateToday);

  const timeIntl = new Intl.DateTimeFormat('ua-UA', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(dateToday);

  const timeToday = document.querySelector('.date-of__time');
  timeToday.textContent = timeIntl;

  const dateInHtml = document.querySelector('.date-of__date');
  const dateCurrency = `${weekdayToday} ${dayToday}/${monthToday}/${yearToday}`;
  dateInHtml.textContent = dateCurrency;

  const timeAndDateCurrency = `${timeIntl} ${dateCurrency}`;

  const dataTimes = {
    day: dayToday,
    weekday: weekdayToday,
    month: monthToday,
    year: yearToday,
  };
  console.log(dataTimes);
  return timeAndDateCurrency;
};
//Currency date for wethear
const dateCurrency = getDateCurrency(new Date());
//time in weather
timeWeather.textContent = dateCurrency.substring(0, 2) + ':00';
weekdayWeather.textContent = dateCurrency.substring(9, 12);

//Получение температуры
const getTemperature = async function (lat, lon, dateCurrency) {
  const responseTemperature = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
  );
  const dataTemperature = await responseTemperature.json();
  console.log(dataTemperature);
  const temperatureAllDaySort = dataTemperature.hourly.temperature_2m
    .slice(0, 24)
    .sort((x, y) => x - y);
  console.log(temperatureAllDaySort);

  const temperatureNow =
    dataTemperature.hourly.temperature_2m[dateCurrency.substring(0, 2)];
  temperatureWeatherNow.innerHTML = `${temperatureNow}<sup>o </sup>`;

  temperatureWeatherAllDay.innerHTML = `${
    temperatureAllDaySort[0]
  }<sup>o </sup> , ${
    temperatureAllDaySort[temperatureAllDaySort.length - 1]
  }<sup>o </sup>`;
};

//Получение облачности
const getWeatherCode = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode`
  );
  const dataWeathercode = await responseWeathercode.json();
  weathercodeNow.textContent =
    dataWeathercode.hourly.weathercode[dateCurrency.substring(0, 2)];
  console.log(dataWeathercode);
};

//Получение влажности
const getRelativeHumidity = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m`
  );
  const dataWeathercode = await responseWeathercode.json();
  console.log(dataWeathercode);
};

//Получение давления Делим полученые данные на 1.33
const getPressure = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=pressure_msl`
  );
  const dataWeathercode = await responseWeathercode.json();
  console.log(dataWeathercode);
};

// Получение скорости ветра км/ч для м/с разделить на 3.6
const getWindSpeed = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_10m`
  );
  const dataWeathercode = await responseWeathercode.json();
  console.log(dataWeathercode);
};
//Получение Направление ветра в градусач 0-360Юг->Се, 90Во->Зап, 180Се->Юг, 270За->Во.
const getWindDirection = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=winddirection_10m`
  );
  const dataWeathercode = await responseWeathercode.json();
  console.log(dataWeathercode);
};

//Получение города
const getLocation = async function (lat, lng) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}`
  );
  const data = await response.json();
  const location = data.features[0].properties.address.city;
  nameWeatherLocation.textContent = `Weather in ${location}`;
};

//Получение координат
navigator.geolocation.getCurrentPosition(
  function (position) {
    //Текущие координаты
    const { latitude, longitude } = position.coords;
    getTemperature(latitude, longitude, dateCurrency);
    getWeatherCode(latitude, longitude, dateCurrency);
    getLocation(latitude, longitude);
    //не сделаніе для проверки
    getRelativeHumidity(latitude, longitude, dateCurrency);
    getPressure(latitude, longitude, dateCurrency);
    getWindSpeed(latitude, longitude, dateCurrency);
    getWindDirection(latitude, longitude, dateCurrency);
  },
  function () {
    //Координаты киева
    getTemperature(50.448135102839025, 30.53539719731239, dateCurrency);
    getWeatherCode(50.448135102839025, 30.53539719731239, dateCurrency);
  }
);

// class Workout {
//   date = new Date();
//   id = (Date.now() + '').slice(-10);
//   clickNumber = 0;

//   constructor(coords, distance, duration) {
//     this.coords = coords;
//     this.distance = distance; // km
//     this.duration = duration; // min
//   }

//   _setDescription() {
//     this.type === 'running'
//       ? (this.descrition = `Пробежка ${new Intl.DateTimeFormat('ru-Ru').format(
//           this.date
//         )}`)
//       : (this.descrition = `Велотренировка ${new Intl.DateTimeFormat(
//           'ru-Ru'
//         ).format(this.date)}`);
//   }

//   click() {
//     this.clickNumber++;
//   }
// }

// class Running extends Workout {
//   type = 'running';

//   constructor(coords, distance, duration, temp) {
//     super(coords, distance, duration);
//     this.temp = temp;
//     this.calculatePace();
//     this._setDescription();
//   }

//   calculatePace() {
//     // min/km
//     this.pace = this.duration / this.distance;
//   }
// }
// class Cycling extends Workout {
//   type = 'cycling';

//   constructor(coords, distance, duration, climb) {
//     super(coords, distance, duration);
//     this.climb = climb;
//     this.calculateSpeed();
//     this._setDescription();
//   }

//   calculateSpeed() {
//     // km/h
//     this.speed = this.distance / this.duration / 60;
//   }
// }

// // const running = new Running([50, 39], 7, 40, 170);
// // const cycling = new Cycling([50, 39], 37, 80, 370);
// // console.log(running, cycling);

// class App {
//   #map;
//   #mapEvent;
//   #workouts = [];

//   constructor() {
//     // Получение местоположения пользователя
//     this._getPosition();

//     // Получение данных из local storage
//     this._getLocalStorageData();

//     // Добавление обработчиков события
//     form.addEventListener('submit', this._newWorkout.bind(this));
//     inputType.addEventListener('change', this._toggleClimbField);
//     containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this));
//   }

//   _getPosition() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         this._loadMap.bind(this),
//         function () {
//           alert('Невозможно получить ваше местоположение');
//         }
//       );
//     }
//   }

//   _loadMap(position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},14z`);

//     const coords = [latitude, longitude];

//     console.log(this);
//     this.#map = L.map('map').setView(coords, 13);
//     // console.log(map);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(this.#map);

//     // Обработка клика на карте
//     this.#map.on('click', this._showForm.bind(this));

//     // Отображение тренировок из local storage на карте
//     this.#workouts.forEach(workout => {
//       this._displayWorkout(workout);
//     });
//   }

//   _showForm(e) {
//     this.#mapEvent = e;
//     form.classList.remove('hidden');
//     inputDistance.focus();
//   }

//   _hideForm() {
//     inputDistance.value =
//       inputDuration.value =
//       inputTemp.value =
//       inputClimb.value =
//         '';
//     form.classList.add('hidden');
//   }

//   _toggleClimbField() {
//     inputClimb.closest('.form__row').classList.toggle('form__row--hidden');
//     inputTemp.closest('.form__row').classList.toggle('form__row--hidden');
//   }

//   _newWorkout(e) {
//     const areNumbers = (...numbers) =>
//       numbers.every(num => Number.isFinite(num));

//     const areNumbersPositive = (...numbers) => numbers.every(num => num > 0);

//     e.preventDefault();

//     const { lat, lng } = this.#mapEvent.latlng;
//     let workout;

//     // Получить данные из формы
//     const type = inputType.value;
//     const distance = +inputDistance.value;
//     const duration = +inputDuration.value;

//     // Если тренировка является пробежкой, создать объект Running
//     if (type === 'running') {
//       const temp = +inputTemp.value;
//       // Проверка валидности данных
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(temp)
//         !areNumbers(distance, duration, temp) ||
//         !areNumbersPositive(distance, duration, temp)
//       )
//         return alert('Введите положительное число!');

//       workout = new Running([lat, lng], distance, duration, temp);
//     }

//     // Если тренировка является велотренировкой, создать объект Cycling
//     if (type === 'cycling') {
//       const climb = +inputClimb.value;
//       // Проверка валидности данных
//       if (
//         // !Number.isFinite(distance) ||
//         // !Number.isFinite(duration) ||
//         // !Number.isFinite(climb)
//         !areNumbers(distance, duration, climb) ||
//         !areNumbersPositive(distance, duration)
//       )
//         return alert('Введите положительное число!');

//       workout = new Cycling([lat, lng], distance, duration, climb);
//     }

//     // Добавить новый объект в массив тренировок
//     this.#workouts.push(workout);

//     // Отобразить тренировку на карте
//     this._displayWorkout(workout);

//     // Отобразить тренировку в списке
//     this._displayWorkoutOnSidebar(workout);

//     // Спрятать форму и очистить поля ввода данных
//     this._hideForm();

//     // Добавить все тренировки в локальное хранилище
//     this._addWorkoutsToLocalStorage();
//   }

//   _displayWorkout(workout) {
//     L.marker(workout.coords)
//       .addTo(this.#map)
//       .bindPopup(
//         L.popup({
//           maxWidth: 200,
//           minWidth: 100,
//           autoClose: false,
//           closeOnClick: false,
//           className: `${workout.type}-popup`,
//         })
//       )
//       .setPopupContent(
//         `${workout.type === 'running' ? '🏃' : '🚵‍♂️'} ${workout.descrition}`
//       )
//       .openPopup();
//   }

//   _displayWorkoutOnSidebar(workout) {
//     let html = `
//     <li class="workout workout--${workout.type}" data-id="${workout.id}">
//       <h2 class="workout__title">${workout.descrition}</h2>
//       <div class="workout__details">
//         <span class="workout__icon">${
//           workout.type === 'running' ? '🏃' : '🚵‍♂️'
//         }</span>
//         <span class="workout__value">${workout.distance}</span>
//         <span class="workout__unit">км</span>
//       </div>
//       <div class="workout__details">
//         <span class="workout__icon">⏱</span>
//         <span class="workout__value">${workout.duration}</span>
//         <span class="workout__unit">мин</span>
//       </div>

//     `;
//     if (workout.type === 'running') {
//       html += `
//           <div class="workout__details">
//             <span class="workout__icon">📏⏱</span>
//             <span class="workout__value">${workout.pace.toFixed(2)}</span>
//             <span class="workout__unit">мин/км</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">👟⏱</span>
//             <span class="workout__value">${workout.temp}</span>
//             <span class="workout__unit">шаг/мин</span>
//           </div>
//       </li>
//       `;
//     }

//     if (workout.type === 'cycling') {
//       html += `
//           <div class="workout__details">
//             <span class="workout__icon">📏⏱</span>
//             <span class="workout__value">${workout.speed.toFixed(2)}</span>
//             <span class="workout__unit">км/ч</span>
//           </div>
//           <div class="workout__details">
//             <span class="workout__icon">🏔</span>
//             <span class="workout__value">${workout.climb}</span>
//             <span class="workout__unit">м</span>
//           </div>
//       </li>
//       `;
//     }

//     form.insertAdjacentHTML('afterend', html);
//   }

//   _moveToWorkout(e) {
//     const workoutElement = e.target.closest('.workout');
//     console.log(workoutElement);

//     if (!workoutElement) return;

//     const workout = this.#workouts.find(
//       item => item.id === workoutElement.dataset.id
//     );

//     this.#map.setView(workout.coords, 13, {
//       animate: true,
//       pan: {
//         duration: 1,
//       },
//     });
//   }

//   _addWorkoutsToLocalStorage() {
//     localStorage.setItem('workouts', JSON.stringify(this.#workouts));
//   }

//   _getLocalStorageData() {
//     const data = JSON.parse(localStorage.getItem('workouts'));
//     console.log(data);

//     if (!data) return;

//     this.#workouts = data;

//     this.#workouts.forEach(workout => {
//       this._displayWorkoutOnSidebar(workout);
//     });
//   }

//   reset() {
//     localStorage.removeItem('workouts');
//     location.reload();
//   }
// }

// const app = new App();
