import styleDayWeather from "./styleDayWeather"
import {weatherImg} from "../../utils/locals"

function DayWeather({content}) {
    return (
      <div style={styleDayWeather.styleOneDay}>
        <div style={{textAlign: "center"}}>{content.day}</div>
        <div style={{textAlign: "center"}}><img src={weatherImg(content && content.main)} alt="img"/></div>
        <div style={styleDayWeather.styleTemp}><div style={{color: "black"}}>{content.maxTemp + "°"}</div><div>{content.minTemp + "°"}</div></div>
      </div>
    );
  }
  
  export default DayWeather;