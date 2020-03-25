let squares = document.querySelectorAll(".square");
let squareArr = Array.from(squares);
color = "red";
let redArr = [];
// redArr.map(Number);
let blueArr = [];
let winningArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let score = document.querySelector(".score");
let message = document.createElement("h1");
// console.log(squareArr);
score.appendChild(message).innerHTML = "Red Starts";
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");

let playerOneScore = 0;
let playerTwoScore = 0;

for (let i = 0; i < squares.length; i++) {
  squares[i].setAttribute("id", i);
  // console.log(squares[i].id);
}

let board = document.querySelector(".message");
let winingMessage = document.createElement("p");
let counter = 0;

for (let i = 0; i < squareArr.length; i++) {
  // console.log(squareArr);
  squares[i].addEventListener("click", toggle);

  function toggle() {
    counter++;
    console.log(counter);
    if (counter == 9) {
      board.appendChild(winingMessage).innerHTML = "ITS A TIE!";
    }
    if (color === "red") {
      squares[i].style.background = color;
      score.appendChild(message).innerHTML = "Blue's Turn";
      squares[i].removeEventListener("click", toggle);
      color = "blue";
      redArr.push(i);
      playerOneScore += 1;
      score1.innerHTML = `Player 1: ${[playerOneScore]}`;
      // console.log(i);
      // console.log(redArr.toString());
      // console.log(winningArr[0].toString());
      if (redArr.toString() === winningArr[0].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[1].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[2].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[3].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[4].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[5].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[6].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[7].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else if (redArr.toString() === winningArr[8].toString()) {
        board.appendChild(winingMessage).innerHTML = "RED YOU WIN!";
      } else {
      }
    } else if (color === "blue") {
      squares[i].style.background = color;
      score.appendChild(message).innerHTML = "Red's Turn";
      squares[i].removeEventListener("click", toggle);
      color = "red";
      blueArr.push(i);
      playerTwoScore += 1;
      score2.innerHTML = `Player 2: ${[playerTwoScore]}`;
      // console.log(blueArr);
      if (blueArr.toString() === winningArr[0].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[1].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[2].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[3].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[4].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[5].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[6].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[7].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else if (blueArr.toString() === winningArr[8].toString()) {
        board.appendChild(winingMessage).innerHTML = "BLUE YOU WIN!";
      } else {
      }
    }
  }
  let startGame = document.querySelector(".start");

  startGame.addEventListener("click", function() {
    squares[i].addEventListener("click", toggle);
  });
}
let resetSquare = document.querySelector(".reset");
resetSquare.addEventListener("click", toggleOff);
function toggleOff(e) {
  e.preventDefault();
  squares.forEach(square => (square.style.background = "white"));
  color = "red";
  playerOneScore = 0;
  playerTwoScore = 0;
  score1.innerHTML = `Player 1: ${[playerOneScore]}`;
  score2.innerHTML = `Player 2: ${[playerTwoScore]}`;
  board.appendChild(winingMessage).innerHTML = "";
  counter = 0;
}
