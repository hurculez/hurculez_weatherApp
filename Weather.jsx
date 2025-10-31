import "./Weather.css";
import { useState } from "react";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "eb56d6d30ff445e56a0ff8448ec8ce42"; 

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
    setLoading(false);
  };

 return (
  <div className="weather-container">
    <h2 className="weather-title">🌤 hurculez`s Weather App</h2>

    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
      className="weather-input"
    />
    <button onClick={fetchWeather} className="weather-button">
      Get Weather Results
    </button>

    {loading && <p>Loading...</p>}
    {error && <p className="weather-error">{error}</p>}

    {weather && (
      <div className="weather-result">
        <h3>{weather.name}, {weather.sys.country}</h3>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Condition: {weather.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    )}
  </div>
);

}
