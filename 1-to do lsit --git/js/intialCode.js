class Todo {
    constructor(id, text, done = false) {
        this.id = id;
        this.text = text;
        this.done = done
    }

    toggleDone() {
        this.done = !this.done;
    }

    edit(newText) {
        this.text = newText;
    }
}
class TodoView {
    constructor(todo, onUpdate, onRemove) {
        this.todo = todo;
        this.onUpdate = onUpdate;
        this.onRemove = onRemove;

        this.li = this.createItem();
        this.editBtn.addEventListener('click', this.editEvent.bind(this))
        this.removeBtn.addEventListener('click', this.removeEvent.bind(this))
    }

    #makeElement(tagName, options = {}) {
        const { className, parent, text, attribute, id } = options;
        let element = document.createElement(tagName);
        if (className) element.classList.add(className);
        if (id) element.id = id;
        if (parent) parent.appendChild(element);
        if (text) element.textContent = text;
        if (attribute) element.setAttribute(attribute[0], attribute[1]);

        return element;
    }
    createItem() {

        this.li = this.#makeElement('li', {
            className: 'item',
            id: this.todo.id,
            attribute: ["draggable", "true"]
        })
        // item text
        this.itemText = this.#makeElement('p', {
            className: 'itemText',
            parent: this.li,
            text: this.todo.text
        })
        // btns article
        this.btns = this.#makeElement('div', {
            className: 'btns',
            parent: this.li
        })
        // remove btn
        this.removeBtn = this.#makeElement('button', {
            className: 'removeBtn',
            parent: this.btns,
            text: '❌',
        })
        // edit btn
        this.editBtn = this.#makeElement('button', {
            className: 'editBtn',
            parent: this.btns,
            text: '✏️',
        })

        return this.li;
    }

    editEvent() {
        this.editInput = this.#makeElement('input', {
            className: 'editInput',
            attribute: ['spellcheck', 'false']
        })
        this.editInput.value = this.todo.text;
        this.li.replaceChild(this.editInput, this.itemText);
        this.editInput.focus();

        this.editInput.addEventListener('blur', e => {
            this.todo.edit(this.editInput.value);
            this.itemText.textContent = this.todo.text;
            this.li.replaceChild(this.itemText, this.editInput);
            this.onUpdate()
        })
    }

    removeEvent() {
        this.li.remove();
        this.onRemove(this.li.id)
    }
}
class List {
    constructor() {
        this.todos = [];
    }

    get hasTodo() {
        return Boolean(this.todos.length);
    }
    get todoCount() {
        return this.todos.length
    }
    add(todo) {
        this.todos.push(todo);
    }

    remove(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    clearDone() {
        this.todos = this.todos.filter(t => !t.done);
    }

    getAll() {
        return this.todos;
    }
}
class TaskList extends List{}
class DoneList extends List{}

class ColumnManager {
    static active(done, task, notodo) {
        this.displayDoneItemsCount(done);
        this.displayTaskItemsCount(task);
        this.displayNotodo(notodo);
    }
    static displayDoneItemsCount(num) {
        const itemCounterEl = document.querySelector('.doneCounterValue');
        itemCounterEl.textContent = num;
    }
    static displayTaskItemsCount(num) {
        const itemCounterEl = document.querySelector('.taskCounterValue');
        itemCounterEl.textContent = num;
    }
    static displayNotodo(hasTodo) {
        const noTodoEl = document.getElementById('noTodo');
        if (hasTodo) noTodoEl.style.display = 'none';
        else noTodoEl.style.display = 'block';
    }
}

class StorageManager {
    static save(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }

    static load(key) {
        if (!localStorage.getItem(key)) return null;
        return JSON.parse(localStorage.getItem(key) ?? [])
    }

    static clear(key) {
        localStorage.removeItem(key);
    }
}


class App {
    constructor() {
        this.taskList = new TaskList();
        this.doneList = new DoneList();
        this.addInput = document.getElementById('addInput');
        this.addBtn = document.getElementById('addBtn');
        this.clearDoneBtn = document.getElementById('clearDone');
        this.resetBtn = document.getElementById('reset');
        this.taskListEl = document.querySelector('.taskList');
        this.doneListEl = document.querySelector('.doneList');

        this.bindEvents();
        this.dragAndDrop();
    }
    bindEvents() {
        this.addBtn.addEventListener('click', e => {
            if (!this.addInput.value.trim()) return alert('enter value');
            const id = crypto.randomUUID().slice(-6);
            const newToDo = new Todo(id, this.addInput.value);
            this.taskList.add(newToDo);
            this.saveAndRender();
            this.addInput.value = '';
        })
        this.clearDoneBtn.addEventListener('click', e => {
            this.doneList.todos = [];
            this.doneListEl.innerHTML = '';
            StorageManager.clear('doneItems');
            ColumnManager.displayDoneItemsCount(this.doneList.todoCount)
        })
        this.resetBtn.addEventListener('click', e => {
            this.taskList.todos = [];
            this.taskListEl.innerHTML = '';
            StorageManager.clear('taskItems')

            this.doneList.todos = [];
            this.doneListEl.innerHTML = '';
            StorageManager.clear('doneItems')

            ColumnManager.active(
                this.doneList.todoCount,
                this.taskList.todoCount,
                this.taskList.hasTodo
            );
        })

        window.addEventListener('load', this.loadTodos.bind(this))
        window.addEventListener('beforeunload', this.saveAndRender.bind(this))
    }
    render() {
        const renderList = [
            { list: this.taskList, Element: this.taskListEl },
            { list: this.doneList, Element: this.doneListEl }
        ];
        renderList.forEach(section => {
            section.Element.innerHTML = '';
            section.list.getAll().forEach(todoObj => {
                const view = new TodoView(
                    todoObj,
                    update => this.saveAndRender(),
                    id => {
                        section.list.remove(id);
                        this.render()
                    }
                );
                section.Element.appendChild(view.li);
            })
        })
        ColumnManager.active(
            this.doneList.todoCount,
            this.taskList.todoCount,
            this.taskList.hasTodo
        );
        this.dragAndDrop();
    }
    saveAndRender() {
        StorageManager.save('taskItems', this.taskList.getAll());
        StorageManager.save('doneItems', this.doneList.getAll());
        this.render();
    }
    loadTodos() {
        const savedTask = StorageManager.load('taskItems');
        const savedDone = StorageManager.load('doneItems');
        if (!savedTask && !savedDone) return;
        savedTask.forEach(t => this.taskList.add(new Todo(t.id, t.text, t.done)));
        if (savedDone) savedDone.forEach(t => this.doneList.add(new Todo(t.id, t.text, t.done)));
        this.render();
    }

    dragAndDrop() {
        const items = document.querySelectorAll('.item');
        const lists = document.querySelectorAll('.list');

        let draggedItem = null;
        items.forEach(item => {
            item.ondragstart = e => {
                item.classList.add('draging');
                draggedItem = e.target;
                setTimeout(() => e.target.style.display = 'none', 0);
            }
            item.ondragend = e => {
                item.classList.remove('draging');

                e.target.style.display = 'flex';
                draggedItem = null;
            }
        })

        lists.forEach(list => {
            list.ondragover = e => {
                e.preventDefault();
            }

            list.ondragleave = () => {
                list.closest('.column').classList.remove('drag-over')
            }
            function dropList() {
                if (draggedItem) {
                    let draggedItemObj = null;
                    list.appendChild(draggedItem);

                    if (list.classList.contains('taskList')) {
                        const draggedItemObj = this.doneList.todos.find(item => item.id === draggedItem.id)
                        draggedItemObj.done = false
                        this.doneList.todos = this.doneList.todos.filter(items => items.id !== draggedItemObj.id);
                        this.taskList.todos.push(draggedItemObj);
                    }

                    if (list.classList.contains('doneList')) {
                        draggedItemObj = this.taskList.todos.find(item => item.id === draggedItem.id)
                        draggedItemObj.done = true
                        this.taskList.todos = this.taskList.todos.filter(items => items !== draggedItemObj);
                        this.doneList.todos.push(draggedItemObj);
                    }

                    ColumnManager.active(
                        this.doneList.todoCount,
                        this.taskList.todoCount,
                        this.taskList.hasTodo
                    );
                }
            }
            list.ondrop = dropList.bind(this);

        })
    }
}
const app = new App();

document.addEventListener('keyup', e => {
    if (e.key === "Escape") localStorage.clear();
    if (e.key === 'Enter') document.getElementById('addBtn').click();
})
