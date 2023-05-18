import { makeFahrenheitActive, makeCelsiusActive, celsiusToFahrenheit, fahrenheitToCelsius, changeGroupIntoCelsius, changeGroupIntoFahrenheit } from './tempConversionLogic';

/**
 * This function contains the logic for both the daily and hourly weather button, if the daily weather button is clicked then that is displayed and the hourly weather div is hidden and vice versa if the hourly weather button is clicked
 * @param { object } e the event object that contains information about the event
 */
function dailyAndHourlyButtonLogic(e) {
    const dailyWeather = document.querySelector('.daily-weather-container');
    const hourlyWeather = document.querySelector('.hourly-weather-container');
    const dailyWeatherButton = document.querySelector('.daily-weather-btn');
    const hourlyWeatherButton = document.querySelector('.hourly-weather-btn');
    const slideButtons = document.querySelector('.slide-buttons');
    if (e.target === dailyWeatherButton) {
        e.target.classList.add('active');
        hourlyWeatherButton.classList.remove('active');
        slideButtons.classList.add('hide');
        dailyWeather.classList.remove('hide');
        hourlyWeather.classList.add('hide');
    } else if (e.target === hourlyWeatherButton) {
        e.target.classList.add('active');
        dailyWeatherButton.classList.remove('active');
        slideButtons.classList.remove('hide');
        dailyWeather.classList.add('hide');
        hourlyWeather.classList.remove('hide');
    };
};

/**
 * This function checks all hourly containers and finds the one that currently has the shown class applied to it
 * @returns the DOM element object that contains the 'shown' class
 */
function findActiveHourlyContainer() {
    const allHourlyDivs = document.querySelectorAll('.hour-container');
    for (let hourlyDiv of allHourlyDivs) {
        if (hourlyDiv.classList.contains('shown')) return hourlyDiv
    };
};

/**
 * This functions runs when the user changes the carousel to view a certain hour, the div that is currently showing will have the 'shown' class applied to it so this function finds that div and takes its index number
 * it then calls the addActiveToDot function and passes that index number so that dot has the 'active' class applied to it
 */
function updateDot() {
    const allHourlyDivs = document.querySelectorAll('.hour-container');
    removeActiveFromDots();
    allHourlyDivs.forEach((hourlyDiv, index) => {
        if (hourlyDiv.classList.contains('shown')) addActiveToDot(index);
    });
};

/**
 * This function finds the dot that has the 'active' class applied to it and removes it so there is not dot that has the active class applied to it
 */
function removeActiveFromDots() {
    const allDots = document.querySelectorAll('.dot');
    outer:
    for (let dot of allDots) {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active');
            break outer;
        };
    };
};

/**
 * This function uses the dotNumber argument to get the corresponding dot and add the 'active' class to it
 * @param {number} dotNumber this is the index of which dot we want to add the 'active' class to 
 */
function addActiveToDot(dotNumber) {
    const allDots = document.querySelectorAll('.dot');
    allDots[dotNumber].classList.add('active');
};

/**
 * This function shows the specified hour-container on screen
 * @param {number} index the index of the hour-container we want to display 
 */
function showHourlyContainer(index) {
    const hourlyContainers = document.querySelectorAll('.hour-container');
    hourlyContainers[index].classList.remove('hide');
    hourlyContainers[index].classList.add('shown');
};

/**
 * This functions hides all the hour-containers
 */
function hideAllHourlyContainers() {
    const hourlyContainers = document.querySelectorAll('.hour-container');
    hourlyContainers.forEach(container => {
        container.classList.add('hide');
        container.classList.remove('shown');
    });
};

/**
 * This function runs when the user clicks the moveForwardButton, and it works by checking there is another sibiling element and then updating to show the next sibling element
 * @returns undefined
 */
function moveForwardButtonLogic() {
    const activeHourlyDiv = findActiveHourlyContainer();
    if (activeHourlyDiv.nextElementSibling === null) {
        return
    } else {
        activeHourlyDiv.classList.add('hide');
        activeHourlyDiv.classList.remove('shown');
        activeHourlyDiv.nextElementSibling.classList.remove('hide');
        activeHourlyDiv.nextElementSibling.classList.add('shown');
        updateDot();
    };
};

/**
 * This function runs when the user clicks the moveBackButton, and it works by checking there is a previous sibiling element and then updating to show the previous sibling element
 * @returns undefined
 */
function moveBackButtonLogic() {
    const activeHourlyDiv = findActiveHourlyContainer();
    if (activeHourlyDiv.previousElementSibling === null) {
        return
    } else {
        activeHourlyDiv.classList.add('hide');
        activeHourlyDiv.classList.remove('shown');
        activeHourlyDiv.previousElementSibling.classList.remove('hide');
        activeHourlyDiv.previousElementSibling.classList.add('shown');
        updateDot();
    };
};

/**
 * This function is the logic behind what should happen when an individual dot is pressed, it displays the corresponding hour container, and updates the active dot
 * @param {object} e the event object that contains information about the event 
 */
function dotLogic(e) {
    if (e.target.classList.contains('dot')) {
        hideAllHourlyContainers();
        removeActiveFromDots();
        showHourlyContainer(e.target.id);
        addActiveToDot(e.target.id);
    };
};

function measurementButtonsLogic(e) {
    const allMethodOfMeasurement = document.querySelectorAll('.method-of-measurement');
    const mainTemp = document.querySelector('.temp');
    const feelsLikeTemp = document.querySelector('.feels-like-temp');
    const allDayOfTheWeekMaxTemp = document.querySelectorAll('.day-of-the-week-max-temp');
    const allDayOfTheWeekMinTemp = document.querySelectorAll('.day-of-the-week-min-temp');
    const allHourTemp = document.querySelectorAll('.hour-weather');
    if (e.target.classList.contains('fahrenheit-btn')) {
        makeFahrenheitActive();
        allMethodOfMeasurement.forEach(element => element.innerText = 'F');
        mainTemp.innerText = celsiusToFahrenheit(mainTemp.innerText);
        feelsLikeTemp.innerText = celsiusToFahrenheit(feelsLikeTemp.innerText);
        changeGroupIntoFahrenheit(allDayOfTheWeekMaxTemp);
        changeGroupIntoFahrenheit(allDayOfTheWeekMinTemp);
        changeGroupIntoFahrenheit(allHourTemp);
    };
    if (e.target.classList.contains('celsius-btn')) {
        makeCelsiusActive();
        allMethodOfMeasurement.forEach(element => element.innerText = 'C');
        mainTemp.innerText = fahrenheitToCelsius(mainTemp.innerText);
        feelsLikeTemp.innerText = fahrenheitToCelsius(feelsLikeTemp.innerText);
        changeGroupIntoCelsius(allDayOfTheWeekMaxTemp);
        changeGroupIntoCelsius(allDayOfTheWeekMinTemp);
        changeGroupIntoCelsius(allHourTemp);
    };
}

export { dailyAndHourlyButtonLogic, moveForwardButtonLogic, moveBackButtonLogic, dotLogic, measurementButtonsLogic }