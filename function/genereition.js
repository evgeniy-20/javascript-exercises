var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// З'єднуємо усі випадкові рядки у речення
var randomString = "Your " + pickRandomWord(randomBodyParts) +
    " is like a "  +  pickRandomWord(randomAdjectives) +
    " " + pickRandomWord(randomWords) + " !!!";
console.log(randomString);