import { divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from "./generatorFunctions";
import { getHourTempDescription, getHourTempIcon, getHourTime, getHourTemp } from "./retrieveInformation";

/**
 * This function appends the hour contains onto the hourly-weather-container div so that it can be displayed on screen 
 * @param {array} hourContainers an array of hourContainers, the array should contain 4 elements
 * @returns a DOM element object that is the hourly-weather-container and contains all hourly weather that needs to be displayed
 */
function hourlyWeather(hourContainers) {
    const hourlyWeatherContainer = divGenerator(['hourly-weather-container', 'hide']);
    hourlyWeatherContainer.append(...hourContainers);
    return hourlyWeatherContainer;
};

/**
 * This function generates an hour-container div, and stores information about the weather in each hour on it
 * @param {number} containerNum the number of the container e.g. number 0 holds hours 0-5
 * @param {array} hoursUnderContainer an array of individual hours that should be stored under the container that will be returned
 * @returns a DOM element object that has 6 elements as children
 */
function groupOfHoursContainer(containerNum, hoursUnderContainer) {
    const hourContainer = divGenerator([`hour-container-${containerNum}`, 'hour-container', `${containerNum === 0 ? 'shown' : 'hide'}`]);
    hourContainer.append(...hoursUnderContainer);
    return hourContainer;
};

/**
 * This functions takes in all the parameters required to create a div that shows the weather details for a specified hour
 * @param {number} hourNum this is a number between 0-23 showing which hour the container is for
 * @param {string} timeToDisplay the time that needs to be displayed on screen 
 * @param {object} tempToDisplay DOM element object that contains information about the weather during that hour
 * @param {string} imgToDisplay a path to the image the corresponds with the weather at that hour
 * @returns a DOM element object that contains all the information required to represent the weather during the hour
 */
function individualHourContainer(hourNum, timeToDisplay, tempToDisplay, imgToDisplay) {
    const hourContainer = divGenerator(['hourly-weather', `hour-${hourNum}`]);
    hourContainer.append(headingGenerator('h2', [], timeToDisplay), tempToDisplay, imgGenerator(imgToDisplay, '', ['hourly-weather-icon']));
    return hourContainer;
};

/**
 * This functions groups the temperature and a description about the weather into an element
 * @param {string} temp the temperature 
 * @param {string} tempDescription a description about the weather
 * @returns a DOM element object that makes up the temperature information about a certain hour
 */
function hourWeatherDetails(temp, tempDescription) {
    const weatherDetailsContainer = divGenerator(['hour-weather-description']);
    const tempSpan = spanGenerator(['hour-weather'], temp);
    const weatherSymbol = spanGenerator(['method-of-measurement'], 'C');
    weatherDetailsContainer.append(headingGenerator('h3', [], '°', tempSpan, weatherSymbol), paragraphGenerator(['hour-description'], tempDescription));
    return weatherDetailsContainer;
};

/**
 * This function sorts each hour creates and sorts each hour into the correct container
 * @param {object} obj the object from which we will be getting information from 
 * @returns an array that contains 4 div elements, each div has information about the weather during a certain hour
 */
export function createAnArrayOfAllHours(obj) {
    const containerOne = [];
    const containerTwo = [];
    const containerThree = [];
    const containerFour = [];
    for (let i = 0; i < 24; i++) {
        if (i <= 5) containerOne.push(individualHourContainer(i, getHourTime(i, obj), hourWeatherDetails(getHourTemp(i, obj), getHourTempDescription(i, obj)), getHourTempIcon(i, obj)));
        else if (i <= 11) containerTwo.push(individualHourContainer(i, getHourTime(i, obj), hourWeatherDetails(getHourTemp(i, obj), getHourTempDescription(i, obj)), getHourTempIcon(i, obj)));
        else if (i <= 17) containerThree.push(individualHourContainer(i, getHourTime(i, obj), hourWeatherDetails(getHourTemp(i, obj), getHourTempDescription(i, obj)), getHourTempIcon(i, obj)));
        else if (i <= 23) containerFour.push(individualHourContainer(i, getHourTime(i, obj), hourWeatherDetails(getHourTemp(i, obj), getHourTempDescription(i, obj)), getHourTempIcon(i, obj)));
    };
    const fullHoursArr = [groupOfHoursContainer(0, containerOne), groupOfHoursContainer(1, containerTwo), groupOfHoursContainer(2, containerThree), groupOfHoursContainer(3, containerFour)];
    return fullHoursArr;
};

export { hourlyWeather, groupOfHoursContainer, individualHourContainer, hourWeatherDetails }