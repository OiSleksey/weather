const timeWeather = document.querySelector('.news-weather__time');
const weekdayWeather = document.querySelector('.news-weather__weekday');

//Date Today
export const secondsInterval = setInterval(function () {
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
  // timeToday.textContent = timeIntl;

  const dateInHtml = document.querySelector('.date-of__date');
  const dateCurrency = `${weekdayToday} ${dayToday}/${monthToday}/${yearToday}`;
  // dateInHtml.textContent = dateCurrency;

  const timeAndDateCurrency = `${timeIntl} ${dateCurrency}`;
  return timeAndDateCurrency;
};
//Currency date for wethear
export const dateCurrency = getDateCurrency(new Date());
//time in weather

// timeWeather.textContent = dateCurrency.substring(0, 2) + ':00';
// weekdayWeather.textContent = dateCurrency.substring(9, 12);
