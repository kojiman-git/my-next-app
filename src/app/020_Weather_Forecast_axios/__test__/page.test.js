import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import Home from '../page'; 

jest.mock('axios');

describe('Homeコンポーネント', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('天気情報を取得して表示する', async () => {
    const weatherData = {
      name: 'Tokyo',
      main: { temp: 20, humidity: 60 },
      weather: [{ description: '晴れ' }],
    };

    const forecastData = {
      list: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        { main: { temp: 18, humidity: 70 }, weather: [{ description: '曇り' }] },
      ],
    };

    axios.get.mockResolvedValueOnce({ data: weatherData });
    axios.get.mockResolvedValueOnce({ data: forecastData });

    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText('都市名を入力'), { target: { value: 'Tokyo' } });
    fireEvent.click(screen.getByText('取得'));

    await waitFor(() => {
      expect(screen.getByText('現在の天気: Tokyo')).toBeInTheDocument();
      expect(screen.getByText('温度: 20°C')).toBeInTheDocument();
      expect(screen.getByText('湿度: 60%')).toBeInTheDocument();
      expect(screen.getByText('天気: 晴れ')).toBeInTheDocument();
      expect(screen.getByText('明日の天気予報')).toBeInTheDocument();
      expect(screen.getByText('温度: 18°C')).toBeInTheDocument();
      expect(screen.getByText('湿度: 70%')).toBeInTheDocument();
      expect(screen.getByText('天気: 曇り')).toBeInTheDocument();
    });
  });

  test('エラーが発生した場合にエラーメッセージを表示する', async () => {
    axios.get.mockRejectedValueOnce(new Error('エラー'));

    render(<Home />);

    fireEvent.click(screen.getByText('取得'));

    await waitFor(() => {
      expect(screen.getByText('天気情報を取得できませんでした。')).toBeInTheDocument();
    });
  });

  test('ローディング中のメッセージを表示する', async () => {
    const weatherData = {
      name: 'Tokyo',
      main: { temp: 20, humidity: 60 },
      weather: [{ description: '晴れ' }],
    };

    axios.get.mockImplementationOnce(() => new Promise(() => {})); // 永遠に解決しないPromise
    axios.get.mockResolvedValueOnce({ data: weatherData });

    render(<Home />);

    fireEvent.click(screen.getByText('取得'));

    expect(screen.getByText('読み込み中...')).toBeInTheDocument();
  });
});
