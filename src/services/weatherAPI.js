const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function getCoordinates(city) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kota tidak ditemukan");
    }

    const data = await response.json();
    if (data.length === 0) {
        throw new Error("Kota tidak ditemukan");
    }

    return {
        lat: data[0].lat,
        lon: data[0].lon,
        name: data[0].name,
        country: data[0].country
    };
}

async function getWeather(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Kota tidak ditemukan atau API key salah");
    }

    const data = await response.json();
    return data;
}

export { getWeather, getCoordinates };