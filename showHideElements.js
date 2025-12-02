import { getCurrentWeatherElements, getDailyWeatherElements, getErrorAccessingLocationElements, getHourlyWeatherElements } from "./getElements.js";
console.log("showhideelements.js module");

export const hideWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "none";
  getDailyWeatherElements().DailyElement.style.display = "none";
  getHourlyWeatherElements().HourlyElement.style.display = "none";
};

export const showWeatherInfoElements = () => {
  console.log("show weather info elements")
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "flex";
  getDailyWeatherElements().DailyElement.style.display = "flex";
  getHourlyWeatherElements().HourlyElement.style.display = "block";
};

export const showErrorAccessingLocationElement = () => {
  getErrorAccessingLocationElements().ErrorLocationContainer.style.display =
    "flex";
};

export const hideErrorAccessingLocationElement = () => {
  console.log("running hide Error Location accessing");
  getErrorAccessingLocationElements().ErrorLocationContainer.style.display =
    "none";
};

export const showDailyElement = (element) => {
  element.style.display = "flex";
};

export const hideDailyElement = (element) => {
  element.style.display = "none";
};
