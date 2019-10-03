let playerPoints = 0;
let aiPoints = 0;
const playerPoints_span = document.getElementById("playerPoints");
const aiPoints_span = document.getElementById("aiPoints");
const points_div = document.querySelector(".points");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");


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