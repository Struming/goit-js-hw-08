import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormData() {
const formData = {
    email: emailInput.value,
    message: messageInput.value,
};

localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function restoreFormData() {
const savedState = localStorage.getItem('feedback-form-state');

if (savedState) {
    const formData = JSON.parse(savedState);

    emailInput.value = formData.email;
    messageInput.value = formData.message;
}
}

function clearFormData() {
localStorage.removeItem('feedback-form-state');
emailInput.value = '';
messageInput.value = '';
}

function handleSubmit(event) {
event.preventDefault();
console.log('Form data:', {
    email: emailInput.value,
    message: messageInput.value,
});
clearFormData();
}

const saveFormDataThrottled = throttle(saveFormData, 500);

form.addEventListener('input', saveFormDataThrottled);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', restoreFormData);
