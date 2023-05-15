import { checkCategoryOfUv, divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from './generatorFunctions';
import { createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity, retrieveUvNum } from './retrieveInformation'

const currentDayInformationContainer = divGenerator(['current-day-information']);

/**
 * This function is used to create the element that will be displayed on screen to show the location and time of the city searched
 * @param {string} city the name of the city that needs to be displayed on screen 
 * @param {string} country the name of the country that needs to be displayed on screen 
 * @param {string} day the date that has converted into a string using the Intl API
 * @param {string} time the time that needs to be displayed on screen
 * @returns a DOM element that contains nested elements that display information about the location and time
 */
function displayLocationDetails(city = '', country = '', day = '', time = '') {
    const locationDetails = divGenerator(['location-details']);
    const cityName = spanGenerator(['city'], city);
    const countryName = spanGenerator(['country'], country);
    const timeDetails = spanGenerator(['time-details'], time);
    const cityDetailsHeader = headingGenerator('h2', ['city-details'], ', ', cityName, countryName);
    const dayDetailsHeader = headingGenerator('h4', ['day-details'], day, undefined, timeDetails);
    locationDetails.append(cityDetailsHeader, dayDetailsHeader);
    return locationDetails;
};
async function onLoadDefaultWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=london&days=7&aqi=no&alerts=no', { mode: 'cors' });
    const londonInfo = await response.json();
    currentDayInformationContainer.append(displayLocationDetails(retrieveCity(londonInfo), retrieveCountry(londonInfo), createStandardDate(retrieveDateAndTimeArr(londonInfo)[0]), createStandardTime(retrieveDateAndTimeArr(londonInfo)[1])));
};