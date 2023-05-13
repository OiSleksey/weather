const errorHandling = value => {
  const dataError = {
    error: {
      message: `${value}. Sorry, we're working on it.`,
    },
  };
  return dataError;
};
//Получение города
export const getPosition = async function (lat, lng) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&accept-language=en`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve.features[0].properties;
  } catch (e) {
    return errorHandling(e.message);
  }
};

export const getLocation = async function () {
  //Получение координат
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    // console.log({
    //   lat: position.coords.latitude,
    //   lon: position.coords.longitude,
    //   realCoordinates: true,
    // });
    return {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
      realCoordinates: true,
    };
    // console.log(position);
  } catch (error) {
    // console.error(error);
    // console.log({
    //   lat: 50.448135102839025,
    //   lon: 30.53539719731239,
    //   realCoordinates: false,
    // });
    // return {
    //   lat: 49.1252495,
    //   lon: 33.3970259,
    //   realCoordinates: false,
    // };
    return {
      lat: 50.448135102839025,
      lon: 30.53539719731239,
      realCoordinates: false,
    };

    //Chokurdakh
    // return {
    //   lat: 70.6221817,
    //   lon: 147.8955685,
    //   realCoordinates: false,
    // };
  }
};

// export const coordinates = async function (lat, lon, bool) {
//   // const position =
//   // console.log(position);
//   // position.then(res => console.log(res));
//   return await new Promise(function (resolve, reject) {
//     resolve({
//       lat,
//       lon,
//       realCoordinates: bool,
//     });
//   });
// };

// export async function getLsocation() {
//   try {
//     const position = await new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//     return {
//       lat: position.coords.latitude,
//       lon: position.coords.longitude,
//       realCoordinates: true,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       lat: 50.448135102839025,
//       lon: 30.53539719731239,
//       realCoordinates: false,
//     };
//   }
// }

// const userLocation = getLocation();
// console.log(userLocation.latitude, userLocation.longitude);
navigator.geolocation.getCurrentPosition(
  function (position) {
    //Текущие координаты
    // console.log('My location');
    const { latitude, longitude } = position.coords;
    // console.log(latitude, longitude);
    // getPosition(latitude, longitude);
    // return coordinaes(latitude, longitude, true);t
    // return
    // getWeather.getTemperature(latitude, longitude, dateCurrency);
    // getWeather.getWeatherCode(latitude, longitude, dateCurrency);
    // //не сделаніе для проверки
    // getWeather.getRelativeHumidity(latitude, longitude, dateCurrency);
    // getWeather.getPressure(latitude, longitude, dateCurrency);
    // getWeather.getWindSpeed(latitude, longitude, dateCurrency);
    // getWeather.getWindDirection(latitude, longitude, dateCurrency);
  },
  function () {
    // console.log('Kyiv');
    //Координаты киева
    // return coordinates(50.448135102839025, 30.53539719731239, false);
    // getWeather.getTemperature(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
    // getWeather.getWeatherCode(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
    // //не сделаніе для проверки
    // getWeather.getRelativeHumidity(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
    // getWeather.getPressure(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
    // getWeather.getWindSpeed(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
    // getWeather.getWindDirection(
    //   50.448135102839025,
    //   30.53539719731239,
    //   dateCurrency
    // );
  }
);
