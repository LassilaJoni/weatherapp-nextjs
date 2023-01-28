
const API = process.env.API_KEY;

const makeIconURL = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}

exports.handler = async function (event, context) {
    const value = process.env.MY_IMPORTANT_VARIABLE;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
    };  
  };

const getFormattedWeatherData = async (city, units) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${units}`;

const data = await fetch(URL)
.then((res) => res.json())
.then((data) => data)

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