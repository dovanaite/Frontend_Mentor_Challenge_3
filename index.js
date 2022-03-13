const questions = document.querySelectorAll('.question');
const questionTitle = document.querySelectorAll('.question_title');
const answers = document.querySelectorAll('.answer')
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');
const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const answer5 = document.getElementById('answer-5');

const allQuestions = [question1, question2, question3, question4, question5];
const allAnswers = [answer1, answer2, answer3, answer4, answer5];

for (let i = 0; i < allQuestions.length; i++) {
    allQuestions[i].addEventListener('click', function() {
        allQuestions[i].classList.toggle('activeQuestion');
        allAnswers[i].classList.toggle('active');


        //kaip padaryti, kad būtų galima paspausti ant 1 headingo? t.y. atidarius vieną, kiti užsidarytų?
        // if ((allAnswers[i]).classList.contains('active')) {
        //     allAnswers[i]
        // }
    })
}