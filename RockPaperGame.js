
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

const fireImages = [

  "./fire2.png",
  "./fire3.png",
  "./fire4.png",
  "./fire5.png",
  "./fire6.png",
  "./fire1.png"
]
function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loopAnimation(elementId) {

  let i = 0;
  while (i != fireImages.length) {

    document.getElementById(elementId).src = fireImages[i];
    i++
    await pause(30);

    if (fireImages.length === i) {

      i = 0;
    }
  }
}
async function loopAnimation3() {

  let i = 0;
  while (i != fireImages.length) {

    document.getElementById("computerProfile").src = fireImages[i];
    i++
    await pause(30);

    if (fireImages.length === i) {

      i = 0;
    }
  }
}
function main() {



  const hideTitle = document.getElementById("home__title");
  const hideStartButton = document.getElementById("start");
  hideStartButton.style.display = "none"
  hideTitle.style.display = "none";



  game();
}
async function animateText(text, delay, isLast, idName) {


  let i = 0;
  const speaker = document.getElementById(idName);

  function writeWord() {

    if (i < text.length) {

      speaker.innerHTML += text.charAt(i);
      i++
      setTimeout(writeWord, 50);
    }
  }

  writeWord();
  await pause(delay);
  if (!isLast) {

    speaker.textContent = ""
  }
}
async function introSpeech() {

  const shoutCallOne = document.getElementById("shoutCallOne");
  const shoutCallTwo = document.getElementById("shoutCallTwo");
  const shoutCallThree = document.getElementById("shoutCallThree");
  const shoutCallFinal = document.getElementById("shoutCallFinal");

  shoutCallOne.style.display = "none";
  shoutCallTwo.style.display = "none";
  shoutCallThree.style.display = "none";
  shoutCallFinal.style.display = "none";

  const introTitle = document.getElementById("introTitle");
  const introAudio = document.getElementById("introMusic");
  introAudio.play();
  await pause(1000);

  await animateText(`hmm.....Pathetic....`, 5000 , false, "introTitle");
  await animateText(`Rock, Paper, Scissors? No.`, 5000, false, "introTitle");
  await animateText("This is annihilation. And you?", 5000, false, "introTitle");
  await animateText("You're nothing", 3500, false, "introTitle");
  await animateText("Rock? I'll grind it to dust.", 2000, false, "introTitle");
  await animateText("Paper? I'll burn it to ashes.", 2000, false, "introTitle");
  await animateText("Scissors? I'll twist them into your undoing.", 3000, false, "introTitle");
  await animateText("Go on. Pick your poison.", 2500, false, "introTitle");
  await animateText("So go on. Struggle. Squirm. Pretend you have a chance.", 5000, false, "introTitle");
  await animateText("It only makes your defeat sweeter.", 3000, false, "introTitle")
  await animateText("I win.", 2000, false, "introTitle");
  fadeOut(introAudio, 3000)
  await animateText("You lose. Always.", 3000, false, "introTitle");
  await animateText("Let the Game. Begin", 2000, true, "introTitle");

  // await animateText(`Rock, Paper, Scissors? No.`, 0);
  // await animateText("This is annihilation. And you?", 0);
  // await animateText("You're nothing", 0);
  // await animateText("Rock? I'll grind it to dust.", 0);
  // await animateText("Paper? I'll burn it to ashes.", 0);
  // await animateText("Scissors? I'll twist them into your undoing.", 0);
  // await animateText("Go on. Pick your poison.", 0);
  // await animateText("So go on. Struggle. Squirm. Pretend you have a chance.", 0);
  // await animateText("It only makes your defeat sweeter.", 0)
  // await animateText("I win.", 0);
  // // fadeOut(introAudio, 3000)
  // await animateText("You lose. Always.", 0);
  // await animateText("Let the Game. Begin", 2000);
  // const battleMusic = document.getElementById("battleMusic");




  const introSpeaker = document.getElementById("introSpeaker");
  introSpeaker.style.display = "none";
  battleMusic.play();
  await pause(600);
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  await pause(200);
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
  await pause(300)
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  await pause(200);



  const intro = document.getElementById("intro");
  intro.style.display = "none"

  const animation = document.getElementById("animation");
  animation.style.display = "flex"

  await pause(2000);
  shoutCallOne.style.display = "block";
  await pause(300);
  shoutCallOne.style.display = "none";
  shoutCallTwo.style.display = "block";
  await pause(300);
  shoutCallTwo.style.display = "none";
  shoutCallThree.style.display = "block";
  await pause(300);
  const flame = document.getElementById("fireFrame");
  flame.classList.add("fire__after")
  shoutCallThree.style.display = "none";
  shoutCallFinal.style.display = "block";
  shoutCallFinal.style.fontSize = "3rem"
  await pause(500);


  await pause(3000);
  animation.style.display = "none";
  game();
}

function fadeOut(audio, duration = 1000) {
  let volume = audio.volume;
  const interval = 50;
  const steps = duration / interval;
  const decrement = volume / steps;

  const fadeInterval = setInterval(() => {
    volume = Math.max(volume - decrement, 0);
    audio.volume = volume;

    if (volume <= 0) {
      clearInterval(fadeInterval);
      audio.pause();
      audio.currentTime = 0; // Reset to beginning
    }
  }, interval);
}

async function animationText(text, time) {

  const introTitle = document.getElementById("introTitle");
  introTitle.classList.remove("intro__title");
  void introTitle.offsetWidth;
  introTitle.textContent = text;
  introTitle.classList.add("intro__title");
  await pause(time);

}
function game() {

  const itemName = document.getElementById("listItem");
  const itemImg = document.getElementById("listItemImg");
  const home = document.getElementById("home");
  home.style.display = "flex";


}

async function buttonStart() {

  const home = document.getElementById("home");
  const itemName = document.getElementById("listItem");
  const itemImg = document.getElementById("listItemImg");
  const homePartTwo = document.getElementById("homeTwo");
  const attackButtons = document.getElementById("attackButtons");
  homePartTwo.style.display = "none"
  home.style.display = "none";
  const gameBox = document.getElementById("gameBox");
  gameBox.style.display = "flex"

  const battleMessage = "Battle Start";

  await animateText(battleMessage, 2000, false, "battleMeaages");



  while (isGameOver === false) {

    await animateText("ROCK", 500, false, "battleMeaages");
    await animateText("PAPER", 500, false, "battleMeaages");
    await animateText("SCISSOR", 500, false, "battleMeaages");
    await animateText("SHOOT", 500, false, "battleMeaages");
    attackButtons.style.display = "flex";

    function waitForButtonClick() {
      return new Promise((resolve) => {
        document.querySelector(".attack__buttons").addEventListener("click", function (event) {
          if (event.target.tagName === "BUTTON") {
            const buttonValue = event.target.value;
            console.log(buttonValue);
            resolve(buttonValue);  // Resolve the promise with the value of the clicked button
          }
        });
      });
    }
    let user = await waitForButtonClick();
    if (user === "exit") {

      gameBox.style.display = "none";
      isGameOver = true;
      const probability = finalProbability();
      const gameOver = document.getElementById("gameOver");

      gameOver.style.display = "flex";
      const gameOverText = document.getElementById("gameOverText");

      if (numberOfGames === 0) {
        gameOverText.innerHTML = "I mean...you didn't win or loss, you start didn't and you wasting my time";
        return;
      }
      if (numGamesWin / numberOfGames < 45 && numGamesWin > 0) {

        gameOverText.innerHTML = `You loss the War. The probably of winning is ${probability}`;
        return;
      }
      if (numGamesWin / numberOfGames >= .45 && numGamesWin / numberOfGames <= .50) {

        gameOverText.innerHTML = `It was evenly match, hard to say. The probably of winning is ${probability}`;
      }
      if (numGamesWin / numberOfGames > .50 && numGamesWin / numberOfGames <= .60) {

        gameOverText.innerHTML = `Evenly Match but, you Win the war. The probably of winning is ${probability}`;
        return;
      }
      if (numGamesWin / numberOfGames > .60) {

        gameOverText.innerHTML = `You won the War. The probably of winning is ${probability}`;
        return;
      }

      break;
    }
    computer = guessingToWin();
    console.log("Computer", computer);
    console.log("User", user);


    switch (computer) {
      case "rock":
        await rockBattle(computer, user);
        numberOfGames++;
        await pause(500);
        break;

      case "paper":
        await paperBattle(computer, user)
        numberOfGames++;
        await pause(500);
        break;

      case "scissor":
        await scissorBattle(computer, user)
        numberOfGames++;
        await pause(500);
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
  let matchMessage = "";

  if (user === 'paper') {
    matchResult = "w"
    matchMessage = "Paper wraps around the Rock, immobilizing it completely! The enemy is trapped!"
    await resultOfMatch(computer, user, matchResult, matchMessage);
    numOfRocks++;
    numGamesWin++;
    return;
  }

  if (user === 'scissor') {
    matchResult = "l"
    matchMessage = "Scissors slash through Paper like a sword! The enemy is cut clean!";
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;
  }

  if (user === computer) {

    matchResult = "e"
    matchMessage = "The mighty rocks clash with a thunderous impact! It’s a stalemate!"
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;

  }
}

async function paperBattle(computer, user) {
  let matchResult = "";
  let matchMessage = "";

  if (user === 'scissor') {
    matchResult = "w"
    numOfPapers++;
    numGamesWin++;
    matchMessage = "Scissors slash through Paper like a sword! The enemy is cut clean!"
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;
  }

  if (user === 'rock') {
    matchResult = "l"
    matchMessage = "Paper surrounds the Rock with crushing weight! User is left stunned!"
    await resultOfMatch(computer, user, matchResult, matchMessage);;
    return;
  }

  if (user === computer) {

    matchResult = "e"
    matchMessage = "The papers flutter in the wind, locked in a fierce standoff! No one wins this round."
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;
  }
}

async function scissorBattle(computer, user) {
  let  matchMessage = "";
  let matchResult = "w"
  if (user === 'rock') {
    matchResult = "w"
    numOfScissors++;
    numGamesWin++;
    matchMessage = "User’s Rock smashes through the fragile Scissors! The enemy crumbles!";
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;
  }

  if (user === 'paper') {

    matchResult = "l"
    matchMessage = "Scissors slice through Paper with precision! The paper is shredded into pieces!";
    await resultOfMatch(computer, user, matchResult, matchMessage);
    return;
  }

  if (user === computer) {
    matchResult = "e"
    matchMessage = "The scissors clash with a sharp clang! Both players struggle for dominance, neither able to break through!"
    await resultOfMatch(computer, user, matchResult, matchMessage);
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

async function resultOfMatch(computer, user, matchResult, matchMessage) {

  const attackButtons = document.getElementById("attackButtons");
  attackButtons.style.display = "none";
  const battleMeaages = document.getElementById("battleMeaages");
  battleMeaages.style.display = "flex";

  const userProfile = document.getElementById("userProfile");
  const userProfileSpeach = document.getElementById("userProfileSpeach");
  const computerProfileSpeach = document.getElementById("computerProfileSpeach");


  switch (matchResult) {

    case "e":
      userProfile.classList.add("userProfile__image--action");
      await pause(3000);
      userProfileSpeach.style.display = "block";
      computerProfileSpeach.style.display = "block";
      await animateText(user, 500, false, "userProfileSpeach");
      await animateText(computer, 500, false, "computerProfileSpeach");
      await animateText(matchMessage, 5000, false, "battleMeaages");
      break;
    case "w":
      userProfile.classList.add("userProfile__image--action");
      await pause(3000);
      userProfileSpeach.style.display = "block";
      computerProfileSpeach.style.display = "block";
      await animateText(user, 500, false, "userProfileSpeach");
      await animateText(computer, 500, false, "computerProfileSpeach");
      await animateText(matchMessage, 5000, false, "battleMeaages");
      break;
    case "l":
      userProfile.classList.add("userProfile__image--action");
      await pause(3000);
      userProfileSpeach.style.display = "block";
      computerProfileSpeach.style.display = "block";
      await animateText(user, 500, false, "userProfileSpeach");
      await animateText(computer, 500, false, "computerProfileSpeach");
      await animateText(matchMessage, 5000, false, "battleMeaages");

    default:
      break;
  }

  userProfile.classList.remove("userProfile__image--action");
  userProfileSpeach.style.display = "none";
  computerProfileSpeach.style.display = "none";

  return
}

function finalProbability() {

  return combinations(numberOfGames, numGamesWin) *
    Math.pow(1 / 3, numGamesWin) *
    Math.pow(2 / 3, numberOfGames - numGamesWin);
}