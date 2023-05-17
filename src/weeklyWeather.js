import { divGenerator, headingGenerator, imgGenerator, paragraphGenerator, spanGenerator } from "./generatorFunctions";
import { createShortStandardDate, isMethodOfMeasurementCelsius, retrieveDayOfTheWeek } from "./retrieveInformation";

/**
 * This function takes all daily-weather divs and appends them to daily-weather-container
 * @param {object} dayZero a DOM element object, that is a dailyWeatherContainer displaying weather details about the current day
 * @param {object} dayOne a DOM element object, that is a dailyWeatherContainer displaying weather details about the next day
 * @param {object} dayTwo a DOM element object, that is a dailyWeatherContainer displaying weather details about the second day
 * @param {object} dayThree a DOM element object, that is a dailyWeatherContainer displaying weather details about the third day
 * @param {object} dayFour a DOM element object, that is a dailyWeatherContainer displaying weather details about the fourth day
 * @param {object} dayFive a DOM element object, that is a dailyWeatherContainer displaying weather details about the fifth day
 * @param {object} daySix a DOM element object, that is a dailyWeatherContainer displaying weather details about the sixth day
 * @returns a DOM element object that contains weather information for the current and next six days
 */
function dailyWeatherSection(dayZero, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix) {
    const dailyWeatherSectionContainer = divGenerator(['daily-weather-container']);
    dailyWeatherSectionContainer.append(dayZero, dayOne, dayTwo, dayThree, dayFour, dayFive, daySix);
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
    weatherDetailsContainer.append(paragraphGenerator(['max-temp'], '°', maxWeatherSpan, `${isMethodOfMeasurementCelsius() === true ? 'C' : 'F'}`));
    weatherDetailsContainer.append(paragraphGenerator(['min-temp'], '°', minWeatherSpan, `${isMethodOfMeasurementCelsius() === true ? 'C' : 'F'}`));
    return weatherDetailsContainer;
};

export { dailyWeatherSection, dayWeather, dayInformation, dayWeatherDetails }

{/* 
<div class="daily-weather-container hide">
    <div class="daily-weather day-0">
        <div class="day-information">
            <h2 class="day-of-the-week">Monday</h2>
            <h2 class="date-of-the-week">11/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">14</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">8</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-1">
        <div class="day-information">
            <h2 class="day-of-the-week">Tuesday</h2>
            <h2 class="date-of-the-week">12/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">15</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">8</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-2">
        <div class="day-information">
            <h2 class="day-of-the-week">Wednesday</h2>
            <h2 class="date-of-the-week">13/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">16</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">10</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-3">
        <div class="day-information">
            <h2 class="day-of-the-week">Thursday</h2>
            <h2 class="date-of-the-week">14/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">16</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">11</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-4">
        <div class="day-information">
            <h2 class="day-of-the-week">Friday</h2>
            <h2 class="date-of-the-week">15/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">16</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">11</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-5">
        <div class="day-information">
            <h2 class="day-of-the-week">Saturday</h2>
            <h2 class="date-of-the-week">16/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">17</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">11</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
    <div class="daily-weather day-6">
        <div class="day-information">
            <h2 class="day-of-the-week">Sunday</h2>
            <h2 class="date-of-the-week">17/05/2023</h2>
        </div>
        <div class="day-weather-details">
            <p class="max-temp"><span class="day-of-the-week-max-temp">16</span>°<span
                class="method-of-measurement">C</span></p>
            <p class="min-temp"><span class="day-of-the-week-min-temp">12</span>°<span
                class="method-of-measurement">C</span></p>
        </div>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="">
    </div>
</div> */}