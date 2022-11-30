import axios from "axios";
export const getWeatherSuccess = (data) => {
  return {
    type: "SUCCESS",
    payload: data,
  };
};
export const getWeatherFailure = (error) => {
  return {
    type: "FAIL",
    payload: error,
  };
};
export const getWeather = (city) => {
  return function (dispatch) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5c53a519f75fe0db7194d23108b2b03`
      )
      .then((response) => {
        let weatherData = response.data;
        dispatch(getWeatherSuccess(weatherData));
      })
      .catch((error) => dispatch(getWeatherFailure(error)));
  };
};
export const getCurrentWeather = (latitude, longitude) => {
  return function (dispatch) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e5c53a519f75fe0db7194d23108b2b03`
      )
      .then((response) => {
        let currentWeatherData = response.data;
        dispatch(getWeatherSuccess(currentWeatherData));
      })
      .catch((error) => dispatch(getWeatherFailure(error)));
  };
};
