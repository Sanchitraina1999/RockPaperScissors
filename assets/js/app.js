/* DOM caching */
const userScore = 0;
const botScore = 0;
const userScore_span = document.getElementById("userScore");
const botScore_span = document.getElementById("botScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getBotChoice(){
    const choices=['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random()*3)
    return (choices[randomIndex]);
}

function game(userChoice){
    const botChoice = getBotChoice();
    //console.log(userChoice + ': ' + botChoice);
    switch(userChoice){
        case 'rock':
            
    }
}

function main() {
  rock_div.addEventListener("click", function () {
    // console.log("clicked rock");
    game('rock');
  });

  paper_div.addEventListener("click", function () {
    // console.log("clicked paper");
    game('paper');
  });

  scissors_div.addEventListener("click", function () {
    // console.log("clicked scissors");
    game('scissors');
  });
}

main();