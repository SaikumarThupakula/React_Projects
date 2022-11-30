let intialState = {
  name: "",
  temp: "",
  icon: "",
  minTemp: "",
  maxTemp: "",
  error: "",
  country: "",
  // eslint-disable-next-line no-dupe-keys
  icon: "",
  description: "",
  getData: false,
};
export const weatherReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        temp: action.payload.main.temp,
        name: action.payload.name,
        country: action.payload.sys.country,
        icon: action.payload.weather[0].icon,
        minTemp: action.payload.main.temp_min,
        maxTemp: action.payload.main.temp_max,
        description: action.payload.weather[0].description,
        getData: true,
        error: "",
      };
    case "FAIL":
      return {
        error: action.payload.response.data.message,
      };

    default:
      return state;
  }
};
