/*let products = document.querySelectorAll('#product-one, #product-two, #product-three, #product-four, #product-five, #product-six');

products.forEach(hoveredProduct => {
    let description = document.getElementById(hoveredProduct.id + '-description');

    hoveredProduct.addEventListener('mouseover', function () {
        products.forEach(product => {
            if (product !== hoveredProduct) {
                product.style.filter = 'blur(20px)';
                
            }
        });
        description.style.display = 'block';
    });

    hoveredProduct.addEventListener('mouseout', function () {
        products.forEach(product => {
            product.style.filter = 'none';
        });
        description.style.display = 'none';
    });
});*/

// Define your media query
const mediaQuery = window.matchMedia('(min-width: 701px)')

// Check if the media query is true
if (mediaQuery.matches) {
    // The viewport is more than 700px
    let products = document.querySelectorAll('#product-one, #product-two, #product-three, #product-four, #product-five, #product-six');

    products.forEach(hoveredProduct => {
        let description = document.getElementById(hoveredProduct.id + '-description');

        hoveredProduct.addEventListener('mouseover', function () {
            products.forEach(product => {
                if (product !== hoveredProduct) {
                    product.style.filter = 'blur(20px)';
                }
            });
            description.style.display = 'block';
        });

        hoveredProduct.addEventListener('mouseout', function () {
            products.forEach(product => {
                product.style.filter = 'none';
            });
            description.style.display = 'none';
        });
    });
}

let about = document.getElementById('about');
let aboutOriginalText = about.innerText;
let aboutOriginalFontSize = about.style.fontSize;
let aboutOriginalFont = about.style.fontFamily;
let aboutOriginalFontColour = about.style.color;
let aboutOriginalGridPosition = about.style.justifySelf = 'start';
let lookBook = document.getElementById('lookbook');
let lookBookDisplay = lookbook.style.display;
let year = document.getElementById('year');
let yearDisplay = year.style.display;

about.addEventListener('mouseover', aboutMouseOverHandler);
about.addEventListener('mouseout', aboutMouseOutHandler);
about.addEventListener('touchstart', aboutMouseOverHandler);
about.addEventListener('touchend', aboutMouseOutHandler);

function aboutMouseOverHandler() {
    about.style.fontSize = '1.5rem';
    about.style.color = '#81FF76';
    about.innerText = 'AFFXWRKS REIMAGINES SPECIFICITY FOR A WIDER MORE UTILITARIAN APPLICATION. BASED IN LONDON. LIMITED SPRING COLLECTION OF 6 ITEMS.';
    about.style.alignSelf = 'center';
    about.style.zIndex = '4';
    lookbook.style.display = 'none';
    year.style.display = 'none';
}

function aboutMouseOutHandler() {
    about.innerText = aboutOriginalText;
    about.style.fontSize = aboutOriginalFontSize;
    about.style.color = aboutOriginalFontColour;
    about.style.fontFamily = aboutOriginalFont;
    about.style.justifySelf = aboutOriginalGridPosition;
    lookbook.style.display = lookBookDisplay;
    year.style.display = yearDisplay
}

let contact = document.getElementById('contact');
let contactColour = contact.style.color;
let contactDefaultText = contact.innerText;
contact.addEventListener('mouseover', contactMouseOverHandler);
contact.addEventListener('mouseout', contactMouseOutHandler);
contact.addEventListener('touchstart', contactMouseOverHandler);
contact.addEventListener('touchend', contactMouseOutHandler);

function contactMouseOverHandler() {
    contact.style.cursor = 'pointer';
    contact.innerText = 'info@affixworld.com';
    contact.style.color = '#81FF76';

};

function contactMouseOutHandler() {
    contact.innerText = contactDefaultText;
    contact.style.color = contactColour;

};

//////////adding number to cart
let cartNumber = document.getElementById('cart-number');
let buttonIds = ['product-one-addtocart', 'product-two-addtocart', 'product-three-addtocart', 'product-four-addtocart', 'product-five-addtocart', 'product-six-addtocart'];

buttonIds.forEach(function (id) {
    let addToCartButton = document.getElementById(id);

    addToCartButton.addEventListener('click', function () {
        // Parse the current number in the cart and increment it by one
        let currentNumber = parseInt(cartNumber.innerText, 10);
        if (isNaN(currentNumber)) {
            currentNumber = 0; // Default to 0 if the parsed number is NaN
        }
        cartNumber.innerText = currentNumber + 1;

        // Disable the button
        addToCartButton.disabled = true;
    });
});