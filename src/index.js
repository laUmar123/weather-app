import './style.css';
import { header } from './headerSection';
import { onLoadDefaultWeather, currentDayInformationContainer } from './currentTemperatureSection';

document.body.append(header(), currentDayInformationContainer);
window.addEventListener('load', onLoadDefaultWeather);