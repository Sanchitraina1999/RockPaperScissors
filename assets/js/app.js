/* DOM caching */
const userScore = 0;
const botScore = 0;
const userScore_span = document.getElementById("userScore");
const botScore_span = document.getElementById("botScore");
const scoreBoard_div=document.querySelector(".scoreBoard");
const result_div=document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

rock_div.addEventListener('click',function(){
    console.log("clicked");
}
)

paper_div.addEventListener('click',function(){
    console.log("clicked");
}
)

scissors_div.addEventListener('click',function(){
    console.log("clicked");
}
)