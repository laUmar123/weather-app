import './style.css';

/**
 * this function takes an array of classes and adds those classes to the element using a forEach loop
 * @param {Array} classes an array of classes that need to be added to the element
 * @param {Element} element the element that we need to add the classes to 
 */
function addClassesToElement(classes, element) {
    classes.forEach(individualClass => element.classList.add(individualClass));
}

/**
 * this function generates a div element with its classes provided as an argument
 * @param {Array} classes an array of classes that need to be added to the div
 * @returns a div DOM element
 */
function divGenerator(classes) {
    const div = document.createElement('div');
    addClassesToElement(classes, div)
    return div;
}

/**
 * this function generates an img element, with the specified, src, alt and classes
 * @param {string} src the path to the image we want to use
 * @param {string} alt the alt description of the img incase it doesn't load
 * @param {Array} classes an array of classes that need to be added to the img
 * @returns an img element
 */
function imgGenerator(src, alt, classes) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    addClassesToElement(classes, img);
    return img;
}

/**
 * this function generates a heading of the desired size, and adds the text specified as well as the classes provided
 * @param {string} headingSize 1 of 6 sizes we want the heading to be e.g. 'h1'
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text the heading needs to display 
 * @returns a heading DOM element
 */
function headingGenerator(headingSize, classes, text, spanElement) {
    const heading = document.createElement(headingSize);
    heading.innerHTML = text;
    heading.append(spanElement)
    addClassesToElement(classes, heading);
    return heading;
}

/**
 * this function generates a button with the classes and text provided
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text needed within the button 
 * @returns a button element
 */
function buttonGenerator(classes, text) {
    const btn = document.createElement('button');
    addClassesToElement(classes, btn);
    btn.innerHTML = text;
    return btn;
}

/**
 * this function generates a span element with the classes and text provided
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text needed within the span 
 * @returns a span element
 */
function spanGenerator(classes, text) {
    const span = document.createElement('span');
    addClassesToElement(classes, span);
    span.innerHTML = text;
    return span;
}

/**
 * this function generates a form element with the classes provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @returns a form element
 */
function formGenerator(classes) {
    const form = document.createElement('form');
    addClassesToElement(classes, form);
    return form;
}

/**
 * this function generates an input element and adds the specified attributes and values to it
 * @param {Array} attributes an array of arrays where each element has the attribute, and it's associated value 
 * @returns an input element
 */
function inputGenerator(attributes) {
    const input = document.createElement('input');
    attributes.forEach(attribute => input.setAttribute(attribute[0], attribute[1]));
    return input;
}

function titleSection() {
    const titleContainer = divGenerator(['title']);
    titleContainer.append(imgGenerator('./../src/assets/page-icon.png', 'a circular icon depicting all 4 seasons', ['main-icon']), headingGenerator('h1', ['page-title'], 'Weather', spanGenerator(['title-end'], 'Watch')));
    return titleContainer;
}

function headerFormSection() {
    const form = formGenerator(['search-form']);
    form.append(inputGenerator([['type', 'search'], ['id', 'search-bar'], ['placeholder', 'Search a location'], ['required', true]]), imgGenerator('./../src/assets/search-icon.svg', 'A magnifying glass', ['search-button']));
    return form;
}

function headerButtons() {
    const buttonsContainer = divGenerator(['change-degrees']);
    buttonsContainer.append(buttonGenerator(['celsius-btn', 'btn', 'active'], '°C'), buttonGenerator(['fahrenheit-btn', 'btn', 'active'], '°F'));
    return buttonsContainer;
}

function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), headerButtons());
    return header;
}

const main = document.querySelector('body');
main.append(header());

{/* <header>
        <div class="title">
            <img class="main-icon" src="./../src/assets/page-icon.png" alt="a circular icon depicting all 4 seasons">
            <h1 class="page-title">Weather<span class="title-end">Watch</span></h1>
        </div>
        <form class="search-form">
            <input type="search" id="search-bar" placeholder="Search a location" required>
            <img class="search-button" src="./../src/assets/search-icon.svg" alt="A magnifying glass">
        </form>
        <div class="change-degrees">
            <button class="celsius-btn btn active">°C</button>
            <button class="fahrenheit-btn btn">°F</button>
        </div>
    </header> */}