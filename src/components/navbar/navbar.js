import { weatherImg, tempConventerToC, API_KEY, getDataTime, weekDays } from "../../utils/locals";
import "./styleNavbar.css";
import { useEffect, useState } from "react";

export function Navbar({coord}) {
  const [weather, setWeather] = useState();

  const fetchDay = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city?.latitude}&lon=${city?.longitude}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    setWeather({data});
  };

  useEffect(() => {
    if (coord) {
      fetchDay(coord);
    };
  }, [coord]);
  
    return (
      <div className="navbarConteiner">

          <div className="leftBlockNavbar">
            <div><img src={weatherImg(weather && weather.data.weather[0].main.toLowerCase())} alt="Image"></img></div>
            <div className="navbarTemp navbarBlock">{tempConventerToC(weather && weather.data.main.temp)}</div>
            <div className="navbarBlock">°C | °F</div>
            <div className="navbarBlock">
              <div>{"Feels like: " + tempConventerToC(weather && weather.data.main.feels_like) + "°C"}</div>
              <div>{"Humidity: " + (weather && weather.data.main.humidity) + " %"}</div>
              <div>{"Wind: " + (weather && weather.data.wind.speed) + " m/s"}</div>
            </div>
          </div>

          <div className="rightBlockNavbar">
            <div className="styleLocation">{weather && (weather.data.name + ", " + weather.data.sys.country)}</div>
            <div>{weather && weekDays[getDataTime(weather.data.dt).getDay()]}</div>
            <div>{weather && weather.data.weather[0].main}</div>
          </div>

      </div>
    );
  }
  