"use strict"

async function weather() {
    await fetch("https://proxy-key-u0q4.onrender.com");
    const data = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify ({message: "i like candy"})
}

weather();

async function moreData() {
    try {
        const response = await fetch("https://proxy-key-u0q4.onrender.com");
        if (responseBroke) {
            throw new Error('Try Again :(');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

moreData();

async function fetchWeatherData(city) {
    const apiKey = ("8cd1b8df39a340d497915421252703");
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("weather").addEventListener("click",) () => {
    const city = "Hammond";
    fetchWeatherData(city);
};