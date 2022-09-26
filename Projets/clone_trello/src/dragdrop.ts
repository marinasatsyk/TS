import {
  actualContainer,
  actualBtn,
  actualForm,
  toggleForm,
  handleItemDeletion,
  addContainerListeners,
} from './app.js';

export function addDDListeners(element: HTMLElement) {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragover', handleDragOver);
  element.addEventListener('drop', handleDrop);
  element.addEventListener('dragend', handleDragEnd);
}

//Drag and Drop
let dragSrcEl: HTMLElement;
//this is always in first position
function handleDragStart(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  if (actualContainer) toggleForm(actualBtn, actualForm, false);
  dragSrcEl = this;
  // we add ? because the element can be null
  e.dataTransfer?.setData('text/html', this.innerHTML);
}

function handleDragOver(e: DragEvent) {
  //always preventDafault
  e.preventDefault();
}

function handleDrop(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  const receptionEl = this;

  if (
    dragSrcEl.nodeName === 'LI' &&
    receptionEl.classList.contains('items-container')
  ) {
    (receptionEl.querySelector('ul') as HTMLUListElement).appendChild(
      dragSrcEl
    );
    addDDListeners(dragSrcEl);
    handleItemDeletion(dragSrcEl.querySelector('button') as HTMLButtonElement);
  }
  if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
    /*on change html des elements qu'on swap, ça donne illusion 
    qu'il change la place, on change juste le contenu*/
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer?.getData('text/html') as string;
    if (this.classList.contains('items-container')) {
      //ensuite on rajoute les evenements à l'élémént qui se fait swapper
      addContainerListeners(this as HTMLDivElement);

      this.querySelectorAll('li').forEach((li: HTMLLIElement) => {
        handleItemDeletion(li.querySelector('button') as HTMLButtonElement);
        addDDListeners(li);
      });
    } else {
      addDDListeners(this);
      handleItemDeletion(this.querySelector('button') as HTMLButtonElement);
    }
  }
}

function handleDragEnd(this: HTMLElement, e: DragEvent) {
  e.stopPropagation();
  /**les evenements qui  s'est fait swap  back,
   * celui qui s'est fait deplacé en sens invers
   *il faut rajoute les listener
   */
  if (this.classList.contains('items-container')) {
    addContainerListeners(this as HTMLDivElement);
    if (this.querySelectorAll('li')) {
      this.querySelectorAll('li').forEach((li: HTMLLIElement) => {
        handleItemDeletion(li.querySelector('button') as HTMLButtonElement);
        addDDListeners(li);
      });
    }
  } else {
    addDDListeners(this);
  }
}
