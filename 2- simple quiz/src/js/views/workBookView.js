class WorkBookView {
    _parent = document.querySelector('.result-answers');
    _data;
    _resetBtn = document.querySelector('.reset');
    _quiz = document.querySelector('.quiz');
    _quizRsultPage = document.querySelector('.quiz__result');

    constructor() {
        this.addHadlerReset();
    }

    render(data, userAnswers) {
        this._data = data;
        this._data.forEach((quest, index) => {
            const isTrueAnswer = quest.answer === userAnswers[`question${index + 1}`];

            this._parent.insertAdjacentHTML('beforeend', this._generatMarkup(quest, isTrueAnswer,userAnswers[`question${index + 1}`]))
        });
        this._quiz.style.height = this._quizRsultPage.offsetHeight + 'px';
    }

    addHadlerReset() {
        this._resetBtn.addEventListener('click', e => {
            location.reload();
        })
    }

    _generatMarkup(data, isTrueAnswer,userAnswer = '') {
        return `
            <li class="result-box ${isTrueAnswer ? 'result-correct' : 'result-wrong'}">
                <p class="result-question">
                    <span class="result-question-number">${data.number}</span>- <span class="result-question-text">${data.question}</span>
                </p>
                ${isTrueAnswer?`
                    <p class="answer-box">correct answer: ${data.answer}</p>
                    `:`
                    <div class="answer-box">
                        <p class="user-answer-text">your answer: ${userAnswer}</p>
                        <p class="answer-text">correct answer: ${data.answer}</p>
                    </div>
                    `
                }
                </li>
                `;
    }
}
export default new WorkBookView();