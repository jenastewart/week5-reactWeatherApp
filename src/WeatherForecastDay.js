import React from "react";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function min() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        ></img>
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{max()}</span>
        <span className="WeatherForecast-temperature-min">{min()}</span>
      </div>
    </div>
  );
}
