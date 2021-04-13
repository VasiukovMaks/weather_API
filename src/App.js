import {Navbar} from "./components/navbar/navbar";
import {Plots} from "./components/plots/plots";
import { useState } from "react";
import "./styleApp.css";
import 'antd/dist/antd.css';
import {TabsDays} from "./components/tabsDays/tabsDays"

function App() {
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


  return (
      <div className="mainDiv">
        <Navbar coord={coord && coord} />
        <Plots coord={coord && coord} />
        <TabsDays coord={coord && coord} />
      </div>
  );
}

export default App;
