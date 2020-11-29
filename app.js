const btn = document.getElementById('btn');
const error = document.getElementById('error');
const errMessage = document.querySelector('small');
const email = document.getElementById('email');

btn.addEventListener('click', e => {

  if(email.validity.typeMismatch || email.value === '') {
    error.style.visibility = 'visible';
    errMessage.innerText = 'Please provide a valid email';
  } else {
    email.setCustomValidity('');
    email.value = '';
    errMessage.innerText = 'Submitted';
    error.style.visibility = 'hidden';
  }
  
  e.preventDefault();
});

window.document.addEventListener('DOMContentLoaded', () => {
  email.value = '';
});