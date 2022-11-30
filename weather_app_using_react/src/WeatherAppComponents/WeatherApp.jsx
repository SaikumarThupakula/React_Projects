import React, { useState, useEffect } from "react";
import "./WeatherAppCss.css";
import axios from "axios";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [name, setName] = useState("");
  const [getData, setGetData] = useState(false);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  useEffect(() => {
    getCurrentWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);
  const getCurrentWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e5c53a519f75fe0db7194d23108b2b03`
      )
      .then((response) => response.data)
      .then((result) => {
        let celcius = result.main.temp - 273.15;
        setTemp(`${celcius} `);
        setMinTemp(`${result.main.temp_min}` - 273.15);
        setMaxTemp(`${result.main.temp_max}` - 273.15);
        setCountry(result.sys.country);
        setName(result.name);
        setDescription(result.weather[0].description);
        setIcon(result.weather[0].icon);
        setGetData(true);
      });
  };
  const handleClick = (event) => {
    let data = event.target.value;
    setCity(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e5c53a519f75fe0db7194d23108b2b03`
      )
      .then((response) => response.data)
      .then((result) => {
        let celcius = result.main.temp - 273.15;
        setTemp(`${celcius} `);
        setMinTemp(`${result.main.temp_min}` - 273.15);
        setMaxTemp(`${result.main.temp_max}` - 273.15);
        setCountry(result.sys.country);
        setName(result.name);
        setDescription(result.weather[0].description);
        setIcon(result.weather[0].icon);
        setGetData(true);
      })
      .catch((error) => {
        setGetData(false);
        setError(error.response.data.message);
      });
    setError("");
  };
  return (
    <div id="container">
      <div className="section">
        <h1 className="header">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input value={city} onChange={handleClick} type="text" />
          <button>Get Weather</button>
        </form>
        <div className="dataContainer">
          {getData ? (
            <>
              <div>
                <h4 className="city">
                  {name},{country}
                </h4>
                {temp ? <h1 className="temp">{Math.floor(temp)}°C</h1> : null}
              </div>
              <div>
                <img
                  className="image"
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt="Weather Icon"
                  width="200px"
                  height="150px"
                />
                <div className="description">{description}</div>
              </div>
              <div className="min">
                <span> Min:{Math.floor(minTemp)}°C</span>|
                <span>Max:{Math.floor(maxTemp)}°C</span>
              </div>
            </>
          ) : null}
        </div>
        <div className="error">{error}</div>
      </div>
    </div>
  );
};
export default WeatherApp;
