import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CityWeather = () => {
    const {city} = useParams();
    const API_key = '9d12b81d26aa556a546c41a5f39eac00';
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState("");
    console.log(city);

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            .then(re => setWeather(re));
    });

    useEffect(()=>{
        if(weather){
            fetch(`https://pixabay.com/api/?key=26891500-2a4bc8589f02c3e0cf169079c&q=${city}+${weather.weather[0].main}&image_type=photo`)
                .then(res => res.json())
                .then(re => setImage(re.hits[0].largeImageURL));
        }
    });
    
    return (
        <>
            <h1>Pogoda dla {city}</h1>
            {
                weather && <ul>
                    <li>Temperatura: {weather.main.temp}</li>
                    <li>Pogoda ogólna: {weather.weather[0].main}</li>
                    <li>Ciśnienie: {weather.main.pressure}</li>
                </ul>
            }
            {image && <img src={image} alt={image} />}
        </>
    );
};

export default CityWeather;