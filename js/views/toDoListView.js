import {toDoItemTemplate} from "../templates/toDoItemTemplate"  

let view;

const testObject = {
    uid: 12345,
    todo: 'Pick up shoes',
    category: 'work',
    status: 'pending',
}

export function toDoListView() {
    view = document.querySelector('#to-do-list')
    render()
}

function render(data) {
    const div = document.createElement('div')
    const toDoList = document.querySelector('#item-container')
    toDoList.replaceChildren()
    const testToDo = div.prepend(toDoItemTemplate(testObject))

    toDoList.append(div)
}