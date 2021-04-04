import WeekWeather from "./components/weekWeather/WeekWether";
import DetailWeather from "./components/detailWeather/DetailWeather"
import { useEffect, useState } from "react";
import { API_KEY } from "./utils/locals";

function App() {
  const [weather, setWeather] = useState();
  const [coord, setCoord] = useState();

  if (!coord) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      setCoord({
        latitude: latitude,
        longitude: longitude,
      });
    });
  };

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
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <WeekWeather />
      <DetailWeather content={weather && weather} />
    </div>
  );
}

export default App;
