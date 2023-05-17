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
};

/**
 * This function takes a date and converts it to en-GB locale form
 * @param {string} dateToConvert a string representation of a date that we want to convert into the GB standard 
 * @returns a string that displays the date in the en-GB locale form
 */
function createShortStandardDate(dateToConvert) {
    const date = new Date(dateToConvert)
    return new Intl.DateTimeFormat("en-GB").format(date.getTime());
}

/**
 * This function is called to make the time have a 0 at the start if the number before the colon is not double digits yet
 * @param {string} time the time that needs to be padded
 * @returns a padded version of the time, e.g. if its 1:11 it gets changed to 01:11
 */
function createStandardTime(time) {
    return time.padStart(5, 0);
};

/**
 * This function retrieves the city value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the city name provided by the obj
 */
function retrieveCity(obj) {
    return obj.location.name;
};

/**
 * This function retrieves the country value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns a string that is the country name provided by the obj
 */
function retrieveCountry(obj) {
    return obj.location.country;
};

/**
 * This function retrieves the date and time value from the obj provided
 * @param {object} obj the .json() version of the value returned by the fetch call 
 * @returns an Array that stores the date in index 0 and the time in index 1
 */
function retrieveDateAndTimeArr(obj) {
    return obj.location.localtime.split(' ');
};

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a span element with the correct symbol
 */
function retrieveMethodOfMeasurement() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return spanGenerator(['method-of-measurement'], 'C');
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return spanGenerator(['method-of-measurement'], 'F');
};

/**
 * This functions finds whether the celsius or fahrenheit button is active so the right symbol can be displayed
 * @returns a boolean value of whether or not the method of measurement is celsius
 */
function isMethodOfMeasurementCelsius() {
    if (document.querySelector('.celsius-btn').classList.contains('active')) return true;
    else if (document.querySelector('.fahrenheit-btn').classList.contains('active')) return false;
};

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
};

/**
 * This function is used to retrieve the uv-index from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the uv-index
 */
function retrieveUvNum(obj) {
    return obj.current.uv;
};

/**
 * This function is used to retrieve the visibility distance from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the visibility distance
 */
function retrieveVisibilityDistance(obj) {
    return obj.current.vis_km;
};

/**
 * This function is used to retrieve the cloudiness percentage from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the cloudiness percentage
 */
function retrieveCloudinessPercentage(obj) {
    return obj.current.cloud;
};

/**
 * This function is used to retrieve the chance of rain from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the chance of rain
 */
function retrieveChanceOfRain(obj) {
    return obj.forecast.forecastday[0].day.daily_chance_of_rain;
};

/**
 * This function is used to retrieve the sunrise time from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the sunrise time 
 */
function retrieveSunriseTime(obj) {
    return obj.forecast.forecastday[0].astro.sunrise.slice(0, -3);
};

/**
 * This function is used to retrieve the sunset time from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the sunset time
 */
function retrieveSunsetTime(obj) {
    const sunset = obj.forecast.forecastday[0].astro.sunset;
    const sunsetHour = Number(sunset[0] + sunset[1]);
    const sunsetHour24 = sunsetHour + 12;
    return sunsetHour24 + sunset.slice(2, -3);
};

/**
 * This function is used to retrieve the current moon phase from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current moon phase
 */
function retrieveMoonPhase(obj) {
    return obj.forecast.forecastday[0].astro.moon_phase;
};

/**
 * This function is used to retrieve the current temperature image from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature image
 */
function retrieveCurrentTempImg(obj) {
    return obj.current.condition.icon;
};

/**
 * This function is used to retrieve the current temperature from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature
 */
function retrieveCurrentTemp(obj) {
    return obj.current.temp_c;
}

/**
 * This function is used to retrieve the temperature that it feels like currently from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current temperature it feels like
 */
function retrieveFeelsLikeTemp(obj) {
    return obj.current.feelslike_c;
}

/**
 * This function is used to retrieve the current outdoor condition from the api response
 * @param {object} obj the object that we want to retrieve the value from 
 * @returns a string that is the current outdoor condition
 */
function retrieveCurrentCondition(obj) {
    return obj.current.condition.text;
}

//These functions are used to retrieve the values for the weekly forecast
/**
 * This function takes a number ranging from 0-6 and then return the weekday name
 * @param {number} dateToFindDay a number that represents the day of the week e.g. 0 represents Sunday
 * @returns a string value that is the corresponding day of the week
 */
function retrieveDayOfTheWeek(dateToFindDay) {
    const date = new Date(dateToFindDay);
    const day = date.getDay();
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Unknown day';
    };
};

/**
 * This function is used to retrieve the date based on the day we specified, and from the object we provided
 * @param {number} day the day of the week
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that contains the date
 */
export function getDate(day, obj) {
    return obj.forecast.forecastday[day].date;
};

/**
 * This function is used to retrieve the maximum temperature based on the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the maximum temperature from 
 * @returns a string value that is the maximum temperature for that given day
 */
export function getDayMaxTemp(dayOfWeek, obj) {
    return Math.round(Number(obj.forecast.forecastday[dayOfWeek].day.maxtemp_c));
}

/**
 * This function is used to retrieve the minimum temperature based on the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the minimum temperature from 
 * @returns a string value that is the minimum temperature for that given day
 */
export function getDayMinTemp(dayOfWeek, obj) {
    return Math.round(Number(obj.forecast.forecastday[dayOfWeek].day.mintemp_c));
};

/**
 * This function is used to retrieve the corresponding whether image from the day of the week provided from the object provided
 * @param {number} dayOfWeek the day of the week
 * @param {object} obj the object from which we need to retrieve the date from 
 * @returns a string value that is the path to the image
 */
export function getDayWeatherImage(dayOfWeek, obj) {
    return obj.forecast.forecastday[dayOfWeek].day.condition.icon;
}

export { createShortStandardDate, retrieveDayOfTheWeek, retrieveCurrentCondition, retrieveCurrentTemp, retrieveCurrentTempImg, retrieveFeelsLikeTemp, retrieveSunsetTime, retrieveMoonPhase, retrieveSunriseTime, retrieveChanceOfRain, retrieveCloudinessPercentage, retrieveVisibilityDistance, retrieveUvNum, createStandardDate, createStandardTime, retrieveCity, retrieveCountry, retrieveDateAndTimeArr, retrieveMethodOfMeasurement, isMethodOfMeasurementCelsius, retrieveWindDegrees, retrieveWindSpeed, retrieveHumidity }