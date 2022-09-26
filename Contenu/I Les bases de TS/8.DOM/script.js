"use strict";
//types Assertion
//! ça ne peut pas retourner null
// const form: HTMLFormElement = document.querySelector('form')!;
// console.log(form.children);
//Type Casting
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
const form1 = document.querySelector('.form-container');
console.log(form1);
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted');
}
window.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.clientX, event.clientY);
}
const paragraphslist = document.querySelectorAll('p');
console.log(paragraphslist);
