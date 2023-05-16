/**
 * this function takes an array of classes and adds those classes to the element using a forEach loop
 * @param {Array} classes an array of classes that need to be added to the element
 * @param {object} element the element that we need to add the classes to 
 */
function addClassesToElement(classes, element) {
    classes.forEach(individualClass => element.classList.add(individualClass));
};

/**
 * this function generates a div element with its classes provided as an argument
 * @param {Array} classes an array of classes that need to be added to the div
 * @returns a div DOM element
 */
function divGenerator(classes) {
    const div = document.createElement('div');
    addClassesToElement(classes, div)
    return div;
};

/**
 * this function generates an img element, with the specified, src, alt and classes
 * @param {string} src the path to the image we want to use
 * @param {string} alt the alt description of the img incase it doesn't load
 * @param {Array} classes an array of classes that need to be added to the img
 * @returns an img element
 */
function imgGenerator(src, alt = '', classes, rotation = 0) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    addClassesToElement(classes, img);
    img.style.rotate = `${rotation}deg`
    return img;
};

/**
 * this function generates a heading of the desired size, and adds the text specified as well as the classes provided
 * @param {string} headingSize 1 of 6 sizes we want the heading to be e.g. 'h1'
 * @param {Array} classes an array of classes that need to be added to the heading
 * @param {string} text the text the heading needs to display 
 * @param {object} spanElementPreppend a dom element that we want to add before the text part of the heading
 * @param {object} spanElementAppend a dom element that we want to add after the text part of the heading
 * @returns a heading DOM element
 */
function headingGenerator(headingSize, classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const heading = document.createElement(headingSize);
    heading.innerHTML = text;
    heading.prepend(spanElementPreppend)
    heading.append(spanElementAppend)
    addClassesToElement(classes, heading);
    return heading;
};

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
};

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
};

/**
 * this function generates a form element with the classes provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @returns a form element
 */
function formGenerator(classes) {
    const form = document.createElement('form');
    addClassesToElement(classes, form);
    return form;
};

/**
 * this function generates an input element and adds the specified attributes and values to it
 * @param {Array} attributes an array of arrays where each element has the attribute, and it's associated value 
 * @returns an input element
 */
function inputGenerator(attributes) {
    const input = document.createElement('input');
    attributes.forEach(attribute => input.setAttribute(attribute[0], attribute[1]));
    return input;
};

/**
 * This function creates a paragraph element and fills it with the arguments provided
 * @param {Array} classes an array of classes that need to be added to the form
 * @param {string} text the text needed within the <p></p> 
 * @param {object} spanElementPreppend a dom element that we want to add before the text part of the paragraph
 * @param {object} spanElementAppend a dom element that we want to add after the text part of the paragraph
 * @returns a <p></p> element that is customised as specified
 */
function paragraphGenerator(classes, text, spanElementPreppend = '', spanElementAppend = '') {
    const paragraph = document.createElement('p');
    addClassesToElement(classes, paragraph);
    paragraph.innerText = text;
    paragraph.prepend(spanElementPreppend)
    paragraph.append(spanElementAppend)
    return paragraph;
};

/**
 * This function is used to help choose the correct class based on the uv-index number provided
 * @param {number} uvNum the number that we want to check whether or not it's value is a safe, amber or danger value 
 * @returns a string that classifies the value
 */
function checkCategoryOfUv(uvNum) {
    switch (true) {
        case uvNum <= 2:
            return 'safe';
        case uvNum <= 7:
            return 'amber';
        case uvNum >= 8:
            return 'danger';
    }
};

export { divGenerator, imgGenerator, headingGenerator, buttonGenerator, spanGenerator, inputGenerator, formGenerator, checkCategoryOfUv, paragraphGenerator }