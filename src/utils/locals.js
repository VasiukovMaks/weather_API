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
        case('sunny'):
            return `/img/sunny.png`
        case('clouds'):
            return `/img/cloudy.png`
        default:
            return `/img/sunny.png`
    }
}

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
        for (let i =0; i < 10; i++) {
            dataPlot.push({
                Time: (getDataTime(timeConventer(data.content[i].dt)).getHours() +":00"),
                Temperature: tempConventerToC(data.content[i].temp),
            });
        };
    return dataPlot
};
