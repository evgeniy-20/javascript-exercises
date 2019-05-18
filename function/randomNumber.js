var getRandomNumber = function () {
    return Math.floor(Math.random() * 9);
};
console.log(getRandomNumber());
var arr = [];
while(arr.length < 4){
    var randomnumber = Math.floor(Math.random()*9) + 1;
    if(arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
console.log(arr);
var compare = function (argument1, argument2) {
    console.log("My first argument was: " + argument1);
    console.log("My first argument was: " + argument2);
};
compare(true, false);
function compare(a) {
    return a + 1;
}
var result = compare(15);
console.log(result);
var result2 = "Stas" == "Evgeniy";
console.log(result2);
var areArraysSame = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
