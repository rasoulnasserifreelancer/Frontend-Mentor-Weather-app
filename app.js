import {
  getwetherinfo,
  getCurrentCityByLonAndLat,
  matchWetherCodeToIcon,
} from "./getweatherdata.js";

import {
  getCurrentWeatherElements,
  getDailyWeatherElements,
  getHourlyWeatherElements,
  getErrorAccessingLocationElements,
} from "./getElements.js";

let currentLatitude;
let currentLlongitude;
let currentLocation;
let weatherInfo;

window.onload = async () => {
  navigator.geolocation.getCurrentPosition(
    setPsitionCallbck,
    setFallbackForLocation
  );
};

const setWetherInfo = (weatherInfo) => {
  console.log("running setwether info callback");
  setCurrentWetherInfo(weatherInfo[0]);
  setDailyWetherInfo(weatherInfo[1]);
  setHourlyWetherInfo(weatherInfo[2]);
};

const setCurrentWetherInfo = (res) => {
  getCurrentWeatherElements().precipitationElement.innerText = `${
    res?.precipitation ?? "--"
  }`;
  getCurrentWeatherElements().windElement.innerText = `${
    res?.wind_speed_10m ?? "--"
  }`;
  getCurrentWeatherElements().humidityElement.innerText = `${
    res?.relative_humidity_2m ?? "--"
  }`;
  getCurrentWeatherElements().apparentTemp.innerText = `${
    res?.apparent_temperature ?? "--"
  }`;
  getCurrentWeatherElements().degElement.innerText = `${
    res?.temperature_2m ?? "--"
  }`;
  getCurrentWeatherElements().poster_weather_city_icon.src =
    matchWetherCodeToIcon(res?.weather_code);
  getCurrentWeatherElements().locationElement.innerText = `${
    currentLocation?.city ?? "--"
  }, ${currentLocation?.country ?? "--"}`;
  getCurrentWeatherElements().dateElement.innerText = `${
    new Date(res?.time)?.toDateString() ?? "--"
  }`;
};

const setDailyWetherInfo = (res) => {
  console.log(res.daily.time);
  getDailyWeatherElements().dayNameElements.forEach((p, index) => {
    console.log(p, index);
    p.innerText = new Date(res.daily.time[index]).toString().split(" ")[0];
  });

  getDailyWeatherElements().dayMaxElements.forEach(
    (max, index) => (max.innerText = res.daily.temperature_2m_max[index])
  );

  getDailyWeatherElements().dayMinElements.forEach(
    (min, index) => (min.innerText = res.daily.temperature_2m_min[index])
  );

  getDailyWeatherElements().dayIconImgs.forEach(
    (img, index) => {
      console.log(matchWetherCodeToIcon(res.daily.weather_code[index]));
      (img.src = matchWetherCodeToIcon(res.daily.weather_code[index]))
    }
  );

  console.log(res.daily.weather_code);
};

const setHourlyWetherInfo = (res) => {
  // console.log(res)
};

const setFallbackForApi = (err) => {};

const setFallbackForLocation = (err) => {
  hideWeatherInfoElements();
  showErrorAccessingLocationElement();
};

const setPsitionCallbck = async (pos) => {
  currentLatitude = pos.coords.latitude;
  currentLlongitude = pos.coords.longitude;
  hideErrorAccessingLocationElement();
  try {
    currentLocation = await getCurrentCityByLonAndLat(
      currentLatitude,
      currentLlongitude
    );

    weatherInfo = await Promise.all(
      await getwetherinfo(currentLatitude, currentLlongitude)
    );
    setWetherInfo(weatherInfo);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const setLoadingState = () => {};

const hideWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "none";
  getDailyWeatherElements().DailyElement.style.display = "none";
  getHourlyWeatherElements().HourlyElement.style.display = "none";
};

const showWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "flex";
  getDailyWeatherElements().DailyElement.style.display = "flex";
  getHourlyWeatherElements().HourlyElement.style.display = "block";
};

const showErrorAccessingLocationElement = () => {
  getErrorAccessingLocationElements().ErrorLocationContainer.style.display =
    "flex";
};

const hideErrorAccessingLocationElement = () => {
  getErrorAccessingLocationElements().ErrorLocationContainer.style.display =
    "none";
};
