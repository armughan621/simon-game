let num;
function nextRound() {
  num = Math.floor(Math.random() * 4) + 1;
  console.log("Random number generated:", num);
}

nextRound();

let yellowSound = new Audio("./sounds/yellow.mp3");
let redSound = new Audio("./sounds/red.mp3");
let blueSound = new Audio("./sounds/red.mp3");
let greenSound = new Audio("./sounds/green.mp3");
let wrongSound = new Audio("./sounds/wrong.mp3");
let level = 1;

function restartGame() {
  level = 1;
  nextRound();
  document.getElementById("level-title").textContent = "Level " + level;
}

document.getElementById("green").addEventListener("click", function () {
  if (num === 1) {
    level++;
    document.getElementById("level-title").textContent = "Level " + level;
    greenSound.play();
    nextRound();
  } else {
    wrongSound.play();
    alert("Game Over! Press OK to restart.");
    restartGame();
  }
});
document.getElementById("red").addEventListener("click", function () {
  if (num === 2) {
    level++;
    document.getElementById("level-title").textContent = "Level " + level;
    redSound.play();
    nextRound();
  } else {
    wrongSound.play();
    alert("Game Over! Press OK to restart.");
    restartGame();
  }
});
document.getElementById("yellow").addEventListener("click", function () {
  if (num === 3) {
    let sound = new Audio("./sounds/yellow.mp3");
    sound.play();

    nextRound();
  } else {
    wrongSound.play();
    alert("Game Over! Press OK to restart.");
    restartGame();
  }
});
document.getElementById("blue").addEventListener("click", function () {
  if (num === 4) {
    level++;
    document.getElementById("level-title").textContent = "Level " + level;
    blueSound.pause();
    blueSound.currentTime = 0;
    blueSound.play().catch((error) => {
      console.error("Blue sound could not be played:", error);
    });
    nextRound();
  } else {
    wrongSound.play();
    alert("Game Over! Press OK to restart.");
    restartGame();
  }
});
