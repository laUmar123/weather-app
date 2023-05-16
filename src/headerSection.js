import { divGenerator, imgGenerator, headingGenerator, spanGenerator, inputGenerator, buttonGenerator, formGenerator } from "./generatorFunctions";

/**
 * This function creates the title section of the header
 * @returns a DOM element object that contains the title and the page logo
 */
function titleSection() {
    const titleContainer = divGenerator(['title']);
    titleContainer.append(imgGenerator('./../src/assets/page-icon.png', 'a circular icon depicting all 4 seasons', ['main-icon']), headingGenerator('h1', ['page-title'], 'Weather', undefined, spanGenerator(['title-end'], 'Watch')));
    return titleContainer;
};

/**
 * This function creates the search bar section of the header
 * @returns a DOM element object that contains the search bar
 */
function headerFormSection() {
    const form = formGenerator(['search-form']);
    form.append(inputGenerator([['type', 'search'], ['id', 'search-bar'], ['placeholder', 'Search a location'], ['required', true]]), imgGenerator('./../src/assets/search-icon.svg', 'A magnifying glass', ['search-button']));
    return form;
};

/**
 * This function creates the buttons used to control whether the temperature is displayed in celsius or fahrenheit
 * @returns a DOM element object that contains two buttons
 */
function headerButtons() {
    const buttonsContainer = divGenerator(['change-degrees']);
    buttonsContainer.append(buttonGenerator(['celsius-btn', 'btn', 'active'], '°C'), buttonGenerator(['fahrenheit-btn', 'btn'], '°F'));
    return buttonsContainer;
};

/**
 * This function is used to create the header with all of its content
 * @returns A DOM element object the contains everything needed in the header
 */
export function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), headerButtons());
    return header;
};

