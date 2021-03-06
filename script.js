
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElements = document.getElementById("answer-buttons");
const timerElement = document.getElementById("seconds");
const leaderBoardElement = document.getElementById("leaderBoard");
const scoreInputElement = document.getElementById("score-input");
const scoreboardElement = document.getElementById("scoreboard");
const mainContainerElement = document.getElementById("mainContainer")
const userName = document.getElementById("user-input");
const startScreenElement = document.getElementById("startScreen");
const highestScoresElement = document.getElementById("highest-scores");

const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");
const viewHighScoresButton = document.getElementById("viewHighScores");
const startButton = document.getElementById('start-btn');
const addScoreButton = document.getElementById("add-score")
const goBackButton = document.getElementById("go-back");
const deleteHighScoresButton = document.getElementById("delete-highscores");


let questionNumber = 0;
let timerStart = 60;
let interval;
let inputName;
let created = false;
let reload = false;


startButton.addEventListener("click", startGame);
viewHighScoresButton.addEventListener("click", viewLeaderBoard);
addScoreButton.addEventListener("click", loadScore)
goBackButton.addEventListener("click", reloadGame);
deleteHighScoresButton.addEventListener("click", clearScoreboard);
userName.addEventListener("change", setUserName);

function startGame() {
    startTimer();
    startScreenElement.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function startTimer() {
    interval = setInterval(function () {
        timerStart--;
        timerElement.textContent = timerStart     
    }, 1000)
}

function stopTimer() {
    if(timerStart === 0){
        clearInterval(interval)
    } else
    clearInterval(interval);
}


function setNextQuestion() {
    showQuestion(questionNumber)
    questionNumber++;
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


let answerButton = document.getElementsByClassName("buttonAnswer");
 for( let i = 0; i < answerButton.length; i++){
     answerButton[i].addEventListener("click", function(event){
         let answer = this.getAttribute("data")
         console.log(answer)
         if (answer === "false"){
            timerStart = timerStart - 10;
            // console.log("if false")
         } 
         if(questionNumber < question.length){
         console.log(questionNumber)
         setNextQuestion()
        } else{
            stopTimer();
            $("#userScore").text(timerStart);
            // console.log(timerStart)
            // setScore();
            // console.log("Score should populate");
            showleaderBoard();
        }
    }) 
}

function showleaderBoard(){
    scoreboardElement.classList.remove("hide");
    questionContainerElement.classList.add("hide");
    // show your scoreboard
    // setScore();
    // console.log("hibbity dibbity")
    // add and remove hides
}


function setScore (){
    let finalScore = {name: inputName, score: timerStart};
    let scoreboard = localStorage.getItem("Scoreboard");
    // console.log(finalScore)
    if(scoreboard){
        scoreboard = JSON.parse(scoreboard)
        scoreboard.push(finalScore);
    } else(scoreboard = [finalScore]);
    localStorage.setItem("Scoreboard", JSON.stringify(scoreboard))

}

function setUserName(e){
    console.log(e.target.value)
    inputName = e.target.value
    setScore();
    // let node = document.createElement("LI");                 // Create a <li> node
    // let textnode = document.createTextNode(inputName);
    // let textnode2 = document.createTextNode(timerStart);         // Create a text node
    // node.appendChild(textnode);     
    // node.appendChild(textnode2);                              // Append the text to <li>
    // highestScoresElement.appendChild(node); 
}

function loadScore(){
    event.preventDefault();
    // add score to local storage create div for repository
    // viewLeaderBoard()
    // localStorage.setItem(timerStart, timerStart);
    
    // console.log("Should view Scoreboard")
    mainContainerElement.classList.add("hide");
    leaderBoardElement.classList.remove("hide");
    if(reload){
    let node = document.createElement("LI");                 // Create a <li> node
    let textnode = document.createTextNode(inputName);
    let textnode2 = document.createTextNode(timerStart);         // Create a text node
    node.appendChild(textnode);     
    node.appendChild(textnode2);                              // Append the text to <li>
    highestScoresElement.appendChild(node); 
}
    questionNumber = 0;
    timerStart = 60;
    interval = null;
    inputName = null;
    timerElement.textContent = timerStart 
    viewLeaderBoard();
}

function clearScoreboard() {
    // // delete highscore function
    // console.log("Should clear scoreboard")
    localStorage.setItem("Scoreboard", "[]");
    // highestScoresElement.clearChildren();

    let child = highestScoresElement.lastElementChild;  
    while (child) { 
        highestScoresElement.removeChild(child); 
        child = highestScoresElement.lastElementChild; 
}
}

function reloadGame(){    
    // refresh browser
    // console.log("Refresh brower or loadStartGame")
    startScreenElement.classList.remove("hide");
    mainContainerElement.classList.remove("hide");
    leaderBoardElement.classList.add("hide");
    scoreboardElement.classList.add("hide");
    reload = true;

}


function viewLeaderBoard(){
    //hide startScreen and unhide leaderBoard
    // console.log("Should go to Leaderboard")
    mainContainerElement.classList.add("hide");
    leaderBoardElement.classList.remove("hide");
    //append element to list

    //retrieve scoreboard
    let localStorageValues = JSON.parse(localStorage.getItem("Scoreboard"));
    console.log(created, "total")
    if(localStorageValues != null && created == false){
        for(i = 0; i < localStorageValues.length; i++){
                let node = document.createElement("LI");                 // Create a <li> node
                let textnode = document.createTextNode(localStorageValues[i].name);
                let textnode2 = document.createTextNode(localStorageValues[i].score);         // Create a text node
                node.appendChild(textnode);     
                node.appendChild(textnode2);                              // Append the text to <li>
                highestScoresElement.appendChild(node); 
        }
created = true
    }

}





// // in the event listener, you want to add in the algorithm for saving to local storage
// // window.location.reload();

// // create a function to render the scoreboard
// function renderScoreboard() {

//     // load scoreboard from localStorage (localStorage.getItem)
//     // JSON.parse to convert it back into an array

//     // use that array to render a list for your scoreboard

// }


// newButton.addEventListener("click", toggleLeaderboard);

// function toggleLeaderboard(){
//     leaderBoardElement.classList.remove("hide");
//     console.log("leaderBoardElement")
// }




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
// function getNextQuestion(){
//     currentQuestionIndex++; 
//     questionOnScreen
// }