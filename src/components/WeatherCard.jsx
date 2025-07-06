import React from 'react';

const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;

    const {
        name,
        sys: { country },
        main: { temp, feels_like, humidity },
        weather
    } = weatherData;

    const weatherMain = weather[0].main;
    const weatherDescription = weather[0].description;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl p-6 text-white shadow-xl mt-5">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h2 className="text-3xl font-bold">{name}, {country}</h2>
                    <p className="text-xl capitalize">{weatherDescription}</p>
                </div>
                <img src={weatherIcon} alt={weatherMain} className="w-24 h-24" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-2xl font-bold">{Math.round(temp)}°C</p>
                    <p>Suhu</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">{Math.round(feels_like)}°C</p>
                    <p>Terasa</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">{humidity}%</p>
                    <p>Kelembaban</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;