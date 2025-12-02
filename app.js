import {
  getwetherinfo,
  getCurrentCityByLonAndLat,
  matchWetherCodeToIcon,
} from "./getApiData.js";




import {
  getCurrentWeatherElements,
  getDailyWeatherElements,
  getHourlyWeatherElements,
  getErrorAccessingLocationElements,
} from "./getElements.js";
import { getweatherInfoGotByUserLocation} from "./getLocationLogic.js";
import { setWetherInfo } from "./setWeatherLogic.js";
import { hideErrorAccessingLocationElement, hideWeatherInfoElements, showErrorAccessingLocationElement } from "./showHideElements.js";




window.onload = async () => {
  navigator.geolocation.getCurrentPosition(
    setPsitionCallbck,
    setFallbackForLocation
  );
};

export const setPsitionCallbck = async (pos) => {
  let currentLatitude = pos.coords.latitude;
  let currentLlongitude = pos.coords.longitude;
  let currentLocation;
  hideErrorAccessingLocationElement();
  try {
    currentLocation = await getCurrentCityByLonAndLat(
      currentLatitude,
      currentLlongitude
    );
    setWetherInfo(getweatherInfoGotByUserLocation(currentLatitude, currentLlongitude), currentLocation);
  } catch (error) {
    console.log(error);
    throw error;
  }
};



const setFallbackForApi = (err) => {};

const setFallbackForLocation = (err) => {
  hideWeatherInfoElements();
  getErrorAccessingLocationElements().ErrorLocationMessage.innerText =
    "We Couldn't access your location, please try searching for your location";
  showErrorAccessingLocationElement();
};

// const setPsitionCallbck = async (pos) => {
//   currentLatitude = pos.coords.latitude;
//   currentLlongitude = pos.coords.longitude;
//   hideErrorAccessingLocationElement();
//   try {
//     currentLocation = await getCurrentCityByLonAndLat(
//       currentLatitude,
//       currentLlongitude
//     );

//     weatherInfo = await Promise.all(
//       getwetherinfo(currentLatitude, currentLlongitude)
//     );
//     setWetherInfo(weatherInfo);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

const setLoadingState = () => {};

