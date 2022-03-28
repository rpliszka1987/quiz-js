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
var headerEl = document.querySelector("#header");
var headerParagraphEl = document.querySelector("#text-main");
var displayAreaEl = document.querySelector("#quiz-area");
var questionNumber = 0;



function startQuiz() {
    // Clears the main loaded screen
    startbtnEl.setAttribute("style", "display:none");
    headerEl.setAttribute("style", "display: none");
    headerParagraphEl.setAttribute("style", "display: none");

    getFunction();
}



function getFunction() {
    
}

startbtnEl.addEventListener("click", startQuiz);
