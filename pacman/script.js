// Create your board using an array.
const body = document.querySelector("body");
//For gameBoard css multiply the amount in array by 70.
const gameBoard = document.getElementById("gameBoard");
//This creates your board!
let pacmanLocation;

let board = [
  [
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall"
  ],
  [
    "wall",
    "pacman",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "empty",
    "wall"
  ],
  [
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "dot",
    "empty",
    "wall"
  ],
  [
    "wall",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "empty",
    "wall"
  ],
  [
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "wall",
    "dot",
    "wall",
    "dot",
    "empty",
    "wall"
  ],
  [
    "wall",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "dot",
    "empty",
    "wall"
  ],
  [
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall",
    "wall"
  ]
];

//Find position of pacman on the board you created.

let whereIsPacman = () => {
  for (var i = 0; i < board.length; i++) {
    if (board[i].indexOf("pacman") !== -1) {
      let x = board[i].indexOf("pacman");
      let y = i;
      return [x, y];
    }
  }
};

pacmanLocation = whereIsPacman();

//This creates your grid.  It creates your walls, pacman, dots.
var paintWorld = () => {
  gameBoard.innerHTML = " ";
  console.log(gameBoard);
  for (var i = 0; i < board.length; i++) {
    // console.log(board[i]);
    for (var j = 0; j < board[i].length; j++) {
      // console.log(board[i][j]);
      if (board[i][j] === "wall") {
        let div = document.createElement("div");
        div.className = "wall";
        gameBoard.appendChild(div);
      } else if (board[i][j] === "dot") {
        let div = document.createElement("div");
        div.className = "dot";
        gameBoard.appendChild(div);
      } else if (board[i][j] === "pacman") {
        let div = document.createElement("div");
        div.className = "pacman";
        gameBoard.appendChild(div);
      } else if (board[i][j] === "empty") {
        let div = document.createElement("div");
        div.className = "empty";
        gameBoard.appendChild(div);
      }
    }
  }
};

paintWorld();

// canPackmanMove(direction);
// take in the direction, see where pacman would be going in the grid
// if it's a wall in that location, return false
// else true
let wall = document.getElementsByClassName("wall");
let score = document.querySelector("#score");
let dot = document.querySelector(".dot");
let dotLength = document.getElementsByClassName("dot").length;
dotLength = 57;
console.log(dotLength);

console.log(dot);
let empty = document.querySelector(".empty");
console.log(empty);

let canPackmanMove = direction => {
  let x = pacmanLocation[0];
  let y = pacmanLocation[1];

  if (direction === "up") {
    // get the content of the block above pacman.
    // check if it's a wall.
    let whereIsHeGoing = board[x - 1][y];

    if (whereIsHeGoing === "wall") {
      return false;
    } else {
      return true;
    }
  } else if (direction === "down") {
    whereIsHeGoing = board[x + 1][y];
    if (whereIsHeGoing === "wall") {
      return false;
    } else {
      return true;
    }
  } else if (direction === "left") {
    whereIsHeGoing = board[x][y - 1];
    if (whereIsHeGoing === "wall") {
      return false;
    } else {
      return true;
    }
  } else if (direction === "right") {
    whereIsHeGoing = board[x][y + 1];
    if (whereIsHeGoing === "wall") {
      return false;
    } else {
      return true;
    }
  }
};

canPackmanMove();
console.log(wall);

let scoreCount = () => {
  let currentScore = score.innerHTML;
  // let addScore = 0;
  var newScore = Number(currentScore) + 1;
  score.innerHTML = newScore;
};

//Once you get pacman moving, here we are going to add 1 point to the counter every time pacman goes over a dot.
// THIS FUNCTION IS WHAT COUNTS YOUR SCORE
let counter = direction => {
  let x = pacmanLocation[0];
  let y = pacmanLocation[1];
  if (direction === "up") {
    let dotCounter = board[x - 1][y];
    if (dotCounter === "dot") {
      scoreCount();
    }
  } else if (direction === "down") {
    dotCounter = board[x + 1][y];
    if (dotCounter === "dot") {
      scoreCount();
    }
  } else if (direction === "left") {
    dotCounter = board[x][y - 1];
    if (dotCounter === "dot") {
      scoreCount();
    }
  } else if (direction === "right") {
    dotCounter = board[x][y + 1];
    if (dotCounter === "dot") {
      scoreCount() + 1;
    }
  }
};
//THIS FUNCTION GIVES YOU AN ALERT WHEN PACMAN EATS UPS ALL THE
let gameOver = () => {
  if (dotLength === 67) {
    alert("YouWin!");
  }
};

//first you have to get the score "0000"
// then you have to take that score and add "1";
// then you have to display that new score.

let movement = e => {
  console.log("movement", e);
  let up = 38;
  let down = 40;
  let left = 37;
  let right = 39;
  let x = pacmanLocation[0];
  let y = pacmanLocation[1];

  switch (e.keyCode) {
    case up:
      if (canPackmanMove("up")) {
        counter("up");
        board[x][y] = "empty";
        board[x - 1][y] = "pacman";
        pacmanLocation[0] -= 1;
        paintWorld();

        gameOver();
      }
      break;
    case down:
      if (canPackmanMove("down")) {
        counter("down");
        board[x][y] = "empty";
        board[x + 1][y] = "pacman";
        pacmanLocation[0] += 1;
        paintWorld();

        gameOver();
      }
      break;
    case left:
      if (canPackmanMove("left")) {
        counter("left");
        board[x][y] = "empty";
        board[x][y - 1] = "pacman";
        pacmanLocation[1] -= 1;
        paintWorld();

        gameOver();
      }
      break;
    case right:
      if (canPackmanMove("right")) {
        counter("right");
        board[x][y] = "empty";
        board[x][y + 1] = "pacman";
        pacmanLocation[1] += 1;
        paintWorld();

        gameOver();
      }
      break;
  }
};

body.addEventListener("keydown", movement);
score.addEventListener("keydown", counter);
