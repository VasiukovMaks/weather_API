import { API_KEY, weatherImg, getDataCards } from "../../utils/locals";
import "./styleTabsDays.css";
import { useEffect, useState } from "react";

export function TabsDays({coord}) {
    const [weather, setWeather] = useState();

    const fetchDay = async (city) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.latitude}&lon=${city?.longitude}&exclude=minutely,hourly&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(getDataCards(data));
    };
  
    useEffect(() => {
      if (coord) {
        fetchDay(coord);
      };
    }, [coord]);


    
    function Card(data) {
      return (
          <div className="cardDay">
            <div>{data.content.Date}</div>
            <img src={data.content.Weather} alt="Image"></img>
            <div className="tempBlock">
              <div style={{color: "gray"}}>{data.content.MaxTemp}</div>
              <div>{data.content.MinTemp}</div>
            </div>
          </div>
        );
  };

      return (
        <div className="cardDays">
         {weather ?
            weather.map(day => <Card content={day}/>) : "Loading"}
        </div>
      );
    }