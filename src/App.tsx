import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityWeather from "./pages/CityWeather";
import FindWeather from "./pages/FindWeather";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
            <Route
              path="/cityweather/:city"
              element={<CityWeather />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="/findweather"
              element={<FindWeather />}
              errorElement={<ErrorPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
