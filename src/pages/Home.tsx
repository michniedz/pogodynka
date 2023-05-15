import { useState } from "react";
import { useNavigate } from "react-router-dom";

const cities = ["Warsaw", "London", "Paris", "Bangkok"];

const Home = () => {
  const [miasto, setMiasto] = useState("Warsaw");
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/cityweather/${miasto}`);
      }}
    >
      <h1>Strona główna</h1>
      <select value={miasto} onChange={(e) => setMiasto(e.target.value)}>
        {cities.map((el) => {
          return (
            <option key={el} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <button>Sprawdź pogodę dla {miasto}</button>
    </form>
  );
};

export default Home;
