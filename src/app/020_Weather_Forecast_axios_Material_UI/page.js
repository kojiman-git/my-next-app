"use client"; 
import { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import { WbSunny, Cloud, Umbrella,Thunderstorm, AcUnit, ErrorOutline } from '@mui/icons-material'; 

const weatherIcons = {
  "clear sky": <WbSunny />,
  "few clouds": <Cloud />,
  "scattered clouds": <Cloud />,
  "broken clouds": <Cloud />,
  "shower rain": <Umbrella />,
  "rain": <Umbrella />,
  "thunderstorm":<Thunderstorm />,
  "snow": <AcUnit />,
  // 他の必要な天気の説明を追加
};

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
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        天気予報アプリ
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="都市名を入力"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={fetchWeatherData} fullWidth>
        取得
      </Button>

      {loading && <CircularProgress style={{ display: 'block', margin: '20px auto' }} />}
      {error && <Typography color="error" align="center">{error}</Typography>}

      {weather && (
        <Card variant="outlined" style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h5">{weather.name} {weatherIcons[weather.weather[0].description] || <ErrorOutline />}</Typography>
            <Typography>温度: {weather.main.temp}°C</Typography>
            <Typography>湿度: {weather.main.humidity}%</Typography>
            <Typography>天気: {weather.weather[0].description}</Typography>
          </CardContent>
        </Card>
      )}
      {forecast && (
        <Card variant="outlined" style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant="h5">明日の天気予報 {weatherIcons[forecast.weather[0].description] || <ErrorOutline />}</Typography>
            <Typography>温度: {forecast.main.temp}°C</Typography>
            <Typography>湿度: {forecast.main.humidity}%</Typography>
            <Typography>天気: {forecast.weather[0].description}</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Home;
