import { buttonGenerator, divGenerator, spanGenerator } from "./generatorFunctions";

/**
 * This function brings together all buttons under one container
 * @returns a DOM element object that contains all the buttons contained within the daily-hourly-weather-carousel
 */
export function carouselButtons() {
    const carouselButtonsContainer = divGenerator(['carousel-buttons']);
    carouselButtonsContainer.append(buttonGenerator(['daily-weather-btn', 'btn', 'active'], 'Daily'), buttonGenerator(['hourly-weather-btn', 'btn'], 'Hourly'));
    carouselButtonsContainer.append(slideButtons());
    return carouselButtonsContainer;
};

/**
 * This functions brings together all buttons to do with the slides
 * @returns a DOM element object that contains all the buttons contained within the slide-buttons container
 */
function slideButtons() {
    const slideButtonsContainer = divGenerator(['slide-buttons', 'hide']);
    const buttonLeft = spanGenerator(['material-symbols-outlined'], 'arrow_back_ios')
    const buttonRight = spanGenerator(['material-symbols-outlined'], 'arrow_forward_ios')
    slideButtonsContainer.append(buttonGenerator(['move-left', 'btn'], '', '', buttonLeft));
    slideButtonsContainer.append(dots());
    slideButtonsContainer.append(buttonGenerator(['move-right', 'btn'], '', '', buttonRight));
    return slideButtonsContainer;
};

/**
 * This function generates 'dot' buttons
 * @returns a DOM element object that is used as the individual buttons that display which slide the user is on
 */
function dots() {
    const dotsContainer = divGenerator(['dots']);
    for (let i = 0; i < 4; i++) {
        if (i === 0) dotsContainer.append(buttonGenerator(['dot', 'active', 'btn'], '', '0'));
        else dotsContainer.append(buttonGenerator(['dot', 'btn'], '', i));
    };
    return dotsContainer;
};