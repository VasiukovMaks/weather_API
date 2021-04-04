export const endpoint = 'https://api.openweathermap.org/data/2.5/';
export const API_KEY = "65f31ae8be6d500fadd4fb72aa1bd695";
export const tempConventer = (kelvinTemp) => {
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
        case('cloudy'):
            return `/img/cloudy.png`
        default:
            return `/img/sunny.png`
    }
}