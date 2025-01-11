"use client"; 
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null); 
  const [city, setCity] = useState('Tokyo');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      // 現在の天気情報を取得
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
      setWeather(response.data);

      // 明日の天気予報を取得
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
      setForecast(forecastResponse.data.list[8]); // 明日の天気を取得（3時間ごとのデータのため、適切なインデックスを指定）
    } catch (err) {
      setError('天気情報を取得できませんでした。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>天気予報アプリ</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="都市名を入力"
      />
      <button onClick={fetchWeatherData}>取得</button>

      {loading && <p>読み込み中...</p>}
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>現在の天気: {weather.name}</h2>
          <p>温度: {weather.main.temp}°C</p>
          <p>湿度: {weather.main.humidity}%</p>
          <p>天気: {weather.weather[0].description}</p>
        </div>
      )}
      {forecast && (
        <div>
          <h2>明日の天気予報</h2>
          <p>温度: {forecast.main.temp}°C</p>
          <p>湿度: {forecast.main.humidity}%</p>
          <p>天気: {forecast.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
