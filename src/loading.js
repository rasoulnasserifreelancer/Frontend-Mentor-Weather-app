// import { getCurrentWeather } from "./getApiData";
import { getCurrentWeatherElements } from "./getElements.js";

export const setLoadingState = () => {
    addLoadingStateToCurrentWeatherPosterElement();
    addLoadingStateTocurrentWeatherDetailAPIInformationElement();
};


export const removeLoadingState = () => {
    removeLoadingStateOfCurrentWeatherPosterElement();
    removeLoadingStateOfcurrentWeatherDetailAPIInformationElement();
}

const addLoadingStateToCurrentWeatherPosterElement = () => {
  const currentWeatherPosterElement =
    getCurrentWeatherElements().CurrentWeatherPosterElement;
  currentWeatherPosterElement.innerHTML =
    '<img width=60 height=40 src="../assets/images/icon-loading.svg"/><p>loading...</p>';

  currentWeatherPosterElement.classList.add("loading");
};

const removeLoadingStateOfCurrentWeatherPosterElement = () => {
  const currentWeatherPosterElement =
    getCurrentWeatherElements().CurrentWeatherPosterElement;
  currentWeatherPosterElement.innerHTML = `
            <div class="wether_info_current_poster_city_location_date">
              <span id="location"></span>
              <span id="date"></span>
            </div>
            <div class="wether_info_current_poster_city_degree_icon">
              <div
                class="wether_info_current_poster_city_location_degree_icon_icon"
              >
                <img src="../assets/images/icon-sunny.webp" alt="" />
              </div>
              <span><span id="deg"></span><sup>°</sup></span>
            </div>`;
  currentWeatherPosterElement.classList.remove("loading");
};

const addLoadingStateTocurrentWeatherDetailAPIInformationElement = () => {
  const currentWeatherDetailAPIInformationElement =
    getCurrentWeatherElements().currentWeatherDetailAPIInformationElement;
  console.log(currentWeatherDetailAPIInformationElement,"elements inside of addLoadingStateTocurrentWeatherDetailAPIInformationElement")
    currentWeatherDetailAPIInformationElement.forEach(
    (element) =>{
            console.log(element, "each span element inside addLoadingStateTocurrentWeatherDetailAPIInformationElement");
            (element.innerHTML = "-")

    }
  );
};

const removeLoadingStateOfcurrentWeatherDetailAPIInformationElement = () => {
  const currentWeatherDetailAPIInformationElement =
    getCurrentWeatherElements().currentWeatherDetailAPIInformationElement;
  currentWeatherDetailAPIInformationElement.forEach((element, index) => {
    switch (index) {
      case 0:
        element.innerHTML = 
       `<span>
            <span id="apparent-temp"></span>&deg;
          </span>`
        break;
      case 1:
        element.innerHTML = 
        `  <span>
            <span id="humidity"></span>%
          </span>`
        break;
      case 2:
        element.innerHTML = (
         ` <span>
            <span id="wind"></span> km/h
          </span>`
        );
        break;
      case 3:
        element.innerHTML = (
          `<span>
            <span id="precipitation"></span> mm
          </span>`
        );
        break;
      default:
        break;
    }
  });
};

const addLoadingStateToDayElements = () => {

}
