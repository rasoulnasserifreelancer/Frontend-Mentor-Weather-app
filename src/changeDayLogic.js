import { getHourlyWeatherElements } from "./getElements.js";
import { getweatherInfoGotByUserLocation } from "./getLocationLogic.js";
import { getweatherInfoGotByUserSearch } from "./searchLocationLogic.js";
import { setHourlyWetherInfo } from "./setWeatherLogic.js";

const currentDayElement = getHourlyWeatherElements().CurrentDayElement;

currentDayElement.addEventListener("change", async (e) => {
  try {
    let weatherInfo =
      getweatherInfoGotByUserSearch() ||
      (await getweatherInfoGotByUserLocation(
        e.target.dataset.currentLatitude,
        e.target.dataset.currentLlongitude
      ));
    console.log(weatherInfo, e.target);
    for (let option of e.target) {
      if (option.value === e.target.value) {
        console.log(option);
        option.selected = true;
        setHourlyWetherInfo(weatherInfo[2]);
      }
    }
  } catch (error) {
    if (error instanceof NotFoundError) {
      showErrorElement(`${error.message}`, "../assets/images/icon-retry.svg");
    } else if (error instanceof TypeError) {
      showErrorElement(
        "network access error",
        "../assets/images/icon-retry.svg"
      );
    } else {
      showErrorElement(`${error.message}`, "../assets/images/icon-retry.svg");
    }
  }
});
