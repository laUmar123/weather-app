import { divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from "./generatorFunctions";
import { createShortStandardDate, isMethodOfMeasurementCelsius, retrieveDayOfTheWeek, getDate, getDayMaxTemp, getDayMinTemp, getDayWeatherImage } from "./retrieveInformation";

/**
 * This function takes all daily-weather divs and appends them to daily-weather-container
 * @param {Array} arrOfDays an array of all the days that need to be appended and displayed, there should be 7 in total
 * @returns a DOM element object that contains weather information for the current and next six days
 */
function dailyWeatherSection(arrOfDays) {
    const dailyWeatherSectionContainer = divGenerator(['daily-weather-container']);
    dailyWeatherSectionContainer.append(...arrOfDays);
    return dailyWeatherSectionContainer;
};

/**
 * This functions puts together all the information required to display the weather for an individual day
 * @param {number} dayNum the number of the day the container is going to be for
 * @param {object} dayInfo a DOM element object that contains details about the day
 * @param {object} weatherDetails a DOM element object that contains details aboubt the day's weather
 * @param {string} dayWeatherImg a string value that is the path to the weather image for that day
 * @returns a DOM element object that makes up one of the days that is going to be displayed
 */
function dayWeather(dayNum, dayInfo, weatherDetails, dayWeatherImg) {
    const dailyWeatherContainer = divGenerator(['daily-weather', `day-${dayNum}`]);
    dailyWeatherContainer.append(dayInfo, weatherDetails, imgGenerator(dayWeatherImg, '', []));
    return dailyWeatherContainer;
};

/**
 * This function's job is to create a DOM element object that contains all information related to the day we passed in, such as the day of the week, and representing the date on screen
 * @param {string} date the date we want to display 
 * @returns a DOM element object that contains information about the date we passed in
 */
function dayInformation(date) {
    const dayInformationContainer = divGenerator(['day-information']);
    dayInformationContainer.append(headingGenerator('h2', ['day-of-the-week'], retrieveDayOfTheWeek(date)), headingGenerator('h2', ['date-of-the-week'], createShortStandardDate(date)));
    return dayInformationContainer;
};

/**
 * This function's job is to displayed the temperature based on the two arguments provided
 * @param {string} dayMaxTemp the maximum temperature for that day
 * @param {string} dayMinTemp the minimum temperature for that day
 * @returns a DOM element object that contains information about the temperature
 */
function dayWeatherDetails(dayMaxTemp, dayMinTemp) {
    const weatherDetailsContainer = divGenerator(['day-weather-details']);
    const maxWeatherSpan = spanGenerator(['day-of-the-week-max-temp'], dayMaxTemp);
    const minWeatherSpan = spanGenerator(['day-of-the-week-min-temp'], dayMinTemp);
    const weatherSymbol = spanGenerator(['method-of-measurement'], 'C');
    const weatherSymbolTwo = spanGenerator(['method-of-measurement'], 'C');
    weatherDetailsContainer.append(paragraphGenerator(['max-temp'], '°', maxWeatherSpan, weatherSymbol), paragraphGenerator(['min-temp'], '°', minWeatherSpan, weatherSymbolTwo));
    return weatherDetailsContainer;
};

/**
 * This function calls all the relevant functions and creates a DOM element representing a day and its respective weather
 * @param {object} obj the object from which we will be retrieving values from 
 * @returns an array that contains all the DOM elements that need to be displayed
 */
function createAllDaysToDisplay(obj) {
    const arrOfDays = [];
    for (let i = 0; i < 3; i++) {
        arrOfDays.push(dayWeather(i, dayInformation(getDate(i, obj)), dayWeatherDetails(getDayMaxTemp(i, obj), getDayMinTemp(i, obj)), getDayWeatherImage(i, obj)));
    };
    return arrOfDays;
}


export { createAllDaysToDisplay, dailyWeatherSection, dayWeather, dayInformation, dayWeatherDetails }