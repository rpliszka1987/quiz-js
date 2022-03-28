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

var questionNumber = 0;


// starts the quiz
function startQuiz() {
    // removes all the text
    displayAreaEl.remove();

    getFunction();
};

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
        console.log(choice);
        console.log(i);
        var buttonOption = document.createElement("button");
        buttonOption.setAttribute("id", choice);
        buttonOption.textContent = choice;
        buttonOption.className = "button-style";
        newDiv.appendChild(buttonOption);
        buttonOption.onclick = questionCheck;   
    });  
};


function questionCheck() {
    if (this.id === questionsArray[questionNumber].answer) {
        var wrongAnswer = document.createElement("h3");
        wrongAnswer.className = "answer";
        wrongAnswer.textContent = "Correct";
        var quizDivEl = document.querySelector(".question-area");
        quizDivEl.appendChild(wrongAnswer);
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
};
startbtnEl.onclick = startQuiz;
