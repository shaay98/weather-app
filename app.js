"use strict"

async function weather() {
    try {
        const response = await fetch("https://proxy-key-u0q4.onrender.com");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error in weather():', error);
    }
}

weather();

async function moreData() {
    try {
        const response = await fetch("https://proxy-key-u0q4.onrender.com");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error in moreData():', error);
    }
}

moreData();

async function fetchWeatherData(city) {
    const apiKey = "8cd1b8df39a340d497915421252703"; //
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.error('Error in fetchWeatherData():', error);
    }
}

document.getElementById("weather").addEventListener("click", () => {
    const city = "Hammond";
    fetchWeatherData(city);
});
