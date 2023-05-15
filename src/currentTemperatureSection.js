import { checkCategoryOfUv, divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from './generatorFunctions';
import { createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity, retrieveUvNum, retrieveVisibilityDistance, retrieveCloudinessPercentage } from './retrieveInformation'

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

function tempDetailsSection(image, temp) {
    const tempDetailsContainer = divGenerator(['temp-details']);
    const currentTemp = spanGenerator(['temp'], temp);
    tempDetailsContainer.append(imgGenerator(image, undefined, ['image-weather-description']), headingGenerator('h2', ['current-temp'], '°', currentTemp, retrieveMethodOfMeasurement()));
    return tempDetailsContainer;
};

function tempConditionsSection(description, feelsLikeTemp) {
    const tempConditionsContainer = divGenerator(['temp-conditions']);
    const feelsLikeHeader = document.createElement('h4');
    feelsLikeHeader.classList.add('feels-like');
    feelsLikeHeader.insertAdjacentHTML('afterbegin', `Feels like <span class="feels-like-temp">${feelsLikeTemp}</span>°<span class="method-of-measurement">${isMethodOfMeasurementCelsius() === true ? 'C' : 'F'}</span>`);
    tempConditionsContainer.append(headingGenerator('h3', ['temp-description'], description), feelsLikeHeader);
    return tempConditionsContainer;
};

function currentTempDetailsSection(tempDetailsSection, tempConditionsSection) {
    const currentTempDetailsContainer = divGenerator(['current-temp-details']);
    currentTempDetailsContainer.append(tempDetailsSection, tempConditionsSection);
    return currentTempDetailsContainer;
};

async function onLoadDefaultWeather() {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=d26a8a90752f45c2a03154907230505&q=london&days=7&aqi=no&alerts=no', { mode: 'cors' });
    const londonInfo = await response.json();
    currentDayInformationContainer.append(displayLocationDetails(retrieveCity(londonInfo), retrieveCountry(londonInfo), createStandardDate(retrieveDateAndTimeArr(londonInfo)[0]), createStandardTime(retrieveDateAndTimeArr(londonInfo)[1])));
    currentDayInformationContainer.append(currentTempDetailsSection(tempDetailsSection(londonInfo.current.condition.icon, londonInfo.current.temp_c), tempConditionsSection(londonInfo.current.condition.text, londonInfo.current.feelslike_c)));
    currentDayInformationContainer.append(extraInformationSection(windInformation(retrieveWindDegrees(londonInfo), retrieveWindSpeed(londonInfo)), humidityInformation(retrieveHumidity(londonInfo)),
        uvInformation(retrieveUvNum(londonInfo)), visibilityInformation(retrieveVisibilityDistance(londonInfo)), cloudinessInformation(retrieveCloudinessPercentage(londonInfo))));

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

export { currentDayInformationContainer, onLoadDefaultWeather };


