import { spanGenerator } from "./generatorFunctions";

/**
 * This function converts the date into the GB style of date
 * @param {string or Date} date either a string or Date version can be provided and this is the date we want convert into an Intl date 
 * @returns an object that is the correct format of date
 */
function createStandardDate(date) {
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date.toISOString);
}

/**
 * This function is called to make the time have a 0 at the start if the number before the colon is not double digits yet
 * @param {string} time the time that needs to be padded
 * @returns a padded version of the time, e.g. if its 1:11 it gets changed to 01:11
 */
function createStandardTime(time) {
    return time.padStart(5, 0);
}

/**
 * This function retrieves the city value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the city name provided by the obj
 */
function retrieveCity(obj) {
    return obj.location.name;
}

/**
 * This function retrieves the country value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the country name provided by the obj
 */
function retrieveCountry(obj) {
    return obj.location.country;
}

/**
 * This function retrieves the date and time value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns an Array that stores the date in index 0 and the time in index 1
 */
function retrieveDateAndTimeArr(obj) {
    return obj.location.localtime.split(' ');
}

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a span element with the correct symbol
 */
function retrieveMethodOfMeasurement() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return spanGenerator(['method-of-measurement'], 'C');
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return spanGenerator(['method-of-measurement'], 'F');
}

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a boolean value of whether or not the method of measurement is celsius
 */
function isMethodOfMeasurementCelsius() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return true;
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return false;
}

/**
 * This function is used to retrieve the wind degrees from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the wind degrees
 */
function retrieveWindDegrees(obj) {
    return obj.current.wind_degree;
};

/**
 * This function is used to retrieve the wind speed from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the wind speed
 */
function retrieveWindSpeed(obj) {
    return obj.current.wind_mph;
};

/**
 * This function is used to retrieve the humidity from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the humidity
 */
function retrieveHumidity(obj) {
    return obj.current.humidity
}

/**
 * This function is used to retrieve the uv-index from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the uv-index
 */
function retrieveUvNum(obj) {
    return obj.current.uv;
}

/**
 * This function is used to retrieve the visibility distance from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the visibility distance
 */
function retrieveVisibilityDistance(obj) {
    return obj.current.vis_km;
}

/**
 * This function is used to retrieve the cloudiness percentage from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the cloudiness percentage
 */
function retrieveCloudinessPercentage(obj) {
    return obj.current.cloud;
}

/**
 * This function is used to retrieve the chance of rain from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the chance of rain
 */
function retrieveChanceOfRain(obj) {
    return obj.forecast.forecastday[0].day.daily_chance_of_rain;
}

export { retrieveChanceOfRain, retrieveCloudinessPercentage, retrieveVisibilityDistance, retrieveUvNum, createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity }