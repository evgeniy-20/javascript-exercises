var phrases = [
    "That sounds good",
    "Yes, you should definitely do that",
    "I'm not sure that's a great idea",
    "Maybe not today?",
    "Computer says no."
];
// Мені слід випити ще один мілк-шейк?
console.log(phrases[Math.floor(Math.random() * 5)]);
// Чи варто мені робити домашнє завдання?
console.log(phrases[Math.floor(Math.random() * 5)]);
var randomBodyParts = [" Face"," Nose"," Hair"];
var randomAdjectives = [" Smelly", " Boring", " Stupid"];
var randomWords = [" Fly", " Marmot", " Stick", " Monkey", " Rat"];
// Обираємо випадкову частину тіла із масиву randomBodyParts:
var randomBodyParts = randomBodyParts[Math.floor(Math.random() * 3)];
console.log(randomBodyParts);
// Обираємо випадковий прикметник із масиву randomAdjectives:
var randomAdjectives = randomAdjectives[Math.floor(Math.random() * 3)];
console.log(randomAdjectives);
// Обираємо випадкове сллово із масиву randomWords:
var randomWords = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWords);
// З'єднуємо усі випадкові рядки у речення:
var randomInsult = "Your" + randomBodyParts + " is like a " + randomAdjectives + "" + randomWords + "!!!";
console.log(randomInsult);