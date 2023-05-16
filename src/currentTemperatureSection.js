import { checkCategoryOfUv, divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from './generatorFunctions';
import { createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity, retrieveUvNum, retrieveVisibilityDistance, retrieveCloudinessPercentage, retrieveChanceOfRain, retrieveSunriseTime, retrieveSunsetTime, retrieveMoonPhase, retrieveCurrentTempImg, retrieveCurrentTemp, retrieveCurrentCondition, retrieveFeelsLikeTemp } from './retrieveInformation'

const currentDayInformationContainer = divGenerator(['current-day-information']); //this is the container that contains all elements that will provide information about the current moment

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

/**
 * This function is used to display the current temperature along with its associated image
 * @param {string} image this is the path to the image that needs to be displayed 
 * @param {string} temp the string representation of the current temperature 
 * @returns a div element that has two further elements appended within it displaying the current temperature along with its associated image
 */
function tempDetailsSection(image, temp) {
    const tempDetailsContainer = divGenerator(['temp-details']);
    const currentTemp = spanGenerator(['temp'], temp);
    tempDetailsContainer.append(imgGenerator(image, undefined, ['image-weather-description']), headingGenerator('h2', ['current-temp'], '°', currentTemp, retrieveMethodOfMeasurement()));
    return tempDetailsContainer;
};

/**
 * This function is used to display the temperature it feels like along with the outdoor conditions
 * @param {string} description a description of outdoor conditions
 * @param {string} feelsLikeTemp a string representation of the temperature that it feels like
 * @returns a div element that has two further elements appended within it displaying the outdoor conditions at the current moment and the temperature it feels like
 */
function tempConditionsSection(description, feelsLikeTemp) {
    const tempConditionsContainer = divGenerator(['temp-conditions']);
    const feelsLikeHeader = document.createElement('h4');
    feelsLikeHeader.classList.add('feels-like');
    feelsLikeHeader.insertAdjacentHTML('afterbegin', `Feels like <span class="feels-like-temp">${feelsLikeTemp}</span>°<span class="method-of-measurement">${isMethodOfMeasurementCelsius() === true ? 'C' : 'F'}</span>`);
    tempConditionsContainer.append(headingGenerator('h3', ['temp-description'], description), feelsLikeHeader);
    return tempConditionsContainer;
};

/**
 * This functions job is to append the two arguments into the ucrrentTempDetails div which will then be displayed on screen
 * @param {object} tempDetailsSection a dom element object that is the first child of the currentTempDetailsContainer
 * @param {object} tempConditionsSection a dom element object that is the second child of the currentTempDetailsContainer
 * @returns a dom element object contains the two arguments passed as children
 */
function currentTempDetailsSection(tempDetailsSection, tempConditionsSection) {
    const currentTempDetailsContainer = divGenerator(['current-temp-details']);
    console.log(typeof currentTempDetailsContainer);
    currentTempDetailsContainer.append(tempDetailsSection, tempConditionsSection);
    return currentTempDetailsContainer;
};

/**
 * This function is to be used when the webpage is loaded up and it fills the webpage with the required information with the default city being london
 */
async function onLoadDefaultWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=london&days=7&aqi=no&alerts=no', { mode: 'cors' });
    const londonInfo = await response.json();
    currentDayInformationContainer.append(displayLocationDetails(retrieveCity(londonInfo), retrieveCountry(londonInfo), createStandardDate(retrieveDateAndTimeArr(londonInfo)[0]), createStandardTime(retrieveDateAndTimeArr(londonInfo)[1])));
    currentDayInformationContainer.append(currentTempDetailsSection(tempDetailsSection(retrieveCurrentTempImg(londonInfo), retrieveCurrentTemp(londonInfo)), tempConditionsSection(retrieveCurrentCondition(londonInfo), retrieveFeelsLikeTemp(londonInfo))));
    currentDayInformationContainer.append(extraInformationSection(windInformation(retrieveWindDegrees(londonInfo), retrieveWindSpeed(londonInfo)), humidityInformation(retrieveHumidity(londonInfo)),
        uvInformation(retrieveUvNum(londonInfo)), visibilityInformation(retrieveVisibilityDistance(londonInfo)), cloudinessInformation(retrieveCloudinessPercentage(londonInfo)), rainInformation(retrieveChanceOfRain(londonInfo)),
        sunriseInformation(retrieveSunriseTime(londonInfo)), sunsetInformation(retrieveSunsetTime(londonInfo)), moonInformation(retrieveMoonPhase(londonInfo))));

};

function extraInformationSection(append, append2, append3, append4, append5, append6, append7, append8, append9) {
    const extraInformationContainer = divGenerator(['extra-information']);
    extraInformationContainer.append(append, append2, append3, append4, append5, append6, append7, append8, append9);
    return extraInformationContainer;
};

function windInformation(windArrowRotation, windSpeed) {
    const windContainer = divGenerator(['wind']);
    const windInformationContainer = divGenerator(['wind-information']);
    const windSpeedSpan = spanGenerator(['wind-num'], windSpeed);
    windInformationContainer.append(imgGenerator('./../src/assets/arrow.png', 'An arrow rotated by the window direction degrees', ['wind-direction'], windArrowRotation), paragraphGenerator(['wind-speed'], 'mph', windSpeedSpan));
    windContainer.append(headingGenerator('h5', [], 'Wind'), windInformationContainer);
    return windContainer;
};

function humidityInformation(humidityNumber) {
    const humidityContainer = divGenerator(['humidity']);
    const humidity = spanGenerator(['humidity-number'], humidityNumber)
    humidityContainer.append(headingGenerator('h5', [], 'Humidity'), paragraphGenerator(['humidity-percentage'], '%', humidity));
    return humidityContainer;
}

function uvInformation(uvIndexNumber) {
    const uvContainer = divGenerator(['uv-index']);
    uvContainer.append(headingGenerator('h5', [], 'UV Index'), paragraphGenerator(['uv', checkCategoryOfUv(uvIndexNumber)], uvIndexNumber));
    return uvContainer;
}

function visibilityInformation(visibilityDistance) {
    const visibilityContainer = divGenerator(['visibility']);
    const visiblityDistanceSpan = spanGenerator(['visibility-num'], visibilityDistance);
    visibilityContainer.append(headingGenerator('h5', [], 'Visibility'), paragraphGenerator(['visibility-distance'], 'km', visiblityDistanceSpan));
    return visibilityContainer;
}

function cloudinessInformation(cloudPercentage) {
    const cloudinessContainer = divGenerator(['cloudiness']);
    const cloudinessPercentageSpan = spanGenerator(['cloudiness-num'], cloudPercentage);
    cloudinessContainer.append(headingGenerator('h5', [], 'Cloudiness'), paragraphGenerator(['cloudiness-percentage'], '%', cloudinessPercentageSpan));
    return cloudinessContainer;
}

function rainInformation(rainPercentage) {
    const rainContainer = divGenerator(['chance-of-rain']);
    const rainPercentageSpan = spanGenerator(['chance-of-rain-num'], rainPercentage);
    rainContainer.append(headingGenerator('h5', [], 'Chance of Rain'), paragraphGenerator(['chance-of-rain-percentage'], '%', rainPercentageSpan));
    return rainContainer;
}

export { currentDayInformationContainer, onLoadDefaultWeather };