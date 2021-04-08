import {getWindImg} from "../../utils/locals"
import "./styleCard.css";

export function WindCard({content}) {
    return (
    <div className="cardBlock">
        {content.length ?
            content.map(day => <Card content={day}/>) : "Loading"}
    </div>
    );
  };

function Card(data) {
    return (
        <div className="card">
          <div>{Math.ceil((data.content.WindSpeed) * 10)/10 + " м/с"}</div>
          <img style={{width: "65px", height: "70px"}} src={getWindImg(data && data.content.WindDeg)} alt="Image"></img>
          <div>{data.content.Time}</div>
        </div>
      );
};
  