import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CityWeather = () => {
  const { city } = useParams();
  const API_key = "9d12b81d26aa556a546c41a5f39eac00"; // also might wanna use env variables to not expose the API key :D
  const [weather, setWeather] = useState<any>(); // I'm too lazy to make types for this, make it javascript way
  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
      );
      const data = await res.json();
      setWeather(data);

      const res2 = await fetch(
        `https://pixabay.com/api/?key=26891500-2a4bc8589f02c3e0cf169079c&q=${city}+${weather[0].main}&image_type=photo`
      );
      const data2 = await res2.json();
      setImage(data2.hits[0].largeImageURL);
    })();
  }, [city]); // react is complaining for some reason, it shouldn't do that.

  return (
    <>
      <h1>Pogoda dla {city}</h1>
      {weather &&
        (weather.cod !== 200 ? (
          <p>{weather.message}</p>
        ) : (
          <ul>
            <li>Temperatura: {weather.main.temp}</li>
            <li>Pogoda ogólna: {weather.weather[0].main}</li>
            <li>Ciśnienie: {weather.main.pressure}</li>
          </ul>
        ))}
      {image && <img src={image} alt={image} />}
    </>
  );
};

export default CityWeather;
