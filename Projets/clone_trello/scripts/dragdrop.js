import { actualContainer, actualBtn, actualForm, toggleForm, handleItemDeletion, addContainerListeners, } from './app.js';
export function addDDListeners(element) {
    element.addEventListener('dragstart', handleDragStart);
    element.addEventListener('dragover', handleDragOver);
    element.addEventListener('drop', handleDrop);
    element.addEventListener('dragend', handleDragEnd);
}
//Drag and Drop
let dragSrcEl;
//this is always in first position
function handleDragStart(e) {
    var _a;
    e.stopPropagation();
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    // we add ? because the element can be null
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData('text/html', this.innerHTML);
}
function handleDragOver(e) {
    //always preventDafault
    e.preventDefault();
}
function handleDrop(e) {
    var _a;
    e.stopPropagation();
    const receptionEl = this;
    if (dragSrcEl.nodeName === 'LI' &&
        receptionEl.classList.contains('items-container')) {
        receptionEl.querySelector('ul').appendChild(dragSrcEl);
        addDDListeners(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector('button'));
    }
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        /*on change html des elements qu'on swap, ça donne illusion
        qu'il change la place, on change juste le contenu*/
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text/html');
        if (this.classList.contains('items-container')) {
            //ensuite on rajoute les evenements à l'élémént qui se fait swapper
            addContainerListeners(this);
            this.querySelectorAll('li').forEach((li) => {
                handleItemDeletion(li.querySelector('button'));
                addDDListeners(li);
            });
        }
        else {
            addDDListeners(this);
            handleItemDeletion(this.querySelector('button'));
        }
    }
}
function handleDragEnd(e) {
    e.stopPropagation();
    /**les evenements qui  s'est fait swap  back,
     * celui qui s'est fait deplacé en sens invers
     *il faut rajoute les listener
     */
    if (this.classList.contains('items-container')) {
        addContainerListeners(this);
        if (this.querySelectorAll('li')) {
            this.querySelectorAll('li').forEach((li) => {
                handleItemDeletion(li.querySelector('button'));
                addDDListeners(li);
            });
        }
    }
    else {
        addDDListeners(this);
    }
}
