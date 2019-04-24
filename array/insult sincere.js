var randomBodyParts = ["глаз", "нос", "череп", "дупа"];
var randomAnimalBodyParts = ["хвост", "пузо", "рот"];
var randomAdjectives = ["вонючий", "унылая", "дурацкий"];
var randomAnimals = ["жабы", "выдры", "коровы", "мартышки", "крысы"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];
var randomInsult = "У тебя " + randomBodyPart + " ещё более " + randomAdjective + " чем " + randomAnimalBodyPart + " у " + randomAnimal + "!!!";
console.log(randomInsult);
