var string = "I'm good!";
var count = 0;
function countO(string) {
    for (var i=0; i < string.length; i++) {
        var letter = string[i];
        if (letter === "o") {
            count++;
            console.log(letter);
        }
    }
}
console.log(countO());
var string1 = "Stas";
var string2= "Evgen";


