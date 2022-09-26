//types Assertion
//! ça ne peut pas retourner null

// const form: HTMLFormElement = document.querySelector('form')!;
// console.log(form.children);
//Type Casting
const form = document.querySelector('form') as HTMLFormElement;

console.log(form.children);
const input = document.querySelector('input') as HTMLInputElement;
const form1 = document.querySelector('.form-container') as HTMLFormElement;
console.log(form1);

form.addEventListener('submit', handleSubmit);
function handleSubmit(event: Event) {
    event.preventDefault();
    console.log('submitted');
}

window.addEventListener('click', handleClick);
function handleClick(event: MouseEvent) {
    console.log(event.clientX, event.clientY);
}

const paragraphslist = document.querySelectorAll('p');
console.log(paragraphslist);
