const API_KEY1 = 'f47d91c78b4ac3921dc8e2de289e8260'
const API_KEY = '5a9eafd53d67380a70dd756503ed3181'


const makeIconURL = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

const getFormattedWeatherData = async (city, units) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

const data = await fetch(URL)
.then((res) => res.json())
.then((data) => data)
console.log(data);

const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
} = data

const {description, icon} = weather[0]

return {
    description,
    iconURL: makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
};

};

export default getFormattedWeatherData