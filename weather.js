// https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=0a77f6db1f0dff6d5eea0e1598459bec&units=metric

const form = document.querySelector("#searchArea");
const search = document.querySelector(".searchBtn");

const getWeather = async (cityName) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0a77f6db1f0dff6d5eea0e1598459bec&units=metric`
    );
    console.log(res.data);
    if (res.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".").style.display = "block";
    }
    const city = document.querySelector(".city");
    city.innerHTML = res.data.name;
    const temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(res.data.main.temp)} °C`;
    const humidity = document.querySelector(".humidity");
    humidity.innerHTML = `${res.data.main.humidity} %`;
    const wind = document.querySelector(".wind");
    wind.innerHTML = `${Math.floor(res.data.wind.speed)} Km/hr`;
    const weatherIcon = document.querySelector(".weatherIcon");
    if (res.data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    }
    if (res.data.weather[0].main == "Sunny") {
      weatherIcon.src = "images/sunny.png";
    }
    if (res.data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    if (res.data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    if (res.data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    }
    if (res.data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    if (res.data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  } catch (e) {
    console.log("Some error is there", e);
  }
};

search.addEventListener("click", () => {
  const cityName = form.value;
  getWeather(cityName);
});
