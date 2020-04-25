/* DOM caching */
let userScore = 0;
let botScore = 0;
const userScore_span = document.getElementById("userScore");
const botScore_span = document.getElementById("botScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getBotChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function captalize(string){
  if(string=='rock')
    return 'Rock';
  else if(string=='paper')
    return 'Paper';
  else
      return 'Scissors';
}

function userWin(userChoice,botChoice){
  //console.log("userWin");
  userChoice = captalize(userChoice);
  botChoice = captalize(botChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div_p.innerHTML = userChoice + " beats " + botChoice + ". You Win !";
}

function userLoses(userChoice,botChoice){
  userChoice = captalize(userChoice);
  botChoice = captalize(botChoice);
  //console.log("userLoses");
  botScore++;
  botScore_span.innerHTML = botScore;
  result_div_p.innerHTML = botChoice + " beats " + userChoice + ". You Win !";
}

/* Random choice from BOT */
function draw(userChoice,botChoice){
  userChoice = captalize(userChoice);
  botChoice = captalize(botChoice);
  //console.log("draw");
  result_div_p.innerHTML = "It's a draw!";
}

function game(userChoice) {
  result_div_p.style.display = "block";
  const botChoice = getBotChoice();
    //console.log(userChoice + ': ' + botChoice);
  switch (userChoice + botChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userWin(userChoice,botChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      userLoses(userChoice,botChoice);
      break;
    default:
      draw(userChoice,botChoice);
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    // console.log("clicked rock");
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    // console.log("clicked paper");
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    // console.log("clicked scissors");
    game("scissors");
  });
}

main();
