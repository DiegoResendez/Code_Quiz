const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElements = document.getElementById("answer-buttons")
const timerElement = document.getElementById("seconds")
const buttonA = document.getElementById("buttonA")
const buttonB = document.getElementById("buttonB")
const buttonC = document.getElementById("buttonC")
const buttonD = document.getElementById("buttonD")
const startScreen = document.getElementById("startScreen")
const submitButton = document.getElementById("buttonSubmit")
const scoreboardElement = document.getElementById("scoreboard")

// pointers to scoreboard elements (button, text)

let questionNumber = 0;
let timerStart = 60;
let interval;

// const currentQuestionIndex

// create an event listener for the score submit button
// in the event listener, you want to add in the algorithm for saving to local storage
// window.location.reload();

startButton.addEventListener("click", startGame)
// submitButton.addEventListener("click", adjustScoreboard)
// submitButton.addEventListener("click", loadScore)
let answerButton = document.getElementsByClassName("buttonAnswer")
 for( let i = 0; i < answerButton.length; i++){
     answerButton[i].addEventListener("click", function(event){
         let answer = this.getAttribute("data")
         if (answer === false){
            timerElement = timerElement - 10;
         } 
         if(questionNumber < question.length){
         questionNumber++;
         setNextQuestion()
        } else{
            // endGame
            // clearInterval(interval)
            stopTimer();


            // show your scoreboard?
            
        }
        //  console.log(timerElement)
     }) 
 }
 


// let question = ;
// let currentQuestionIndex;

function startGame() {
    startTimer();
    console.log("Started")
    startButton.classList.add("hide")
    startScreen.classList.add("hide")
    scoreboardElement.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(questionNumber)
    console.log ("Should set next question")
    if (questionNumber > question.length){
        scoreboardElement.classList.remove("hide");
        questionContainerElement.classList.add("hide");
    }
}

function showQuestion(questionNumber) {
    questionElement.innerText = question[questionNumber].q
    buttonA.textContent = question[questionNumber].answer[0].text;
    buttonA.setAttribute("data", question[questionNumber].answer[0].correct);
    buttonB.textContent = question[questionNumber].answer[1].text;
    buttonB.setAttribute("data", question[questionNumber].answer[1].correct);
    buttonC.textContent = question[questionNumber].answer[2].text;
    buttonC.setAttribute("data", question[questionNumber].answer[2].correct);
    buttonD.textContent = question[questionNumber].answer[3].text;
    buttonD.setAttribute("data", question[questionNumber].answer[3].correct);

}


function startTimer() {
    interval = setInterval(function () {
        timerStart--;
        timerElement.textContent = timerStart

        console.log(timerStart)

    }, 1000)
}

function stopTimer() {
    if(timerElement = 0){
        clearInterval (interval)
    } else
    clearInterval(interval);

    console.log("stopTimer")
}

function getNextQuestion(){
    currentQuestionIndex++; 
    questionOnScreen
}

function loadScore(){
    // add score to local storage create div for repository
}

function setScore (finalScore){
    if (timerElement = 0) {
        setScore == 0
    } else (setScore == timerElement)
}



const question = [
    {
        q: "The Millenium Falcon, piloted by Han Solo, finished the Kessel Run in what time-frame",
        answer: [
            { text: "12 Parsecs", correct: true },
            { text: "1.21 JigaWatts", correct: false },
            { text: "2 Shakes of a Lambs Tail", correct: false },
            { text: "48 hours", correct: false },
        ],
    },{
        q: "What are the odds of successfully navigating an asteroid field?",
        answer: [
            { text: "One in a Million", correct: false },
            { text: "10,000 to 1", correct: false },
            { text: "3,720 to 1", correct: true },
            { text: "527,324 to 1", correct: false },
        ],
    },{ 
        q: "Leia is a princess to which planet?",
        answer: [
            { text: "Tatooine", correct: false },
            { text: "Alderaan", correct: true },
            { text: "Naboo", correct: false },
            { text: "Coruscant", correct: false },
        ],
    },{ 
        q: "C3PO is found and saved by Chewbacca in this place.",
        answer: [
            { text: "Cloud City", correct: true },
            { text: "Degoba System", correct: false },
            { text: "Spice Mines of Kessel", correct: false },
            { text: "Moon of Endor", correct: false },
        ],
    }
]

