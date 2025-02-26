let numberOfGames = 0;
let numOfPapers = 0;
let numOfRocks = 0;
let numOfScissors = 0;

let probOfPaper = 0;
let probOfRock = 0;
let probOfScissor = 0;
let isGameOver = false;
let computer = "";
let numGamesWin = 0;



function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function main() {

  const hideTitle = document.getElementById("home__title");
  const hideStartButton = document.getElementById("start");
  const showGame = document.getElementById("gameBox");
  hideStartButton.style.display = "none"
  hideTitle.style.display = "none";
  showGame.style.display = "flex";


  game();
}
async function game() {

  const itemName = document.getElementById("listItem");
  const itemImg = document.getElementById("listItemImg");

  while (isGameOver === false) {

    itemImg.style.display = "block"
    itemName.textContent = "ROCK";
    itemImg.src = "./rock.png";

    await pause(1500);
    itemName.textContent = "PAPER";
    itemImg.src = "./paper.png";

    await pause(1500);
    itemName.textContent = "SCISSOR";
    itemImg.src = "./scissor.png";

    await pause(1500);
    itemName.textContent = "SHOOT";
    itemImg.style.display = "none"

    await pause(1500);

    let user = prompt("Pick Rock Paper, or  Scissors (To Exist Game write exit)");
    console.log("User: ", user);
    if (user === "exit") {

      isGameOver = true;
      const probability = finalProbability();
      const restart = document.getElementById("restart");
      restart.style.display = "block";
      restart.textContent = "Restart"
      restart.className = "home__button"
      

      restart.onclick = function () {
        window.location.reload();
      }

      if (numberOfGames === 0) {
        itemName.textContent = "I mean...you didn't win or loss, you start didn't";
        return;
      }
      if (numGamesWin / numberOfGames < 45 && numGamesWin > 0) {

        itemName.textContent = `You loss the War. The probably of winning is ${probability}`;
        return;
      }
      if (numGamesWin / numberOfGames >= .45 && numGamesWin / numberOfGames <= .50) {

        itemName.textContent = `It was evenly match, hard to say. The probably of winning is ${probability}`;
      }
      if (numGamesWin / numberOfGames > .50 && numGamesWin / numberOfGames <= .60) {

        itemName.textContent = `Evenly Match but, you Win the war. The probably of winning is ${probability}`;
        return;
      }
      if (numGamesWin / numberOfGames > .60) {

        itemName.textContent = `You won the War. The probably of winning is ${probability}`;
        return;
      }

      break;
    }
    // computer = guessingToWin();
    computer = "rock";
    console.log("Computer: ", computer);


    switch (computer) {
      case "rock":
        rockBattle(computer, user);
        numberOfGames++;
        await pause(5000);
        break;

      case "paper":
        paperBattle(computer, user)
        numberOfGames++;
        break;

      case "scissor":
        scissorBattle(computer, user)
        numberOfGames++;
        break;
      default:
        break;
    }
  }
}

function guessingToWin() {
  probResult();

  if (probOfPaper === probOfRock && probOfRock === probOfScissor) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        return "rock";

      case 2:
        return "paper";

      case 3:
        return "scissor";

      case "exit":

      default:
        break;
    }
  }

  const map = new Map();
  map.set(probOfRock, "rock");
  map.set(probOfPaper, "paper");
  map.set(probOfScissor, "scissor");

  const biggestProb = Math.min(...map.keys());

  const gettingBigPro = map.get(biggestProb);
  console.log(gettingBigPro, biggestProb);

  return gettingBigPro;


}

async function probResult() {

  probOfRock =
    combinations(numberOfGames, numOfRocks) *
    Math.pow(1 / 3, numOfRocks) *
    Math.pow(2 / 3, numberOfGames - numOfRocks);

  console.log("Rock Prob : ", probOfRock)
  probOfPaper =
    combinations(numberOfGames, numOfPapers) *
    Math.pow(1 / 3, numOfPapers) *
    Math.pow(2 / 3, numberOfGames - numOfPapers);

  console.log("Paper Prob : ", probOfPaper);

  probOfScissor =
    combinations(numberOfGames, numOfScissors) *
    Math.pow(1 / 3, numOfScissors) *
    Math.pow(2 / 3, numberOfGames - numOfScissors);
  console.log("Scissors Pro : ", probOfScissor);

}

async function rockBattle(computer, user) {

  let matchResult = "";

  if (user === 'paper') {
    matchResult = 'w'
    resultOfMatch(computer, user, matchResult);
    numOfRocks++;
    numGamesWin++;
    return;
  }

  if (user === 'scissor') {
    matchResult = 'l'
    resultOfMatch(computer, user, matchResult);
    return;
  }

  if (user === computer) {

    matchResult = "e"

    resultOfMatch(computer, user, matchResult);
    return;

  }
}

async function paperBattle(computer, user) {
  let matchResult = "";
  if (user === 'scissor') {
    matchResult = 'w'
    numOfPapers++;
    numGamesWin++;
    resultOfMatch(computer, user, matchResult);
    return;
  }

  if (user === 'rock') {
    matchResult = 'l'
    resultOfMatch(computer, user, matchResult);;
    return;
  }

  if (user === computer) {

    matchResult = 'e'
    resultOfMatch(computer, user, matchResult);
    return;
  }
}

function scissorBattle(computer, user) {
  let matchResult = "w"
  if (user === 'rock') {
    matchResult = 'w'
    numOfScissors++;
    numGamesWin++;
    resultOfMatch(computer, user, matchResult);
    return;
  }

  if (user === 'paper') {

    matchResult = 'l'
    resultOfMatch(computer, user, matchResult);
    return;
  }

  if (user === computer) {
    matchResult = 'e'
    resultOfMatch(computer, user, matchResult);
    return;
  }
}
function combinations(n, k) {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;

  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n - (k - i));
    result /= i;
  }
  return result;
}

async function resultOfMatch(computer, user, matchResult) {

  const showGame = document.getElementById("gameBox");
  showGame.style.display = "none";
  const showResult = document.getElementById("gameResultContainer");
  showResult.style.display = "flex";
  const computerResult = document.getElementById("computer");
  const userResult = document.getElementById("user");
  const result = document.getElementById("result");
  const resultDescrip = document.getElementById("resultDescription");

  computerResult.src = `./${computer}.png`;
  userResult.src = `./${user}.png`;

  switch (matchResult) {

    case "e":
      result.src = "./equal.png"
      resultDescrip.textContent = "Evenly Match, but  war didn't end"
      break;
    case "w":
      result.src = "./check.png";
      resultDescrip.textContent = "Win the Battle, but did you win the war";
    case "l":
      result.src = "./close.png";
      resultDescrip.textContent = "Loss Battle, but not the war";
    default:
      break;
  }


  await pause(5000);
  showGame.style.display = "flex";
  showResult.style.display = "none";

  return
}

function finalProbability(){
  
  return combinations(numberOfGames, numGamesWin) *
    Math.pow(1 / 3, numGamesWin) *
    Math.pow(2 / 3, numberOfGames - numGamesWin);
}