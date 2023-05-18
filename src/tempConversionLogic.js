/**
 * this function makes the fahrenheit button have the 'active' class and removes it from the celsius one
 */
function makeFahrenheitActive() {
    const celsiusButton = document.querySelector('.celsius-btn');
    const fahrenheitButton = document.querySelector('.fahrenheit-btn');
    celsiusButton.classList.remove('active');
    fahrenheitButton.classList.add('active');
};

/**
 * this function makes the celsius button have the 'active' class and removes it from the fahrenheit one
 */
function makeCelsiusActive() {
    const celsiusButton = document.querySelector('.celsius-btn');
    const fahrenheitButton = document.querySelector('.fahrenheit-btn');
    celsiusButton.classList.add('active');
    fahrenheitButton.classList.remove('active');
};

/**
 * This function converts a celsius value into fahrenheit
 * @param {number} num the number to convert 
 * @returns a number that is the celsius value rounded and converted into fahrenheit
 */
function celsiusToFahrenheit(num) {
    return Math.round((num * 1.8) + 32);
};

/**
 * This function converts a fahrenheit value into celsius
 * @param {number} num the number to convert 
 * @returns a number that is the fahrenheit value rounded and converted into celsius
 */
function fahrenheitToCelsius(num) {
    return Math.round((num - 32) * 5 / 9);
};

/**
 * This function loops an array of DOM elements and converts the inner number into fahrenheit from celsius
 * @param {array} temps an array of of DOM elements that contain the temperature 
 */
function changeGroupIntoFahrenheit(temps) {
    temps.forEach(temp => {
        temp.innerText = celsiusToFahrenheit(temp.innerText);
    });
};

/**
 * This function loops an array of DOM elements and converts the inner number into celsius from fahrenheit
 * @param {array} temps an array of of DOM elements that contain the temperature 
 */
function changeGroupIntoCelsius(temps) {
    temps.forEach(temp => {
        temp.innerText = fahrenheitToCelsius(temp.innerText);
    });
};

export { makeFahrenheitActive, makeCelsiusActive, celsiusToFahrenheit, fahrenheitToCelsius, changeGroupIntoCelsius, changeGroupIntoFahrenheit }