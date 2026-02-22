export const state = {
    questions: [],
    questionsCount: 0,
    currentQuestionNum: 1,
    userAnswers: {}
}

const getRandomNumber = (from, to) => from + Math.floor(Math.random() * (to - from + 1));
function getUniqueRandomNumbers(from, to, count) {
    const numbers = Array.from({ length: to - from + 1 }, (_, i) => from + i)

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers.slice(0, count);
}

export async function selectQuestions() {
    try {
        // *______ enter api data ______*
        const res = await fetch('./src/questions-bank/questions-en.json');
        if (!res.ok) throw new Error('data was not fineded')
        const data = (await res.json()).questions;

        // *______ number of question ______*
        // state.questionsCount = getRandomNumber(13, 16);
        state.questionsCount = 5;
        
        // *______ randome questoins index______*
        const questionsIndex = getUniqueRandomNumbers(0, data.length - 1, state.questionsCount);

        questionsIndex.forEach(i => state.questions.push(data[i]));
        state.questions.forEach((quest,index) => quest.number = index+1)
    } catch (err) {
        console.error(err);
        throw err
    }
}

export const getCurrentQuestion = () => state.questions[state.currentQuestionNum - 1];