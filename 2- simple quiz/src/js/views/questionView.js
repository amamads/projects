class QuestionsView {
    _data;
    _parent = document.querySelector('.quiz__questions');
    _main = document.querySelector('.main');
    _startBtn = document.querySelector('.start-btn');
    _quizStartPage = document.querySelector('.quiz__start')
    _quizResultPage = document.querySelector('.quiz__result')
    _quiz = document.querySelector('.quiz');
    _siderbarItems = Array.from(document.querySelectorAll('.sidebar-item'))

    constructor() {
        this._updateQuizHeight(this._quizStartPage);
    }

    updateSidebarItemsDetails(curentQuesttionNum) {
        if (this._siderbarItems[curentQuesttionNum - 1].classList.contains('answerd')) return;

        this._siderbarItems[curentQuesttionNum - 1].classList.toggle('active')
        this._siderbarItems[curentQuesttionNum - 1].classList.toggle('answerd')
    }

    getQuestionsCount(num) {
        this._questionsCount = num;

        for (let i = 0; i < this._questionsCount; i++) {
            this._siderbarItems[i].classList.toggle('active')
        }

    }

    _updateQuizHeight(page) {
        this._quiz.style.height = page.offsetHeight + 'px';

    }

    render(data, userAnswers = {}) {
        this._data = data;

        if (this._main.innerHTML) {
            this._main.classList.add('fade-out');
            setTimeout(() => {
                this._main.innerHTML = this._generatMarkup();
                this._main.classList.remove('fade-out');
                
                // *______ showing user answer ______*
                this._optionsEl = document.querySelectorAll('.option');
                const answer = userAnswers[`question${this._data.number}`];
                this._optionsEl.forEach(opt => {
                    if(opt.textContent === answer){
                        opt.classList.add('activeOption')
                    }
                })
            }, 500);

            // console.log(userAnswers);
            // this._main.addEventListener('transitionend', e => {
            //     this._main.innerHTML = this._generatMarkup();
            //     this._main.classList.remove('fade-out');
            // })
        }
        else this._main.innerHTML = this._generatMarkup();


        this._optionsEl = document.querySelectorAll('.option');
    }
    addHandlerStartQuiz(handler) {
        this._startBtn.addEventListener('click', e => {
            this._quizStartPage.classList.remove('active')
            this._quizStartPage.classList.add('exit-left')
            this._updateQuizHeight(this._parent)
            this._parent.classList.add('active')
            handler();
        });
    }
    addHandlerSelectOption(handler) {
        this._main.addEventListener('click', e => {
            const option = e.target.closest('.option')
            if (!option) return;
            this._optionsEl.forEach(option => option.classList.remove('activeOption'));
            option.classList.add('activeOption')
            const questionNumber = this._data.number;
            const answerOption = option.textContent
            handler(questionNumber, answerOption)
        })
    }
    addHandlerSwitchQuestion(handler) {
        this._parent.addEventListener('click', e => {
            const btn = e.target.closest('.nav__btn')
            if (!btn || btn.classList.contains('btn--end')) return;
            const questionNumber = this._data.number;
            const btnWork = +btn.dataset.btnWork;
            handler(btnWork, questionNumber);
        })
    }

    getResultPage() {
        this._parent.classList.toggle('hidden')
        this._quizResultPage.classList.toggle('hidden')
    }
    addHandlerEndQuiz(handler) {
        this._parent.addEventListener('click', e => {
            const btn = e.target.closest('.btn--end')
            if (!btn) return;

            this._parent.classList.remove('active')
            this._parent.classList.add('exit-left')

            // console.log(this._quizResultPage);
            // this._updateQuizHeight(this._quizResultPage)
            this._quizResultPage.classList.add('active')
            handler();
        })
    }

    _generatMarkup() {
        return `
            <div class="question-box">
                <p class="question-count">
                Question <span class="curentQuest">${this._data.number}</span>
                </p>
                <h2 class="question-text">${this._data.question}</h2>
            </div>

            <ul class="options">
            ${this._data.options.map((option, index) => `<li><button class="option" data-number="${index + 1}">${option}</button></li>`).join('')}
            </ul>

            <div class="nav">
                <button data-btn-work="-1" class="nav__btn btn--prev btn" ${this._data.number === 1 ? 'disabled' : ''}>Prev</button>
                ${this._data.number === this._questionsCount ?
                `<button data-btn-work="1" class="nav__btn btn--end btn"}>End</button>` :
                `<button data-btn-work="1" class="nav__btn btn--next btn"}>Next</button>`
            }
            </div>`;
    }

}
export default new QuestionsView();