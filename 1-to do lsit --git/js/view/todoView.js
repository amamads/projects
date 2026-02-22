class TodoView {
    _todoData;
    _parentEl = document.querySelector('.taskList');
    _addinputEl = document.getElementById('addInput');
    _addBtnEl = document.getElementById('addBtn');

    constructor() {
        document.addEventListener('keyup', e => {
            if (e.key === "Escape") localStorage.clear();
            if (e.key === 'Enter') document.getElementById('addBtn').click();
        })
    }

    addHandlerAddTodo(handler) {
        this._addBtnEl.addEventListener('click', e => {
            handler(this._addinputEl.value)
            this._addinputEl.value = '';
        })
    }

    render(data) {
        this._todoData = data;
        this._parentEl.innerHTMl = '';
        this._parentEl.insertAdjacentHTML('afterbegin', this._generateMarkup());
    }

    _generateMarkup() {
        return `
            <li id="${this._todoData.id}" class="item" draggable="true" data-done="${this._todoData.done}">
                <p class="itemText">${this._todoData.text}</p>
                <div class="btns">
                    <button class="removeBtn">❌</button>
                    <button class="editBtn">✏️</button>
                </div>
            </li>
        `
    }
}
export default new TodoView();