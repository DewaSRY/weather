// const api_key = "0b07d835b8957ada4d2a2bcb30d4d903";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "0b07d835b8957ada4d2a2bcb30d4d903"; // enter your key from openweather API

// // export { api_key };
// ("https://api.openweathermap.org/data/2.5/forecast?q=jakarta&units=Metric&appid=0b07d835b8957ada4d2a2bcb30d4d903");

// const handleOnSearchChange = (searchData) => {
//   const [lat, lon] = searchData.value.split(" ");

//   const currentWeatherFetch = fetch(
//     `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//   );
//   const forecastFetch = fetch(
//     `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//   );

//   Promise.all([currentWeatherFetch, forecastFetch])
//     .then(async (response) => {
//       const weatherResponse = await response[0].json();
//       const forcastResponse = await response[1].json();

//       setCurrentWeather({ city: searchData.label, ...weatherResponse });
//       setForecast({ city: searchData.label, ...forcastResponse });
//     })
//     .catch(console.log);
// };
