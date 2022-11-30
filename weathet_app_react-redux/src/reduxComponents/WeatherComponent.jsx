import React, { useState } from "react";
import { getWeather, getCurrentWeather } from "../redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import "./WeatherApp.css";
const WeatherComponent = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const temp = useSelector((state) => state.weatherReducer.temp);
  const minTem = useSelector((state) => state.weatherReducer.minTemp);
  const maxTem = useSelector((state) => state.weatherReducer.maxTemp);
  const cityName = useSelector((state) => state.weatherReducer.name);
  const tempIcon = useSelector((state) => state.weatherReducer.icon);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const tempDescription = useSelector(
    (state) => state.weatherReducer.description
  );
  const getData = useSelector((state) => state.weatherReducer.getData);
  const tempLoc = useSelector((state) => state.weatherReducer.country);
  const dataError = useSelector((state) => state.weatherReducer.error);

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div id="container">
      <div className="section">
        <h1 className="header">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
          />
          <button
            onClick={() => dispatch(getCurrentWeather(latitude, longitude))}
          >
            Current Location
          </button>
          <button onClick={() => dispatch(getWeather(city))}>
            Get Weather
          </button>
        </form>
        <div className="dataContainer">
          {getData ? (
            <>
              <div>
                <h4 className="city">
                  {cityName},{tempLoc}
                </h4>
                {temp ? (
                  <h1 className="temp">{Math.floor(temp - 273.15)}°C</h1>
                ) : null}
              </div>
              <div>
                <img
                  className="image"
                  src={`https://openweathermap.org/img/wn/${tempIcon}@2x.png`}
                  alt="Weather Icon"
                  width="200px"
                  height="150px"
                />
                <div className="description">{tempDescription}</div>
              </div>
              <div className="min">
                <span> Min:{Math.floor(minTem - 273.15)}°C</span>|
                <span>Max:{Math.floor(maxTem - 273.15)}°C</span>
              </div>
            </>
          ) : null}
        </div>
        <div className="error">{dataError}</div>
      </div>
    </div>
  );
};

export default WeatherComponent;
