const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordConf = document.getElementById('password-conf');

form.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isEmailValid = (email) => {
    const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpEmail.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const passwordConfValue = passwordConf.value.trim();

    if(firstNameValue === ''){
        setError(firstName, 'First name is required')
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === ''){
        setError(lastName, 'Last name is required')
    } else {
        setSuccess(lastName);
    }

    if(countryValue === 'null'){
        setError(country, 'Country is required')
    } else {
        setSuccess(country);
    }

    if(zipCodeValue === ''){
        setError(zipCode, 'Zip code is required')
    } else if(zipCodeValue.length<5 || zipCodeValue.legnth>5){
        setError(zipCode, 'Please enter a valid US zip code')
    } else {
        setSuccess(zipCode);
    }

    if(emailValue === ''){
        setError(email, 'Email address is required')
    } else if(!isEmailValid(emailValue)) {
        setError(email, 'Please provide a valid email address')
    } else {
        setSuccess(email);
    }

    if(usernameValue === ''){
        setError(username, 'Username is required')
    } else {
        setSuccess(username);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required')
    } else {
        setSuccess(password);
    }

    if(passwordConfValue === ''){
        setError(passwordConf, 'Password confirmation is required')
    } else {
        setSuccess(passwordConf);
    }
};