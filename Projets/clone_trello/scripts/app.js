import { addDDListeners } from './dragdrop.js';
//select all containers
const itemsContainer = document.querySelectorAll('.items-container');
console.log(itemsContainer);
//variables dynamiques
export let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
//2.kit of listeners
export function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    const currentForm = currentContainer.querySelector('form');
    deleteBtnListeners(currentContainerDeletionBtn);
    addItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListeners(currentForm);
    addDDListeners(currentContainer);
}
//1.add an eventlistener for each container
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
//delete container after click
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
// click déclenche handelAddItem
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
function closingFormBtnListeners(btn) {
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
// suprime le container
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [
        ...document.querySelectorAll('.delete-container-btn'),
    ];
    const containers = [
        ...document.querySelectorAll('.items-container'),
    ];
    containers[btnsArray.indexOf(btn)].remove();
}
//displays container pour rajouter un élément
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
export function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = 'none';
        btn.style.display = 'block';
    }
    else if (action) {
        form.style.display = 'block';
        btn.style.display = 'none';
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUL = actualContainer.querySelector('ul');
    actualForm = actualContainer.querySelector('form');
    actualTextInput = actualContainer.querySelector('input');
    actualValidation = actualContainer.querySelector('.validation-msg');
}
function createNewItem(e) {
    e.preventDefault();
    // Validation
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = 'Must be at least 1 character long';
        return;
    }
    else {
        actualValidation.textContent = '';
    }
    // Création Item
    const itemContent = actualTextInput.value;
    const li = `<li class="item" draggable="true">
  <p>${itemContent}</p>
  <button>X</button>
  </li>`;
    actualUL.insertAdjacentHTML('beforeend', li);
    const item = actualUL.lastElementChild;
    const liBtn = item.querySelector('button');
    handleItemDeletion(liBtn);
    addDDListeners(item);
    actualTextInput.value = '';
}
export function handleItemDeletion(btn) {
    btn.addEventListener('click', () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
//Add New Container
const addContainerBtn = document.querySelector('.add-container-btn');
const addContainerForm = document.querySelector('.add-new-container form');
const addContainerFormInput = document.querySelector('.add-new-container input');
const validationNewContainer = document.querySelector('.add-new-container .validation-msg');
const addContainerCloseBtn = document.querySelector('.close-add-list');
const addNewContainer = document.querySelector('.add-new-container');
const containersList = document.querySelector('.main-content');
addContainerBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener('click', () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener('submit', createNewContainer);
function createNewContainer(e) {
    e.preventDefault();
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = 'Must be at least 1 character long';
        return;
    }
    else {
        validationNewContainer.textContent = '';
    }
    const itemsContainer = document.querySelector('.items-container');
    //pertmet de cloner la div de base et remplire avec du contenue et la valeur de input
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
  <div class="top-container">
    <h2>${addContainerFormInput.value}</h2>
    <button class="delete-container-btn">X</button>
  </div>
  <ul></ul>
  <button class="add-item-btn">Add an item</button>
  <form autocomplete="off">
    <div class="top-form-container">
      <label for="item">Add a new item</label>
      <button type="button" class="close-form-btn">X</button>
    </div>
    <input type="text" id="item" />
    <span class="validation-msg"></span>
    <button type="submit">Submit</button>
  </form>`;
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainer);
    addContainerFormInput.value = '';
    addContainerListeners(newContainer);
}
