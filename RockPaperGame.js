let numberOfGames = 0;
let numOfPapers = 0;
let numOfRocks = 0;
let numOfScissors = 0;

let probOfPaper = 0;
let probOfRock = 0;
let proOfScirssor = 0;
let isGameOver = false;

function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function game() {
  while (!isGameOver) {
    await pause(2000);

    console.log("Rock");
    await pause(2000);
    console.log("Paper");
    await pause(2000);
    console.log("Scissors");

    let user = prompt("Pick Rock Paper, or  Scissors");
    console.log(user);
    let computer = guessingToWin();

    switch (user) {
      case "Rock":
        numOfRocks++;
        break;

      case "Paper":
        numOfPapers++;
        break;

      case "Scissor":
        numOfScissors++;
        break;
      default:
        break;
    }

    numberOfGames++;
  }
}

function probResult() {
  probOfRock =
    math.combinations(numberOfGames, numOfRocks) *
    math.pow(1 / 3, numOfRocks) *
    math.pow(2 / 3, numberOfGames - numOfRocks);

  probOfPaper =
    math.combinations(numberOfGames, numOfPapers) *
    math.pow(1 / 3, numOfPapers) *
    math.pow(2 / 3, numberOfGames - numOfPapers);

  pro =
    math.combinations(numberOfGames, numOfScissors) *
    math.pow(1 / 3, numOfScissors) *
    math.pow(2 / 3, numberOfGames - numOfScissors);
}

game();

function rockBattle(computer) {
  if (computer === user || computer === "rock") {
  }
}
function paperBattle(computer) {
  if (computer === user || computer === "scissor") {
  }
}
function scirssorBattle(computer) {
  if (computer === user || computer === "rock") {
  }
}
function guessingToWin(computer) {
  probResult();

  if (probOfPaper === probOfRock && probOfRock === proOfScirssor) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        computer = "rock";
        break;
      case 2:
        computer = "paper";
        break;
      case 3:
        computer = "scissor";
        break;
      default:
        break;
    }
  }
}
