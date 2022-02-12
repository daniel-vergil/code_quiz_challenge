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
    resultText: document.querySelector(".result h2"),
    highScoresLink: document.querySelector(".high-score-link")
};

var questions = {
    question1: "Commonly used data types do not include: ",
    question2: "The condition in an if / else statement is enclosed with ____________.",
    question3: "Arrays in JavaScript can be used to store ____________.",
    question4: "String values must be enclosed within ____________ when being assigned to variables.",
    question5: "A very useful tool during development and debugging for printing content to the debugger is:"
};

var answer1 = ["1. strings", "2. alerts", "3. booleans", "4. numbers"];
var answer2 = ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"];
var answer3 = ["1. numbers and strings", "2. other arrrays", "3. booleans", "4. all of the above"];
var answer4 = ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"];
var answer5 = ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"];

var highScores = {
    initials: '',
    score: 0
}

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
    selectors.answerChoiceButton1.className = "wrong-answer";
    selectors.answerChoiceButton3.className = "wrong-answer";
    selectors.answerChoiceButton4.className = "wrong-answer";
    selectors.answerChoiceButton1.textContent = answer1[0];
    selectors.answerChoiceButton2.textContent = answer1[1];
    selectors.answerChoiceButton3.textContent = answer1[2];
    selectors.answerChoiceButton4.textContent = answer1[3];
}
var questionNumber = 1;
var getQuestionNumber = function () {

    if (document.querySelector(".quiz-instructions h1").textContent == questions.question1) {
        questionNumber++;
    } else if (document.querySelector(".quiz-instructions h1").textContent == questions.question2) {
        questionNumber++;
    } else if (document.querySelector(".quiz-instructions h1").textContent == questions.question3) {
        questionNumber++;
    } else if (document.querySelector(".quiz-instructions h1").textContent == questions.question4) {
        questionNumber++;
    }
    return questionNumber;
}

var displayCorrectResult = function () {
    selectors.correctAnswer.style.borderTop = "thick solid #808080"
    selectors.resultText.textContent = "Correct!";
    scores();
    if (!lastQnFlag) {
        setTimeout(function () {
            getQuestionNumber();
            displaySubsequentQuestions(questionNumber);
        }, 1000);
    } else {
        setTimeout(function () {
            scorePage();
        }, 1000);
    }
}

var points = 0;
var counter = 0;
var scores = function () {
    counter++;
    if (counter <= 5) {
        points += 10;
    }
    return points;
}

var displayIncorrectResult = function () {
    selectors.correctAnswer.style.borderTop = "thick solid #808080"
    selectors.resultText.textContent = "Wrong!";
    count -= 10;
    if (!lastQnFlag) {
        setTimeout(function () {
            getQuestionNumber();
            displaySubsequentQuestions(questionNumber);
        }, 500);
    } else {
        setTimeout(function () {
            scorePage();
        }, 500);
    }
}

var lastQnFlag = false;
var displaySubsequentQuestions = function (questionNumber) {
    if (questionNumber == 2) {
        selectors.quizQuestions.textContent = questions.question2;
        var j = 1;
        var selector;
        for (var i = 0; i < 4; i++) {
            selector = ".answer-choices-list li:nth-child(" + j + ") button"
            document.querySelector(selector).textContent = answer2[i];
            j++;
        }
        document.querySelector(".answer-choices-list li:nth-child(1) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(2) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(3) button").className = "correct-answer-for-qn1";
        document.querySelector(".answer-choices-list li:nth-child(4) button").className = "wrong-answer";
        selectors.correctAnswer.style.borderTop = "none";
        selectors.resultText.textContent = " ";
        document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
        document.querySelectorAll(".wrong-answer").forEach(item => {
            item.addEventListener("click", event => {
                displayIncorrectResult();
            });
        });
    } else if (questionNumber == 3) {
        selectors.quizQuestions.textContent = questions.question3;
        var j = 1;
        var selector;
        for (var i = 0; i < 4; i++) {
            selector = ".answer-choices-list li:nth-child(" + j + ") button"
            document.querySelector(selector).textContent = answer3[i];
            j++;
        }
        document.querySelector(".answer-choices-list li:nth-child(1) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(2) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(4) button").className = "correct-answer-for-qn1";
        document.querySelector(".answer-choices-list li:nth-child(3) button").className = "wrong-answer";
        selectors.correctAnswer.style.borderTop = "none";
        selectors.resultText.textContent = " ";
        document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
        document.querySelectorAll(".wrong-answer").forEach(item => {
            item.addEventListener("click", event => {
                displayIncorrectResult();
            });
        });
    } else if (questionNumber == 4) {
        document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
        document.querySelectorAll(".wrong-answer").forEach(item => {
            item.addEventListener("click", event => {
                displayIncorrectResult();
            });
        });
        selectors.quizQuestions.textContent = questions.question4;
        j = 1;
        var selector;
        for (var i = 0; i < 4; i++) {
            selector = ".answer-choices-list li:nth-child(" + j + ") button"
            document.querySelector(selector).textContent = answer4[i];
            j++;
        }
        document.querySelector(".answer-choices-list li:nth-child(1) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(2) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(3) button").className = "correct-answer-for-qn1";
        document.querySelector(".answer-choices-list li:nth-child(4) button").className = "wrong-answer";
        selectors.correctAnswer.style.borderTop = "none";
        selectors.resultText.textContent = " ";
        document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
        document.querySelectorAll(".wrong-answer").forEach(item => {
            item.addEventListener("click", event => {
                displayIncorrectResult();
            });
        });
    } else if (questionNumber == 5) {
        selectors.quizQuestions.textContent = questions.question5;
        lastQnFlag = true;
        j = 1;
        var selector;
        for (var i = 0; i < 4; i++) {
            selector = ".answer-choices-list li:nth-child(" + j + ") button"
            document.querySelector(selector).textContent = answer5[i];
            j++;
        }
        document.querySelector(".answer-choices-list li:nth-child(4) button").className = "correct-answer-for-qn1";
        document.querySelector(".answer-choices-list li:nth-child(1) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(2) button").className = "wrong-answer";
        document.querySelector(".answer-choices-list li:nth-child(3) button").className = "wrong-answer";
        selectors.correctAnswer.style.borderTop = "none";
        selectors.resultText.textContent = " ";
        document.querySelector(".correct-answer-for-qn1").addEventListener("click", function () {
            displayCorrectResult();
        });
        document.querySelectorAll(".wrong-answer").forEach(item => {
            item.addEventListener("click", event => {
                displayIncorrectResult();

            });
        });
    }
}

var count = 60;
var startTimer = function () {
    var timer = setInterval(function () {
        selectors.timer.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(timer);
            scorePage();
        }
    }, 1000);
}

var scorePage = function () {
    if (document.querySelector(".answer-choices-list")) {
        document.querySelector(".answer-choices-list").remove();
    }
    if (document.querySelector(".result")) {
        document.querySelector(".result").remove();
    }

    selectors.quizQuestions.textContent = "All done!";
    var scoreText = document.createElement("p");
    var enterInitialsText = document.createElement("p");
    if (!document.querySelector(".submitInitialsButton")) {
        selectors.timer.textContent = 0;
        var enterInitialsTextBox = document.createElement("input");
        enterInitialsTextBox.setAttribute('type', 'text');
        enterInitialsTextBox.setAttribute('value', ' ');
        enterInitialsTextBox.className = 'initials-input';
        var submitButton = document.createElement("button");
        selectors.quizSection.appendChild(scoreText);
        selectors.quizSection.appendChild(enterInitialsText);
        selectors.quizSection.appendChild(enterInitialsTextBox);
        var submitScoreBtn = selectors.quizSection.appendChild(submitButton);
        selectors.quizQuestions.textContent = "All done!";
        document.querySelector(".quiz-instructions p:nth-of-type(1)").textContent = "Your final score is " + points + ".";
        document.querySelector(".quiz-instructions p:nth-of-type(2)").textContent = "Enter initials: ";
        submitScoreBtn.textContent = "Submit";
        submitScoreBtn.className = "submitInitialsButton";
        document.querySelector(".submitInitialsButton").addEventListener("click", function () {
            saveScoreInLocalStorage(document.querySelector(".initials-input").value, points);
            alert('Saved your scores in localStorage');
        }, {
            once: true
        });
    }

}

var saveScoreInLocalStorage = function (initials, points) {
    highScores.initials = initials;
    highScores.score = points;
    if (localStorage.getItem('results')) {
        var results = JSON.parse(localStorage.getItem('results'));
        results.push(highScores);
        localStorage.setItem('results', JSON.stringify(results));
    } else {
        var results = [];
        results.push(highScores);
        localStorage.setItem('results', JSON.stringify(results));
    }
}


selectors.startQuizBtn.addEventListener("click", function () {
    selectors.quizQuestions.textContent = questions.question1;
    displayAnswers();
    selectors.instructions.remove();
    selectors.startQuizBtn.remove();
    startTimer();
    document.querySelector(".correct-answer-for-qn1").addEventListener("click", displayCorrectResult);
    document.querySelectorAll(".wrong-answer").forEach(item => {
        item.addEventListener("click", event => {
            displayIncorrectResult();
        });
    });
});

var displayHighScores = () => {
    if (document.querySelector(".answer-choices-list")) {
        document.querySelector(".answer-choices-list").remove();
    }
    if (document.querySelector(".result")) {
        document.querySelector(".result").remove();
    }
    if (document.querySelector(".quiz-instructions")) {
        document.querySelector(".quiz-instructions").remove();
    }
    selectors.timer.textContent = 0;
    var highScoreList = document.createElement("ol");
    highScoreList.className = 'highScoreList';
    document.querySelector('body').appendChild(highScoreList);
    var scoresList = localStorage.getItem('results');
    var jsonScoresList = JSON.parse(scoresList);

    var sortedScoresList = jsonScoresList.sort(function (a, b) {
        return a.score - b.score;
    });
    var i = sortedScoresList.length - 1;
    while (i >= 0) {
        var scores = document.createElement("li");
        scores.textContent = sortedScoresList[i].initials.toUpperCase() + "   -   " + sortedScoresList[i].score;
        highScoreList.appendChild(scores);
        i--;
    }
}

selectors.highScoresLink.addEventListener("click", function () {
    displayHighScores();
}, {
    once: true
});