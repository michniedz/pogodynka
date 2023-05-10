
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [miasto, setMiasto] = useState("");
    const cities = ["Warsaw", "London", "Paris", "Bangkok"]
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            navigate(`/cityweather/${miasto}`)
        }}>
            <h1>Strona główna</h1>
            <select value={miasto} onChange={(e => setMiasto(e.target.value))}>
                {
                    cities.map(el => {
                        return <option key={el} value={el}>{el}</option>
                    })
                }
            </select>
            <button>Sprawdź pogodę dla {miasto}</button>
        </form>
    );
};
//9d12b81d26aa556a546c41a5f39eac00
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
export default Home;