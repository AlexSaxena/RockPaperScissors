let playerPoints = 0;
let aiPoints = 0;
const playerPoints_span = document.getElementById("playerPoints");
const aiPoints_span = document.getElementById("aiPoints");
const points_div = document.querySelector(".points");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

function getAiPick() {
  const picks = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return picks[randomNumber];
}
//Test Switch skip If else
function game(playerPick) {
  const aiPick = getAiPick();
  switch (playerPick + aiPick) {
    case "rockscissors":
      case "paperrock":
        case "scissorspaper":
          console.log("player wins");
          break;
    case "rockpaper":
        case "paperscissors":
          case "scissorsrock":
            console.log("player loses");
            break;
    case "rockrock":
        case "paperpaper":
          case "scissorsscissors":
            console.log("it is a tie");
            break;
  }
}

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
}
console.log(main())