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
    console.log("My first argument was: " + answer);
    console.log("My first argument was: " + attempt);
};
compare();
