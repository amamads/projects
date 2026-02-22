import * as model from './model.js';
import questionView from './views/questionView.js';
import workBookView from './views/workBookView.js';

async function controlStartQuiz() {
    try {
        await model.selectQuestions();
        const curentQuest = model.getCurrentQuestion();
        questionView.getQuestionsCount(model.state.questionsCount)
        questionView.render(curentQuest)
        questionView.addHandlerSelectOption(controlSelectOption)
        questionView.addHandlerSwitchQuestion(controlSwitchQuestion)
        questionView.addHandlerEndQuiz(controlEndQuiz)
    } catch (err) {
        console.error(err);
    }

}

function controlSelectOption(questionNumber, answerOption) {
    model.state.userAnswers[`question${questionNumber}`] = answerOption;
}

function controlSwitchQuestion(num, questionNumber) {
    // *______ if ueser dont select optin can't get next question ______*
    if (num === 1) if (!model.state.userAnswers?.[`question${questionNumber}`]) return alert('select one of options');

    // *______ update sidebar details ______*
    questionView.updateSidebarItemsDetails(model.state.currentQuestionNum);

    model.state.currentQuestionNum += num;
    const curentQuest = model.getCurrentQuestion();
    questionView.render(curentQuest, model.state.userAnswers)
    questionView.addHandlerSelectOption(controlSelectOption)
}

function controlEndQuiz() {
    // *______ if ueser don't select option can't get next question ______*
    if (!model.state.userAnswers?.[`question${model.state.questionsCount}`]) return alert('select one of options');

    workBookView.render(model.state.questions, model.state.userAnswers);
}

(init => {
    questionView.addHandlerStartQuiz(controlStartQuiz);
    // setTimeout(() => {
    //     document.querySelector('.start-btn').click();
    // }, 500);
})()