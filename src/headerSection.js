import { divGenerator, imgGenerator, headingGenerator, spanGenerator, inputGenerator, buttonGenerator, formGenerator } from "./generatorFunctions";

function titleSection() {
    const titleContainer = divGenerator(['title']);
    titleContainer.append(imgGenerator('./../src/assets/page-icon.png', 'a circular icon depicting all 4 seasons', ['main-icon']), headingGenerator('h1', ['page-title'], 'Weather', undefined, spanGenerator(['title-end'], 'Watch')));
    return titleContainer;
}

function headerFormSection() {
    const form = formGenerator(['search-form']);
    form.append(inputGenerator([['type', 'search'], ['id', 'search-bar'], ['placeholder', 'Search a location'], ['required', true]]), imgGenerator('./../src/assets/search-icon.svg', 'A magnifying glass', ['search-button']));
    return form;
}

function headerButtons() {
    const buttonsContainer = divGenerator(['change-degrees']);
    buttonsContainer.append(buttonGenerator(['celsius-btn', 'btn', 'active'], '°C'), buttonGenerator(['fahrenheit-btn', 'btn'], '°F'));
    return buttonsContainer;
}

export function header() {
    const header = document.createElement('header');
    header.append(titleSection(), headerFormSection(), headerButtons());
    return header;
}

