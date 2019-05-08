var getRandomNumber = function (number) {
    return number[Math.floor(Math.random() * number.length)];
};
var randomNumbers = [0,1,2,3,4,5,6,7,8,9];
console.log(getRandomNumber(randomNumbers));