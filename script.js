"use strict";

// -------------------Burger-----------------------------------------

const page = document.querySelector('body');

const burger = document.querySelector('.burger');

const burgerButton = document.querySelector('.burger__button');

const burgerNavigation = document.querySelector('.burger__navigation');

const burgerCloseButton = document.querySelector('.burger__close-button');

const burgerLink =  document.querySelector('.burger__link');


page.addEventListener('click', function(e) {
    if (e.target.closest('.burger__button')) {
        burgerNavigation.classList.toggle('burger__navigation-on');
    } else if (e.target.closest('.burger__link') || 
    e.target.closest('.burger__close-button') || 
    !e.target.closest('.burger__navigation')) {
        burgerNavigation.classList.remove('burger__navigation-on');
    }
})

// --------------------------------Services---------------------------

const gardenButton = document.querySelector('#garden');

const lawnButton = document.querySelector('#lawn');

const plantingButton = document.querySelector('#planting');



const gardenCards = document.querySelectorAll('.garden-card');

const lawnCards = document.querySelectorAll('.lawn-card');

const plantingCards = document.querySelectorAll('.planting-card');


const serviceClickHandler = document.querySelector('.setvice-tabs');


serviceClickHandler.addEventListener('click', function(e) {

    // -------------------Garden button-----------------------------------

    if (e.target.closest('#garden') && (!lawnButton.classList.contains('button_checked') && 
    !plantingButton.classList.contains('button_checked'))) {

        gardenButton.classList.toggle('button_checked');
        lawnCards.forEach((el) => {
            el.classList.toggle('blur')
        })
        plantingCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#garden') && (lawnButton.classList.contains('button_checked') && 
    !plantingButton.classList.contains('button_checked'))) {

        gardenButton.classList.toggle('button_checked');
        gardenCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#garden') && (!lawnButton.classList.contains('button_checked') && 
    plantingButton.classList.contains('button_checked'))) {

        gardenButton.classList.toggle('button_checked');
        gardenCards.forEach((el) => {
            el.classList.toggle('blur')
        })
    }
    
    // ------------------Lawn button--------------------------------------

    if (e.target.closest('#lawn') && (!gardenButton.classList.contains('button_checked') && 
    !plantingButton.classList.contains('button_checked'))) {

        lawnButton.classList.toggle('button_checked');
        gardenCards.forEach((el) => {
            el.classList.toggle('blur')
        })
        plantingCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#lawn') && (gardenButton.classList.contains('button_checked') && 
    !plantingButton.classList.contains('button_checked'))) {

        lawnButton.classList.toggle('button_checked');
        lawnCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#lawn') && (!gardenButton.classList.contains('button_checked') && 
    plantingButton.classList.contains('button_checked'))) {
        
        lawnButton.classList.toggle('button_checked');
        lawnCards.forEach((el) => {
            el.classList.toggle('blur')
        })
    }
    

    // ------------------------Planting button---------------------------------

    if (e.target.closest('#planting') && (!gardenButton.classList.contains('button_checked') && 
    !lawnButton.classList.contains('button_checked'))) {

        plantingButton.classList.toggle('button_checked');
        gardenCards.forEach((el) => {
            el.classList.toggle('blur')
        })
        lawnCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#planting') && (gardenButton.classList.contains('button_checked') && 
    !lawnButton.classList.contains('button_checked'))) {

        plantingButton.classList.toggle('button_checked');
        plantingCards.forEach((el) => {
            el.classList.toggle('blur')
        })

    } else if (e.target.closest('#planting') && (!gardenButton.classList.contains('button_checked') && 
    lawnButton.classList.contains('button_checked'))) {
        
        plantingButton.classList.toggle('button_checked');
        plantingCards.forEach((el) => {
            el.classList.toggle('blur')
        })
    }
})


// -----------------------------------Prices--------------------------------------

const basicsButton = document.querySelector('#basics-button');
const standartButton = document.querySelector('#standart-button');
const procareButton = document.querySelector('#procare-button');

const basicsContent = document.querySelector('#basics-button-content');
const standartContent = document.querySelector('#standart-button-content');
const procareContent = document.querySelector('#procare-button-content');



const pricesButtonHandler = document.querySelector('.prices-items-wrapper');

pricesButtonHandler.addEventListener('click', function(e) {
    
    if (e.target.closest('#basics-button')) {
        showBasicsContent();
    } 
    if (e.target.closest('#standart-button')) {
        showStandartCotent();
    } 
    if (e.target.closest('#procare-button')) {
        showProcareContent();
    }
})

function showBasicsContent() {
    basicsButton.classList.toggle('prices-item-button-active');
    basicsContent.classList.toggle('prices-item_content-active');
    standartButton.classList.remove('prices-item-button-active');
    standartContent.classList.remove('prices-item_content-active');
    procareButton.classList.remove('prices-item-button-active');
    procareContent.classList.remove('prices-item_content-active');
    basicsButtonImage.classList.toggle('basics-image-active');
    basicsButtonImage.classList.toggle('basics-image-button-active');
    standartButtonImage.classList.remove('basics-image-button-active');
    procareButtonImage.classList.remove('basics-image-button-active');
}

function showStandartCotent() {
    standartButton.classList.toggle('prices-item-button-active');
    standartContent.classList.toggle('prices-item_content-active');
    basicsButton.classList.remove('prices-item-button-active');
    basicsContent.classList.remove('prices-item_content-active');
    procareButton.classList.remove('prices-item-button-active');
    procareContent.classList.remove('prices-item_content-active');
    standartButtonImage.classList.toggle('basics-image-button-active');
    basicsButtonImage.classList.remove('basics-image-button-active');
    procareButtonImage.classList.remove('basics-image-button-active');
}

function showProcareContent() {
    procareButton.classList.toggle('prices-item-button-active');
    procareContent.classList.toggle('prices-item_content-active');
    basicsButton.classList.remove('prices-item-button-active');
    basicsContent.classList.remove('prices-item_content-active');
    standartButton.classList.remove('prices-item-button-active');
    standartContent.classList.remove('prices-item_content-active');
    procareButtonImage.classList.toggle('basics-image-button-active');
    basicsButtonImage.classList.remove('basics-image-button-active');
    standartButtonImage.classList.remove('basics-image-button-active');
}


const basicsButtonImage = document.querySelector('.basics-image');
console.log(basicsButtonImage);
const standartButtonImage = document.querySelector('.standart-image');
const procareButtonImage = document.querySelector('.procare-image');


// ------------------------------Prices------------------------------------

const contactsMenuButton = document.querySelector('.contacts-menu__button');

const contactsMenuImage = document.querySelector('.contacts-menu-image');

const contactsMenu = document.querySelector('.contacts-menu');

const contactsMenuHandler = document;



contactsMenuHandler.addEventListener('click', function(e) {
    if (e.target.closest('.contacts-menu__button')) {
        showContactsMenu();
    }
    if (!e.target.closest('.contacts-menu') && (!e.target.closest('.contacts-menu__button'))) {
        contactsMenu.classList.remove('contacts-menu-active');
        contactsMenuImage.classList.remove('contacts-menu-image-active');
    }
    if (e.target.closest('.cananda')) {
        showCanadaCard();
    }
    if (e.target.closest('.newyork')) {
        showNewyorkCard();
    }
    if (e.target.closest('.yonkers')) {
        showYonkersCard();
    }
    if (e.target.closest('.sherrill')) {
        showSherrillCard();
    }
});

function showContactsMenu() {
    contactsMenuButton.classList.add('contacts-menu__button-active');
    contactsMenuImage.classList.toggle('contacts-menu-image-active');
    contactsMenu.classList.toggle('contacts-menu-active');
}

const contactsCanadaCard = document.querySelector('.canada-card');
const contactsNewyorkCard = document.querySelector('.newyork-card');
const contactsYonkersCard= document.querySelector('.yonkers-card');
const contactsSherrillCard = document.querySelector('.sherrill-card');

const contactsMenuTitle = document.querySelector('.contacts-menu-title');
console.log(contactsMenuTitle);

function showCanadaCard() {
    contactsMenu.classList.remove('contacts-menu-active');
    contactsMenuButton.classList.add('contacts-menu__button-active');
    contactsCanadaCard.classList.add('canada-card-active');
    contactsNewyorkCard.classList.remove('newyork-card-active');
    contactsYonkersCard.classList.remove('yonkers-card-active');
    contactsSherrillCard.classList.remove('sherrill-card-active');
    contactsMenuImage.classList.remove('contacts-menu-image-active');
    contactsMenuTitle.textContent = 'Canandaigua, NY';
}
function showNewyorkCard() {
    contactsMenu.classList.remove('contacts-menu-active');
    contactsMenuButton.classList.add('contacts-menu__button-active');
    contactsNewyorkCard.classList.add('newyork-card-active');
    contactsCanadaCard.classList.remove('canada-card-active');
    contactsYonkersCard.classList.remove('yonkers-card-active');
    contactsSherrillCard.classList.remove('sherrill-card-active');
    contactsMenuImage.classList.remove('contacts-menu-image-active');
    contactsMenuTitle.textContent = 'New York City';
}
function showYonkersCard() {
    contactsMenu.classList.remove('contacts-menu-active');
    contactsMenuButton.classList.add('contacts-menu__button-active');
    contactsYonkersCard.classList.add('yonkers-card-active');
    contactsCanadaCard.classList.remove('canada-card-active');
    contactsSherrillCard.classList.remove('sherrill-card-active');
    contactsNewyorkCard.classList.remove('newyork-card-active');
    contactsMenuImage.classList.remove('contacts-menu-image-active');
    contactsMenuTitle.textContent = 'Yonkers, NY';
}
function showSherrillCard() {
    contactsMenu.classList.remove('contacts-menu-active');
    contactsMenuButton.classList.add('contacts-menu__button-active');
    contactsSherrillCard.classList.add('sherrill-card-active');
    contactsCanadaCard.classList.remove('canada-card-active');
    contactsNewyorkCard.classList.remove('newyork-card-active');
    contactsYonkersCard.classList.remove('yonkers-card-active');
    contactsMenuImage.classList.remove('contacts-menu-image-active');
    contactsMenuTitle.textContent = 'Sherrill, NY';
}