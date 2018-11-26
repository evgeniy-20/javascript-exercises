var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Planet", "Worm", "Flower", "Computer"];
console.log(pickRandomWord(randomWords));