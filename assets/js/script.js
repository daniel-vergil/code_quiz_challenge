var selectors = {
    startQuizBtn: document.querySelector(".start-quiz-btn"),
    quizSection: document.querySelector(".quiz-instructions"),
    quizQuestions: document.querySelector(".quiz-instructions h1"),
    instructions: document.querySelector(".quiz-instructions p"),
    resultSection: document.querySelector(".result"),
    timer: document.querySelector(".timer"),
    ansChoicesforQuestion1: null,
    answerChoiceButton1: null,
    answerChoiceButton2: null,
    answerChoiceButton3: null,
    answerChoiceButton4: null,
    choice1: null,
    choice2: null,
    choice3: null,
    choice4: null,
    liEl1: null,
    liEl2: null,
    liEl3: null,
    liEl4: null,
    correctAnswer: document.querySelector(".result"),
    correctAnswerForQn1: null,
    count: 60,
    resultText: document.querySelector(".result h2")
};

var questions = {
    question1: "Commonly used data types do not include: ",
    question2: "Array in JavaScript can be used to store ____________.",
    question3: "A very useful tool ",
    question4: "String values must be enclosed within ",
    question5: "The condition in an "
};

var answer1 = ["1. String", "2. Alert", "3. Boolean", "4. Number"];
var answer2 = ["choice1", "choice2", "choice3", "choice4"];
var answer3 = ["choice1", "choice2", "choice3", "choice4"];
var answer4 = ["choice1", "choice2", "choice3", "choice4"];
var answer5 = ["choice1", "choice2", "choice3", "choice4"];

var displayAnswers = function () {
    selectors.ansChoicesforQuestion1 = document.createElement("ul");
    selectors.ansChoicesforQuestion1.className = "answers-list";
    selectors.answerChoiceButton1 = document.createElement("button");
    selectors.answerChoiceButton2 = document.createElement("button");
    selectors.answerChoiceButton3 = document.createElement("button");
    selectors.answerChoiceButton4 = document.createElement("button");
    selectors.ansChoicesforQuestion1.className = "answer-choices-list";
    selectors.quizSection.appendChild(selectors.ansChoicesforQuestion1);
    selectors.choice1 = document.createElement("li");
    selectors.choice2 = document.createElement("li");
    selectors.choice3 = document.createElement("li");
    selectors.choice4 = document.createElement("li");
    selectors.liEl1 = selectors.ansChoicesforQuestion1.appendChild(selectors.choice1);
    selectors.liEl2 = selectors.ansChoicesforQuestion1.appendChild(selectors.choice2);
    selectors.liEl3 = selectors.ansChoicesforQuestion1.appendChild(selectors.choice3);
    selectors.liEl4 = selectors.ansChoicesforQuestion1.appendChild(selectors.choice4);
    selectors.liEl1.appendChild(selectors.answerChoiceButton1);
    selectors.liEl2.appendChild(selectors.answerChoiceButton2);
    selectors.liEl3.appendChild(selectors.answerChoiceButton3);
    selectors.liEl4.appendChild(selectors.answerChoiceButton4);
    selectors.answerChoiceButton2.className = "correct-answer-for-qn1";
    selectors.answerChoiceButton1.className = "wrong-answer-1";
    selectors.answerChoiceButton3.className = "wrong-answer-2";
    selectors.answerChoiceButton4.className = "wrong-answer-3";
    selectors.answerChoiceButton1.textContent = answer1[0];
    selectors.answerChoiceButton2.textContent = answer1[1];
    selectors.answerChoiceButton3.textContent = answer1[2];
    selectors.answerChoiceButton4.textContent = answer1[3];
}

var displayCorrectResult = function () {
    selectors.correctAnswer.style.borderTop = "thick solid #808080"
    selectors.resultText.textContent = "Correct!";
}

var displayIncorrectResult = function () {
    selectors.correctAnswer.style.borderTop = "thick solid #808080"
    selectors.resultText.textContent = "Wrong!";
    count -= 10;
}

var questionNumber = 2;
var displaySubsequentQuestions = function(questionNumber) {
    
}

var count = 60;
var startTimer = function () {
    var timer = setInterval(function () {
        selectors.timer.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            window.alert("Time's up!");
        }
      }, 1000);
}

selectors.startQuizBtn.addEventListener("click", function () {
    selectors.quizQuestions.textContent = questions.question1;
    displayAnswers();
    selectors.instructions.remove();
    selectors.startQuizBtn.remove();
    var count = 60;
    startTimer();
    document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
    [document.querySelector(".wrong-answer-1"),document.querySelector(".wrong-answer-2"),document.querySelector(".wrong-answer-3")].forEach(item => {
        item.addEventListener("click",displayIncorrectResult)
    })
});