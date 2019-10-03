let playerPoints = 0;
let aiPoints = 0;
const playerPoints_span = document.getElementById("playerPoints");
const aiPoints_span = document.getElementById("aiPoints");
const points_div = document.querySelector(".points");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
//Should these be here or in another file?

function getAiPick() {
  const picks = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return picks[randomNumber];
}

function victory() {
  playerPoints++
  playerPoints_span.innerHTML = playerPoints;
  result_div.innerHTML = `You win!`
 }

 function loss() {
  aiPoints++
  aiPoints_span.innerHTML = aiPoints;
  result_div.innerHTML = `You lose!`
 }
 
 function tie() {
  result_div.innerHTML = `It is a tie!`
 }

//Test Switch skip If else
function game(playerPick) {
  const aiPick = getAiPick();
  switch (playerPick + aiPick) {
    case "rockscissors":
      case "paperrock":
        case "scissorspaper":
          victory(playerPick + aiPick);
          break;
    case "rockpaper":
        case "paperscissors":
          case "scissorsrock":
            loss(playerPick + aiPick);
            break;
    case "rockrock":
        case "paperpaper":
          case "scissorsscissors":
            tie(playerPick + aiPick);
            break;
  }
}
//seperate logic -Thomas. create wins, tie loss function in case. That's were we also add the 
// Points for the player_points counter
//When button is pressed
const main = () => {
  rock_button.addEventListener('click', function() {
    game("rock");
  })

  paper_button.addEventListener('click', function() {
    game("paper");
  })

  scissors_button.addEventListener('click', function() {
    game("scissors");
  })
};
console.log(main());