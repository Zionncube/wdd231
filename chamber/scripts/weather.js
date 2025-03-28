const apiKey = "12490027660b5bd82f4bf2c294cd0f3f"; // Your API Key
const city = "Hammarsdale"; // Your city

async function fetchWeather() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        const weatherData = await weatherResponse.json();

        // Fetch 3-day forecast
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
        const forecastData = await forecastResponse.json();

        // Display current weather
        document.getElementById("temperature").textContent = Math.round(weatherData.main.temp);
        document.getElementById("weather-description").textContent = weatherData.weather[0].description;
        document.getElementById("humidity").textContent = weatherData.main.humidity;
        document.getElementById("sunrise").textContent = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").textContent = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

        // Process and display the 3-day forecast
        let forecastHTML = "";
        const dailyForecasts = {};

        forecastData.list.forEach(item => {
            let date = item.dt_txt.split(" ")[0]; // Extract date (YYYY-MM-DD)
            if (!dailyForecasts[date]) {
                dailyForecasts[date] = item; // Store only the first entry for each day
            }
        });

        let count = 0;
        for (let key in dailyForecasts) {
            if (count >= 3) break; // Limit to 3 days
            let dayData = dailyForecasts[key];
            let temp = Math.round(dayData.main.temp);
            let icon = dayData.weather[0].icon;
            let desc = dayData.weather[0].description;

            forecastHTML += `
                <div class="forecast-day">
                    <p><strong>${new Date(key).toLocaleDateString("en-US", { weekday: "long" })}</strong></p>
                    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                    <p>${temp}°F</p>
                    <p>${desc}</p>
                </div>
            `;
            count++;
        }

        document.getElementById("forecast").innerHTML = forecastHTML;

    } catch (error) {
        console.error("Weather fetch error:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchWeather);
