var speak = function () {
   console.log(this.sound + "! My name is " + this.name + "!");
};
var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};
cat.speak();
var pig = {
    sound: "Oink",
    name: "Carlie",
    speak: speak
};
var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
};
pig.speak();
horse.speak();