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
const apitoken = "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";
const modelEndpoint = 'https://api-inference.huggingface.co/models/bert-base-uncased';

const villainPlans = [
  "Rock, Paper, Scissors? No. This is annihilation. And you? You’re nothing. A trembling insect, flailing in the dark, praying for a miracle that will never come.Rock? I’ll grind it to dust. Paper? I’ll burn it to ashes. Scissors? I’ll twist them into your undoing. Go on. Pick your poison. No matter what you choose… I win. You lose. Always.",
  "I bet you eat cereal for lunch",
  "I forehead so big, its can make a map",
  "I know your dumb, trust",
  "I don’t need no ‘anger management.’ I need people to stop pissing me off!",
  "I’m just here for the food. I’m not trying to get into any deep conversations, alright?",
  "You know what? I don’t need a reason to be angry. I’m angry because I’m angry. It’s just who I am."
];

async function fetchVillainSpeech(inputText) {

  const response = await fetch(modelEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: inputText, option: {max_length: 100} }),
  });

  if (response.status === 201) {
    console.error("FAILED", response.statusText);
    return;
  }

  const data = await response.json();
  const speech = data[0]?.generated_text || "The villain is lost for words... but don't worry, they'll be back!";
  document.getElementById('response').textContent = speech;

  document.getElementById('villain-speech').addEventListener('click', () => {
    // Select a random villain plan from the array
    const randomPlan = villainPlans[Math.floor(Math.random() * villainPlans.length)];
    fetchVillainSpeech(randomPlan);
});

}

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

async function loopAnimation() {

  let i = 0;
  while (i != fireImages.length) {

    document.getElementById("fireFrame").src = fireImages[i];
    i++
    await pause(30);

    if (fireImages.length === i) {

      i = 0;
    }
  }
}
async function loopAnimation2() {

  let i = 0;
  while (i != fireImages.length) {

    document.getElementById("fireFrame2").src = fireImages[i];
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

  // await animateText(`hmm.....Pathetic....`, 5000);
  // await animateText(`Rock, Paper, Scissors? No.`, 5000);
  // await animateText("This is annihilation. And you?", 5000);
  // await animateText("You're nothing", 3500);
  // await animateText("Rock? I'll grind it to dust.", 2000);
  // await animateText("Paper? I'll burn it to ashes.", 2000);
  // await animateText("Scissors? I'll twist them into your undoing.", 3000);
  // await animateText("Go on. Pick your poison.", 2500);
  // await animateText("So go on. Struggle. Squirm. Pretend you have a chance.", 5000);
  // await animateText("It only makes your defeat sweeter.", 3000)
  // await animateText("I win.", 2000);
  // fadeOut(introAudio, 3000)
  // await animateText("You lose. Always.", 3000);
  // await animateText("Let the Game. Begin", 2000, true);

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

  animateText(battleMessage, 2000, false, "battleMeaages");
  await pause(2000)
  attackButtons.style.display = "flex";



  while (isGameOver === false) {


  function waitForButtonClick() {
    return new Promise((resolve) => {
      document.querySelector(".attack__buttons").addEventListener("click", function(event) {
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

  const attackButtons = document.getElementById("attackButtons");
  attackButtons.style.display = "none";
  



  switch (matchResult) {

    case "e":
      resultDescrip.textContent = "Evenly Match, but  war didn't end"
      break;
    case "w":
      resultDescrip.textContent = "Win the Battle, but did you win the war";
    case "l":
      resultDescrip.textContent = "Loss Battle, but not the war";
    default:
      break;
  }


  await pause(5000);
  showGame.style.display = "flex";
  showResult.style.display = "none";

  return
}

function finalProbability() {

  return combinations(numberOfGames, numGamesWin) *
    Math.pow(1 / 3, numGamesWin) *
    Math.pow(2 / 3, numberOfGames - numGamesWin);
}