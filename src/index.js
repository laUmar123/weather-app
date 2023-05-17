import './style.css';
import { header } from './headerSection';
import { onLoadDefaultWeather, currentDayInformationContainer } from './currentTemperatureSection';
import { divGenerator } from './generatorFunctions';

const dailyHourlyWeather = divGenerator(['daily-hourly-weather-carousel']); //the div that will contain the daily weather, and the hourly weather

document.body.append(header(), currentDayInformationContainer, dailyHourlyWeather);
window.addEventListener('load', onLoadDefaultWeather);