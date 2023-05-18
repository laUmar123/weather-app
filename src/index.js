import './style.css';
import { header } from './headerSection';
import { onLoadDefaultWeather, currentDayInformationContainer, searchLogic } from './currentTemperatureSection';
import { divGenerator } from './generatorFunctions';
import { carouselButtons } from './carouselButtons';
import { dailyAndHourlyButtonLogic, dotLogic, measurementButtonsLogic, moveBackButtonLogic, moveForwardButtonLogic } from './mainButtonsLogic';

const dailyHourlyWeather = divGenerator(['daily-hourly-weather-carousel']); //the div that will contain the daily weather, and the hourly
dailyHourlyWeather.append(carouselButtons());

document.body.append(header(), currentDayInformationContainer, dailyHourlyWeather);
window.addEventListener('load', onLoadDefaultWeather);

const hourlyWeatherButton = document.querySelector('.hourly-weather-btn'); //this is the button used to display the hourly weather
const dailyWeatherButton = document.querySelector('.daily-weather-btn'); //this is the button used to display the weather for the current and next 6 days
const moveForwardButton = document.querySelector('.move-right'); //this button moves the carousel to the next 6 hours
const moveBackButton = document.querySelector('.move-left'); //this button moves the carousel to the previous 6 hours
const dotsContainer = document.querySelector('.dots'); //the container that holds each dot
const changeDegreesContainer = document.querySelector('.change-degrees'); //the container that holds the celsius and fahrenheit buttons
const searchBar = document.querySelector('#search-bar'); //the search bar in which we enter a city
const searchButton = document.querySelector('.search-button'); //the magnifying glass search button


dailyWeatherButton.addEventListener('click', dailyAndHourlyButtonLogic);
hourlyWeatherButton.addEventListener('click', dailyAndHourlyButtonLogic);
moveForwardButton.addEventListener('click', moveForwardButtonLogic);
moveBackButton.addEventListener('click', moveBackButtonLogic);
dotsContainer.addEventListener('click', dotLogic);
changeDegreesContainer.addEventListener('click', measurementButtonsLogic);
searchBar.addEventListener('keypress', searchLogic);
searchButton.addEventListener('click', searchLogic);