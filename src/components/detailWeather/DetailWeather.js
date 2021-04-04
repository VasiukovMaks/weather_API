import styleDetailWeather from "./styleDetailWeather"

function DetailWeather({content}) {
  const weekDay = getWeekDay();
  
    return (
      <div >
        <h2 style={styleDetailWeather.styleH2}>{content && content.data.name}</h2>
        <h4 style={styleDetailWeather.styleH2}>{weekDay}</h4>
        <h4 style={styleDetailWeather.styleH2}>{content && content.weather}</h4>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  
  function getWeekDay() {
    const weekDays = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    let date = new Date();
    return weekDays[date.getDay()];
  };

  export default DetailWeather;