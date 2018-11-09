var alphabet = "abcdefghijklmnopqrstuvwxyz";
/*
var randomLetter;
for (var i = 0; i < 5; i++) {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);
}
*/
var randomString = "";
var randomLetter;
for (var i = 0; i < 20; i++) {
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    randomString +=  randomLetter;
}
console.log(randomString);
var input = "javascript is awesome";
var output = "";
for (var i = 0; i < input.length; i++) {
    if (input[i] === "a") {
        output += "4";
    } else if (input[i] === "e") {
        output += "3";
    } else if (input[i] === "i") {
        output += "1";
    } else if (input[i] === "o") {
        output += "0";
    } else {
        output += input[i];
    }
}
console.log(output);







