let words = ["apple", "banana", "cherry"];
let word = words[Math.floor(Math.random() * words.length)];
let display = Array(word.length).fill("_");
let incorrect = [];
let message = "Guess a letter";

const handleGuess = (letter) => {
  if (word.includes(letter)) {
    let newDisplay = [...display];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        newDisplay[i] = letter;
      }
    }
    display = newDisplay;
    if (!display.includes("_")) {
      message = "You win!";
    }
  } else {
    incorrect.push(letter);
    message = "Incorrect";
    if (incorrect.length === 5) {
      message = "You lose";
    }
  }
};

console.log(display.join(" "));
console.log("Incorrect: " + incorrect.join(" "));
console.log(message);

