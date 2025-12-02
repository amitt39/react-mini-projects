import { useState, useEffect } from "react";

function Weather() {
  const [inputValue, setInputValue] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  async function handleSearch() {
    const city = inputValue.trim();
    if (!city) {
      alert("Enter City!");
      return;
    }
    setLoading(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        setWeatherData(null);
        alert(data?.message || `Error: ${res.status}`);
        setInputValue("");
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      setWeatherData(null);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="main_container">
        <div className="input_block">
          <input
            type="text"
            name="city"
            placeholder="Enter city..."
            value={inputValue}
            onChange={handleInput}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        {loading && <p>Loading...</p>}

        {!loading && weatherData && (
          <div className="weather_details">
            <h1>
              <span>{Math.round(weatherData.main.temp)}</span>°C
            </h1>

            <div className="other-details">
              <span>{weatherData.name}</span>
              <span>{weatherData.weather[0].description}</span>
              <span>{weatherData.main.humidity}</span>
              <span>{weatherData.wind.speed}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
