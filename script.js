const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    // const small = formControl.querySelector('small');
    // small.innerText = message;
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
       showError(input, ' Email is not valid');
    }
}

//check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required!`);
      } else {
          showSuccess(input);
      }

    });
}

//check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}  must be atleast ${min} charecters`)
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)}  must be less than ${max} charecters`)
    } else {
        showSuccess(input)
    }
}

//check password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwrods do not match');
    }
}
//get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listener
form.addEventListener('submit',function(e) {
    e.preventDefault();


    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    // if (username.value === '') {
    //     showError(username, 'Username is Required!'); // message 2. paramater
    // } else {
    //     showSuccess(username, 'Username is ok!');
    // }

    // if (email.value === '') {
    //     showError(email, 'email is Required!'); // message 2. paramater
    // } else if(!isValidEmail(email.value)) {
    //     showError(email, 'email is not valid'); // message 2. paramater
    // } else {
    //     showSuccess(email, 'email is ok!');
    // }

    // if (password.value === '') {
    //     showError(password, 'password is Required!'); // message 2. paramater
    // } else {
    //     showSuccess(password, 'password is ok!');
    // }

    // if (password2.value === '') {
    //     showError(password2, 'password confirm required!'); // message 2. paramater
    // } else {
    //     showSuccess(password2, 'password is ok!');
    // }
});