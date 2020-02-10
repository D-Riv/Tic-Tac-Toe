// // Game setup

// class Player1 {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// class Player2 {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }

// let player1 = new Player1("player1", "red");
// let player2 = new Player2("player2", "blue");

// class Game {
//   constructor() {
//     this.player1Turn = true;
//     this.player2Turn = true;
//     this.players = [player1, player2]
//     this.random = this.players
//   }
//   decideStartingPlayer() {
//     for(let i = 0; i < this.players.length -1; i--) {
//       let ii = Math.floor(Math.random() * (i + 1));
//       let temp = this.random[i];
//       this.random[i] = this.random[ii];
//       this.random[ii] = temp;
//     }
//     return this.random;
//   }
// }
// let game = new Game();
// game.decideStartingPlayer();
// console.log(game.decideStartingPlayer());


let squares = document.querySelectorAll(".square");
color = "red";
let redArr = [];
let blueArr = [];


for(let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", toggle);
  function toggle() {

    if(color === "red") {
      squares[i].style.background = color;
      color = "blue";

      redArr.push(squares[i]);
      console.log(redArr);
    } else {
      squares[i].style.background = color;
      color = "red";
    }
  } 
}

let resetSquare = document.querySelector(".reset");

  resetSquare.addEventListener("click", toggleOff);
  function toggleOff() {
    for(let i = 0; i < squares.length; i++) {
    if(squares[i].style.background = "red") {
      squares[i].style.background = "white";
    }
  }
}