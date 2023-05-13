import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { error } from '../../../../redux/actions/stateUI.action';

const notifyError = error => {
  toast.error(error.message);
};

const notifySuccessWarn = validСoordinates => {
  if (validСoordinates)
    toast.success(
      'Weather data for your location has been successfully retrieved.'
    );
  if (!validСoordinates) {
    toast.warn(
      'Due to the lack of coordinates, the weather is indicated for Kyiv.',
      {
        onClose: () => {
          console.log('hello');
          setTimeout(() => {
            toast.info(
              'If you want to receive weather data based on your location, please turn on geolocation and reload page.'
            );
          }, 3000);
        },
      }
    );
  }
};

const ToastMessage = ({ weatherData, stateLoadPage, isRefToast, setError }) => {
  if (
    !stateLoadPage ||
    !weatherData ||
    !weatherData.temperature ||
    !weatherData.weatherCode ||
    !weatherData.pressure ||
    !weatherData.relativeHumidity ||
    !weatherData.windSpeed ||
    !weatherData.windDirection ||
    !weatherData.namePosition ||
    !weatherData.location
  )
    return null;

  if (!isRefToast.current) {
    isRefToast.current = true;
    let stateError = false;
    for (const props in weatherData) {
      if (weatherData[props].error) {
        notifyError(weatherData[props].error);
        stateError = true;
        setError(stateError);
      }
    }
    if (!stateError) {
      const validСoordinates = weatherData.location.realCoordinates;
      notifySuccessWarn(validСoordinates);
    }
  }

  return (
    <div>
      <ToastContainer autoClose={8000} pauseOnFocusLoss theme="dark" />
    </div>
  );
};

ToastMessage.propTypes = {
  stateLoadPage: PropTypes.bool,
  weatherData: PropTypes.object,
  isRefToast: PropTypes.object,
  setError: PropTypes.func,
};

const mapState = state => {
  return {
    weatherData: state.weatherData,
    stateLoadPage: state.isUI.isLoadPage,
  };
};

const mapDispatch = {
  setError: error,
};
export default connect(mapState, mapDispatch)(ToastMessage);
