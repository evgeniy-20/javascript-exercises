var scores = {};
scores["father"] = 0;
scores["mather"] = 0;
scores["Stas"] = 0;
scores["Yura"] = 0;
scores["Evgen"] = 0;
scores["Alina"] = 0;
scores["Katya"] =  0;
scores["Sophia"] = 0;
console.log(scores["father"]);
console.log(scores["mather"]);
console.log(scores["Stas"]);
console.log(scores["Yura"]);
console.log(scores["Evgen"]);
console.log(scores["Alina"]);
console.log(scores["Katya"]);
console.log(scores["Sophia"]);
scores["father"] += 20;
console.log(scores["father"]);
scores["mather"] += 19;
console.log(scores["mather"]);
scores["Stas"] += 15;
console.log(scores["Stas"]);
scores["Yura"] += 12;
console.log(scores["Yura"]);
scores["Evgen"] += 10;
console.log(scores["Evgen"]);
scores["Alina"] += 8;
console.log(scores["Alina"]);
scores["Katya"] += 6;
console.log(scores["Katya"]);
scores["Sophia"] += 4;
console.log(scores["Sophia"]);
var myCrazyObject = {
    "name": "A radiculous object",
    "somearray": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "randomanimal": "Banana Shark"
};
console.log(myCrazyObject["somearray"][2]["number"]);