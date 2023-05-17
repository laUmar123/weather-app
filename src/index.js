import './style.css';
import { header } from './headerSection';
import { onLoadDefaultWeather, currentDayInformationContainer } from './currentTemperatureSection';
import { divGenerator } from './generatorFunctions';
import { carouselButtons } from './carouselButtons';

const dailyHourlyWeather = divGenerator(['daily-hourly-weather-carousel']); //the div that will contain the daily weather, and the hourly weather
dailyHourlyWeather.append(carouselButtons());

document.body.append(header(), currentDayInformationContainer, dailyHourlyWeather);
window.addEventListener('load', onLoadDefaultWeather);