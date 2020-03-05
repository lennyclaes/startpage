const appid = '35a4ccb4cd7fe7ae951413bcf3de3592';
const weatherElement = document.querySelector('.weather');

async function getData() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=8791,be&appid=${appid}&units=metric`);
    const json = await data.json();
    return json;
}

async function renderData(data) {
    const html = `
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <div class="weather-data">
            <h3 class="weather-temp">${Math.floor(data.main.temp)}°C</h3>
            <p class="weather-desc">${data.weather[0].description}</p>
        </div>
    `;
    weatherElement.innerHTML = html;
}

(async () => {
    const data = await getData();
    renderData(data);
})()