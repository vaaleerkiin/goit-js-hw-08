const LOCAL_KEY = 'feedback-form-state';
import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

const currentFormValue = {
  email: '',
  message: '',
};
form.addEventListener(
  'input',
  throttle(ev => {
    currentFormValue.email = email.value;
    currentFormValue.message = textarea.value;
    console.log(currentFormValue);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(currentFormValue));
  }, 1000)
);
console.log(localStorage.getItem(LOCAL_KEY));
email.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).email;
textarea.value = JSON.parse(localStorage.getItem(LOCAL_KEY)).message;

form.addEventListener('submit', () => {
  localStorage.removeItem(LOCAL_KEY);
});
