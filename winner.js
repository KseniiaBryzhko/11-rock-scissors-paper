const body = document.querySelector("body");
const playAgain = document.querySelector(".play-again");
const userImage = document.querySelector(".your-pick > img");
const computerImage = document.querySelector(".computer-pick > img");
const youWinText = document.querySelector(".you-win");
const computerWinText = document.querySelector(".computer-wins");

const params = new URLSearchParams(window.location.search);

const choiceToImageMap = {
  0: { image: "rock.png", alt: "Rock" },
  1: { image: "paper.png", alt: "Paper" },
  2: { image: "scissors.png", alt: "Scissors" },
};

let user, computer, winner;

if (!params.has("user") || !params.has("computer")) {
  Window.location.href = "../";
}

user = params.get("user");
computer = params.get("computer");

userImage.src = `./images/${choiceToImageMap[user].image}`;
userImage.alt = choiceToImageMap[user].alt;
computerImage.src = `./images/${choiceToImageMap[computer].image}`;
computerImage.alt = choiceToImageMap[computer].alt;

playAgain.addEventListener("click", () => {
  window.location.href = "./";
});

const checkWinner = () => {
  let winner = "";
  if (user === computer) {
    winner = "tie";
  } else if (user === "0" && computer === "1") {
    winner = "computer";
  } else if (user === "0" && computer === "2") {
    winner = "you";
  } else if (user === "1" && computer === "0") {
    winner = "you";
  } else if (user === "1" && computer === "2") {
    winner = "computer";
  } else if (user === "2" && computer === "0") {
    winner = "computer";
  } else if (user === "2" && computer === "1") {
    winner = "you";
  }

  if (winner === "tie") {
    youWinText.innerText = "tie";
    computerWinText.innerText = "tie";
  } else if (winner === "you") {
    body.classList.add("you-win");
    youWinText.innerText = "You won";
  } else {
    body.classList.add("computer-wins");
    youWinText.innerText = "Computer won";
  }
};

checkWinner();
