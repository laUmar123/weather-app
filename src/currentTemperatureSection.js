import { checkCategoryOfUv, divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from './generatorFunctions';
import { createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity, retrieveUvNum, retrieveVisibilityDistance, retrieveCloudinessPercentage, retrieveChanceOfRain, retrieveSunriseTime, retrieveSunsetTime, retrieveMoonPhase, retrieveCurrentTempImg, retrieveCurrentTemp, retrieveCurrentCondition, retrieveFeelsLikeTemp, getDate, getDayMaxTemp, getDayMinTemp, getDayWeatherImage } from './retrieveInformation'
import { dailyWeatherSection, dayInformation, dayWeather, dayWeatherDetails } from './weeklyWeather';

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
    currentTempDetailsContainer.append(tempDetailsSection, tempConditionsSection);
    return currentTempDetailsContainer;
};

/**
 * This function is used to append all 9 arguments into the extraInformationContainer that will then be displayed onto the screen
 * @param {object} windInfo a DOM element object that is supposed to be the DOM element displaying wind direction and speed
 * @param {object} humidityInfo a DOM element object that is supposed to be the DOM element displaying humidity percentage
 * @param {object} uvInfo a DOM element object that is supposed to be the DOM element displaying uv-index 
 * @param {object} visibilityInfo a DOM element object that is supposed to be the DOM element displaying visibility distance
 * @param {object} cloudinessInfo a DOM element object that is supposed to be the DOM element displaying cloudiness percentage
 * @param {object} rainInfo a DOM element object that is supposed to be the DOM element displaying the chance of rain
 * @param {object} sunriseInfo a DOM element object that is supposed to be the DOM element displaying sunrise time
 * @param {object} sunsetInfo a DOM element object that is supposed to be the DOM element displaying sunset time
 * @param {object} moonInfo a DOM element object that is supposed to be the DOM element displaying moon-phase information
 * @returns a DOM element object that contains 9 children, which are all the arguments that have been passed
 */
function extraInformationSection(windInfo, humidityInfo, uvInfo, visibilityInfo, cloudinessInfo, rainInfo, sunriseInfo, sunsetInfo, moonInfo) {
    const extraInformationContainer = divGenerator(['extra-information']);
    extraInformationContainer.append(windInfo, humidityInfo, uvInfo, visibilityInfo, cloudinessInfo, rainInfo, sunriseInfo, sunsetInfo, moonInfo);
    return extraInformationContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays information about the wind
 * @param {string} windArrowRotation the degrees by which the arrow that is pointed north should rotate
 * @param {string} windSpeed the speed of the wind
 * @returns a DOM element object that will be used to display information about the wind speed and direction
 */
function windInformation(windArrowRotation, windSpeed) {
    const windContainer = divGenerator(['wind']);
    const windInformationContainer = divGenerator(['wind-information']);
    const windSpeedSpan = spanGenerator(['wind-num'], windSpeed);
    windInformationContainer.append(imgGenerator('./../src/assets/arrow.png', 'An arrow rotated by the window direction degrees', ['wind-direction'], windArrowRotation), paragraphGenerator(['wind-speed'], 'mph', windSpeedSpan));
    windContainer.append(headingGenerator('h5', [], 'Wind'), windInformationContainer);
    return windContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the humidity percentage
 * @param {string} humidityNumber the humidity currently 
 * @returns a DOM element object that will be used to display the humidity percentage
 */
function humidityInformation(humidityNumber) {
    const humidityContainer = divGenerator(['humidity']);
    const humidity = spanGenerator(['humidity-number'], humidityNumber)
    humidityContainer.append(headingGenerator('h5', [], 'Humidity'), paragraphGenerator(['humidity-percentage'], '%', humidity));
    return humidityContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the uv-index
 * @param {string} uvIndexNumber the uv-index currently
 * @returns a DOM element object that will be used to display the uv-index
 */
function uvInformation(uvIndexNumber) {
    const uvContainer = divGenerator(['uv-index']);
    uvContainer.append(headingGenerator('h5', [], 'UV Index'), paragraphGenerator(['uv', checkCategoryOfUv(uvIndexNumber)], uvIndexNumber));
    return uvContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the visibility distance
 * @param {string} visibilityDistance the current visibility distance
 * @returns a DOM element object that will be used to display the visibility distance
 */
function visibilityInformation(visibilityDistance) {
    const visibilityContainer = divGenerator(['visibility']);
    const visiblityDistanceSpan = spanGenerator(['visibility-num'], visibilityDistance);
    visibilityContainer.append(headingGenerator('h5', [], 'Visibility'), paragraphGenerator(['visibility-distance'], 'km', visiblityDistanceSpan));
    return visibilityContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current cloud percentage
 * @param {string} cloudPercentage the current cloud percentage
 * @returns a DOM element object that will be used to display the current cloud percentage
 */
function cloudinessInformation(cloudPercentage) {
    const cloudinessContainer = divGenerator(['cloudiness']);
    const cloudinessPercentageSpan = spanGenerator(['cloudiness-num'], cloudPercentage);
    cloudinessContainer.append(headingGenerator('h5', [], 'Cloudiness'), paragraphGenerator(['cloudiness-percentage'], '%', cloudinessPercentageSpan));
    return cloudinessContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current rain percentage
 * @param {string} rainPercentage the current rain percentage
 * @returns a DOM element object that will be used to display the current rain percentage
 */
function rainInformation(rainPercentage) {
    const rainContainer = divGenerator(['chance-of-rain']);
    const rainPercentageSpan = spanGenerator(['chance-of-rain-num'], rainPercentage);
    rainContainer.append(headingGenerator('h5', [], 'Chance of Rain'), paragraphGenerator(['chance-of-rain-percentage'], '%', rainPercentageSpan));
    return rainContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the sunrise time
 * @param {string} sunriseTime the sunrise time for the day
 * @returns a DOM element object that will be used to display the sunrise time
 */
function sunriseInformation(sunriseTime) {
    const sunriseContainer = divGenerator(['sunrise']);
    sunriseContainer.append(headingGenerator('h5', [], 'Sunrise'), paragraphGenerator(['sunrise-time'], sunriseTime));
    return sunriseContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the sunset time
 * @param {string} sunsetTime the sunset time for the day
 * @returns a DOM element object that will be used to display the sunset time
 */
function sunsetInformation(sunsetTime) {
    const sunsetContainer = divGenerator(['sunset']);
    sunsetContainer.append(headingGenerator('h5', [], 'Sunset'), paragraphGenerator(['sunset-time'], sunsetTime));
    return sunsetContainer;
};

/**
 * This function creates a div element, and appends a <h5></h5> and <p></p> element within it that displays the current moon phase
 * @param {string} moonPhase the current moon phase
 * @returns a DOM element object that will be used to display the current moon phase
 */
function moonInformation(moonPhase) {
    const moonphaseContainer = divGenerator(['moon-phase']);
    moonphaseContainer.append(headingGenerator('h5', [], 'Moon Phase'), paragraphGenerator(['phase'], moonPhase));
    return moonphaseContainer;
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
    document.querySelector('.daily-hourly-weather-carousel').append(dailyWeatherSection(dayWeather(0, dayInformation(getDate(0, londonInfo)), dayWeatherDetails(getDayMaxTemp(0, londonInfo), getDayMinTemp(0, londonInfo)), getDayWeatherImage(0, londonInfo)),
        dayWeather(1, dayInformation(getDate(1, londonInfo)), dayWeatherDetails(getDayMaxTemp(1, londonInfo), getDayMinTemp(1, londonInfo)), getDayWeatherImage(1, londonInfo)),
        dayWeather(2, dayInformation(getDate(2, londonInfo)), dayWeatherDetails(getDayMaxTemp(2, londonInfo), getDayMinTemp(2, londonInfo)), getDayWeatherImage(2, londonInfo)),
        dayWeather(3, dayInformation(getDate(3, londonInfo)), dayWeatherDetails(getDayMaxTemp(3, londonInfo), getDayMinTemp(3, londonInfo)), getDayWeatherImage(3, londonInfo)),
        dayWeather(4, dayInformation(getDate(4, londonInfo)), dayWeatherDetails(getDayMaxTemp(4, londonInfo), getDayMinTemp(4, londonInfo)), getDayWeatherImage(4, londonInfo)),
        dayWeather(5, dayInformation(getDate(5, londonInfo)), dayWeatherDetails(getDayMaxTemp(5, londonInfo), getDayMinTemp(5, londonInfo)), getDayWeatherImage(5, londonInfo)),
        dayWeather(6, dayInformation(getDate(6, londonInfo)), dayWeatherDetails(getDayMaxTemp(6, londonInfo), getDayMinTemp(6, londonInfo)), getDayWeatherImage(6, londonInfo))));
};

export { currentDayInformationContainer, onLoadDefaultWeather };