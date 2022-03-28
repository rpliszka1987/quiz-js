var questionsArray = [{
    // Question 1
    question: "What does CSS Stand for?",
    options: ["Cascading Style Sheets", "Copying Style Sheets", "Creative Style Sheets", "Color Style Sheets"],
    answer: "Cascading Style Sheets"
},
{ 
    // Question 2
    question: "Where does the <title> element belong on HTML page.",
    options: ["<body>", "<main>", "<head>", "<footer>"],
    answer: "<head>"
},
{
    // Question 3
    question: "What year was JavaScript developed?",
    options: ["1998", "2001", "1995", "1996"],
    answer: "1995"
}]

var startbtnEl = document.querySelector("#start-btn");
var mainPageArea = document.querySelector(".main-area");
var displayAreaEl = document.querySelector("#quiz-area");
var timer = questionsArray.length * 15;
var score = questionsArray.length * 10;

var questionNumber = 0;


// starts the quiz
function startQuiz() {
    // removes all the text
    displayAreaEl.remove();

    
    getFunction();
};

function clearArea() {
    var quizAreaEl = document.querySelector(".question-area");
    quizAreaEl.remove();

    getFunction();
}

function timerChange() {
    var timeEl = document.querySelector("#timer");
    timer--;
    timeEl.textContent = timer;

}

// Gets question for the test
function getFunction() {

    // creates new div
    var newDiv = document.createElement("div");
    newDiv.className = "question-area";
    mainPageArea.appendChild(newDiv);

    // retrives the question
    var currentQuestion = questionsArray[questionNumber];

    // Adds question to the page
    var newQuestion = document.createElement("p");
    newQuestion.className = "question-style";
    newQuestion.textContent = currentQuestion.question;
    newDiv.appendChild(newQuestion);

    currentQuestion.options.forEach(function(choice, i){
        var buttonOption = document.createElement("button");
        buttonOption.setAttribute("id", choice);
        buttonOption.textContent = choice;
        buttonOption.className = "button-style";
        newDiv.appendChild(buttonOption);
        buttonOption.onclick = questionCheck;   
    });  
};


function questionCheck() {
    var answer = document.createElement("h3");
    answer.className = "answer";
    var quizDivEl = document.querySelector(".question-area");


    if (this.id === questionsArray[questionNumber].answer) {
        answer.textContent = "Correct";
        quizDivEl.appendChild(answer);
    } else {
        answer.textContent = "Wrong";
        quizDivEl.appendChild(answer);
        score -= 10;
    }

    console.log(score);

    questionNumber++;
    if (questionNumber === questionsArray.length) {
        var quizAreaEl = document.querySelector(".question-area");
        quizAreaEl.remove();
        console.log("end");
        endGame();

    } else {

        clearArea();
    }

};

function endGame() {
    
    var endScreenEl = document.createElement("div");
    endScreenEl.className = "end-game";
    mainPageArea.appendChild(endScreenEl);
    var endScore = document.createElement("h2");
    endScore.textContent = "Your score is: " + score;
    endScreenEl.appendChild(endScore);


}
startbtnEl.onclick = startQuiz;
