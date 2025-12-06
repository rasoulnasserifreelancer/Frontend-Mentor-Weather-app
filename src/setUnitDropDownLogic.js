import { celsiusToFahrenheit, fahrenheitToCelsius } from "./changeUnitLogic.js";
import {
  getCurrentWeatherElements,
  getDailyWeatherElements,
  getDropdownElements,
  getHourlyWeatherElements,
} from "./getElements.js";
import { showUnitDropDown } from "./showHideElements.js";

const iconDropdown = getDropdownElements().iconDropdown;
const dropdownContainer = getDropdownElements().dropdownUnitList;
const systemSwitch = getDropdownElements().systemSwitch;
const temperatureCel = getDropdownElements().temperatureCel;
const temperatureFar = getDropdownElements().temperatureFar;
const precipitationMm = getDropdownElements().precipitationMm;
const precipitationIn = getDropdownElements().precipitationIn;
const windspeedKmh = getDropdownElements().windspeedKmh;
const windspeedMph = getDropdownElements().windspeedMph;
const checkMarkIcon = getDropdownElements().checkMarkIcon;

const changeTempToFarForAllElements = () => {
  const degElement = getCurrentWeatherElements().degElement;
  const apparentTemp = getCurrentWeatherElements().apparentTemp;
  const dayMaxElements = getDailyWeatherElements().dayMaxElements;
  const dayMinElements = getDailyWeatherElements().dayMinElements;
  const hourTempElements = getHourlyWeatherElements().hourTempElements;
  degElement.innerText = celsiusToFahrenheit(degElement.innerText);
  apparentTemp.innerText = celsiusToFahrenheit(apparentTemp.innerText);
  dayMaxElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
  dayMinElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
  hourTempElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
};

const changeTempToCelForAllElements = () => {
  const degElement = getCurrentWeatherElements().degElement;
  const apparentTemp = getCurrentWeatherElements().apparentTemp;
  const dayMaxElements = getDailyWeatherElements().dayMaxElements;
  const dayMinElements = getDailyWeatherElements().dayMinElements;
  const hourTempElements = getHourlyWeatherElements().hourTempElements;
  degElement.innerText = fahrenheitToCelsius(degElement.innerText);
  apparentTemp.innerText = fahrenheitToCelsius(apparentTemp.innerText);
  dayMaxElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
  dayMinElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
  hourTempElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
};

const addSelectedIconAndClass = (element) => {
  element.append(checkMarkIcon);
  element.classList.add("selected");
};

const dropdownCallbacks = (e) => {
  if (
    !temperatureCel.classList.contains("selected") &&
      (e.target === temperatureCel ||
    e.target.parentElement === temperatureCel)
  ) {
    changeTempToCelForAllElements();
    addSelectedIconAndClass(temperatureCel);
    temperatureFar.classList.remove("selected");
  } else if (
    !temperatureFar.classList.contains("selected") &&
      (e.target === temperatureFar ||
    e.target.parentElement === temperatureFar)
  ) {
    console.log("far has selected",temperatureFar.classList.contains("selected"))
    changeTempToFarForAllElements();
    addSelectedIconAndClass(temperatureFar);
    temperatureCel.classList.remove("selected");
  }
};

iconDropdown.addEventListener("click", showUnitDropDown);
dropdownContainer.addEventListener("click", dropdownCallbacks);
