import { API_KEY, getDataTime } from "../../utils/locals";
import "./stylePlots.css";
import { useEffect, useState } from "react";
import { TabsPlot } from "./tabs";

export function Plots({coord}) {
    const [weather, setWeather] = useState();

    const fetchDay = async (city) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.latitude}&lon=${city?.longitude}&exclude=minutely&appid=${API_KEY}`);
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
        <div>
        <TabsPlot />
        </div>
      );
    }