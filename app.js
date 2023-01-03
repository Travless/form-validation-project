const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConf = document.getElementById('password-conf');

firstName.addEventListener('input', e => {
    e.preventDefault();

    if(firstName.validity.tooShort) {
        firstName.setCustomValidity('Please enter full, legal first name (no nicknames or abbreviations)');
    } else {
        firstName.setCustomValidity('');
    }
});

lastName.addEventListener('input', e => {
    if(lastName.validity.tooShort){
        lastName.setCustomValidity('Please enter full, legal last name (no nicknames or abbreviations');
    } else {
        lastName.setCustomValidity('');
    }
});
