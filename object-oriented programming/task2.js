var speak = function () {
   console.log(this.sound + "! My name is " + this.name + "!");
};
var cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};
cat.speak();