import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { GetWeatherProps } from "@libs/Api/GetWeather";
import "./index.css";
interface indexProps extends HTMLAttributes<HTMLDivElement> {
  data: GetWeatherProps;
}
type indexComponents = FC<indexProps> & PropsWithChildren;
const index: indexComponents = ({ children, data, ...resProps }) => {
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.name}</p>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <img
            alt="weather"
            className="weather-icon"
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind</span>
              <span className="parameter-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
