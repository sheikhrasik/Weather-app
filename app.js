const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const search = document.querySelector("#search");
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  showWeather(data);
};

const showWeather = (data) => {
 if (data.cod == "404"){
  weather.innerHTML = `<h2>City not found</h2>`;
  return;
 }
   weather.innerHTML = `<div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" />
        </div>

        <div>
          <h2>${data.main.temp} ℃</h2>
          <h4>${data.weather[0].main}</h4>
        </div>`;
};

form.addEventListener("submit", function (e) {
  getWeather(search.value);
  e.preventDefault();
});
