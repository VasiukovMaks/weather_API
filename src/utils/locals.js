export const API_KEY = "65f31ae8be6d500fadd4fb72aa1bd695";

export const tempConventerToC = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15)
}

export const tempConventerToF = (kelvinTemp) => {
    return Math.round(kelvinTemp - 273.15)
}

export const timeConventer = (sec) => {
    return new Date(sec * 1000);
}

export const weatherImg = (condition) => {
    switch (condition) {
        case('rain'):
            return `/img/rain.png`
        case('snow'):
            return `/img/snow.png`
        case('clear'):
            return `/img/sunny.png`
        case('clouds'):
            return `/img/cloudy.png`
        default:
            return `/img/sunny.png`
    }
};

export const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

export function getDataTime(ms) {
    const data = new Date(ms);
    return data;
};

export function getDataPlot(data) {
    let dataPlot = [];
        for (let i =0; i < 24;) {
            i = i + 3;
            dataPlot.push({
                Time: (getDataTime(timeConventer(data[i].dt)).getHours() +":00"),
                Temperature: tempConventerToC(data[i].temp),
                Humidity: data[i].humidity,
                WindSpeed: data[i].wind_speed,
                WindDeg: data[i].wind_deg,
            });
        };
    return dataPlot
};

export function getDataCards(data) {
    console.log(data)
    let dataCards = [];
        for (let i =0; i < 8; i++) {
            const date = getDataTime(timeConventer(data.daily[i].dt));
            dataCards.push({
                Date: (date.getDate() + "." + ((date.getMonth()+1) < 10 ? "0" + (date.getMonth()+1): (date.getMonth()+1))),
                Weather: weatherImg(data.daily[i].weather[0].main.toLowerCase()),
                MaxTemp: (tempConventerToC(data.daily[i].temp.max) + "°"),
                MinTemp: (tempConventerToC(data.daily[i].temp.min) + "°"),
            });
        };
    return dataCards
};

export function getWindImg(deg) {
    if (deg > 22.5) {
    return windImg(Math.ceil(((deg - 22.5)/45)));
    } else {
        return windImg(8);
    };
    
};

export const windImg = (condition) => {
    switch (condition) {
        case(8):
            return `/img/south.png`
        case(1):
            return `/img/southwest.png`
        case(2):
            return `/img/west.png`
        case(3):
            return `/img/northwest.png`
        case(4):
            return `/img/north.png`
        case(5):
            return `/img/northeast.png`
        case(6):
            return `/img/east.png`
        case(7):
            return `/img/southeast.png`
        default:
            return `/img/south.png`
    };
};
