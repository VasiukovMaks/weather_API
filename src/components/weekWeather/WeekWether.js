import DayWeather from "../dayWeather/DayWeather";

const weatherTest = {
    day: "Mn",
    maxTemp: "+10",
    minTemp: "-10",
};

function WeekWeather() {

    return (
      <div>
            <DayWeather key={performance.now()} content={weatherTest}/>
            <DayWeather key={performance.now()} content={weatherTest}/>
            <DayWeather key={performance.now()} content={weatherTest}/>
            <DayWeather key={performance.now()} content={weatherTest}/>
            <DayWeather key={performance.now()} content={weatherTest}/>
      </div>
    );
  }
  
  export default WeekWeather;